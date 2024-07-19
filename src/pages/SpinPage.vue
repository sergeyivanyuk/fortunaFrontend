/* eslint-disable */
<template>
    <img class='animation-bg big' src='../../public/animation/fiolet-big.svg' />
    <img class='animation-bg center' src='../../public/animation/fiolet-center.svg' />
    <img class='animation-bg small' src='../../public/animation/fiolet-small.svg' />
    <img class='animation-bg big-1' src='../../public/animation/light-big.svg' />
    <img class='animation-bg center-1' src='../../public/animation/light-center.svg' />
    <img class='animation-bg small-1' src='../../public/animation/light-small.svg' />

    <img class='animation-bg big-2' src='../../public/animation/fiolet-big.svg' />
    <img class='animation-bg center-2' src='../../public/animation/fiolet-center.svg' />
    <img class='animation-bg small-2' src='../../public/animation/fiolet-small.svg' />
    <img class='animation-bg big-3' src='../../public/animation/light-big.svg' />
    <img class='animation-bg center-3' src='../../public/animation/light-center.svg' />
    <img class='animation-bg small-3' src='../../public/animation/light-small.svg' />

    <img class='animation-bg big-4' src='../../public/animation/fiolet-big.svg' />
    <img class='animation-bg center-4' src='../../public/animation/fiolet-center.svg' />
    <img class='animation-bg small-4' src='../../public/animation/fiolet-small.svg' />
    <img class='animation-bg big-5' src='../../public/animation/light-big.svg' />
    <img class='animation-bg center-5' src='../../public/animation/light-center.svg' />
    <img class='animation-bg small-5' src='../../public/animation/light-small.svg' />

  <v-card class='spin' style='background: transparent;'>
    <v-row></v-row>
    <v-img src="./background-2.jpg" style="position: relative;">
      <div class='spin__content'>
        <label style="color: white; font-size: 18px">Введите ваш код</label>
        <v-otp-input
        style='margin-top: 20pt;'
          color="white"
          :length="4"
          v-model="otpCode"
          @keyup.enter="handleOtpEnter"
          ref="otpInput"
        ></v-otp-input>
        <v-row class='spin-row' style='position: relative;'>
          <div class='wheel-img' alt='Колесо'>
              <img id='spin-img' class='spin-img' src='../../public/spin.svg' alt='Колесо' />
          </div>

          <img class='spin-arrow' src='../../public/arrow.svg' alt='Стрелка'/>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-btn
              variant="elevated"
              size="large"
              color="#E5FF46"
              rounded="pill"
              height="72"
              width="224"
              :disabled="!isCodeValid || hasSpun"
              @click="spinWheel"
              style='font-size: 22px; font-weight: 700; text-transform: uppercase;'
              :style="{
                boxShadow: '0 0 2px #E5FF46, 0 0 5px #E5FF46, 0 0 10px #E5FF46, 0 0 15px #E5FF46'
              }"
            >
              <label style="font-size: 22px">Крутить!</label>
            </v-btn>
          </v-col>
        </v-row>
      </div>
    </v-img>
    <v-snackbar
      v-model="showNotification"
      :timeout="3000"
    >
      {{ notificationMessage }}
    </v-snackbar>
  </v-card>
</template>

<script>
import axios from "axios";

export default {
  name: "HomePage",
  components: {  },
  data: () => ({
    user_id: null,
    otpCode: '',
    showNotification: false,
    notificationMessage: '',
    hasSpun: false,
  }),
  computed: {
    isCodeValid() {
      return this.otpCode.length === 4;
    }
  },
  mounted() {
    window.Telegram.WebApp.setBackgroundColor("#000000");
    window.Telegram.WebApp.onEvent('backButtonClicked', () => {
      this.$router.push({ path: '/' });
    });
    window.Telegram.WebApp.BackButton.show();
    this.checkInitData({ _auth: window.Telegram.WebApp.initData });

    document.addEventListener('click', this.handleDocumentClick);
  },
  beforeUnmount() {
    document.removeEventListener('click', this.handleDocumentClick);
  },
  methods: {
    checkInitData(data) {
      axios.post('api/checkInitData', data)
        .then(response => {
          this.user_id = response.data.user.id;
        })
        .catch(error => {
          console.error(error);
        });
    },
    handleOtpEnter() {
      if (this.isCodeValid) {
        this.$refs.otpInput.blur(); // Hide the keyboard after pressing Enter
      }
    },
    handleDocumentClick(event) {
      if (this.$refs.otpInput && !this.$refs.otpInput.$el.contains(event.target)) {
        this.$refs.otpInput.blur(); // Hide the keyboard when clicking outside the OTP input
      }
    },
    spinWheel() {
      if (!this.isCodeValid) {
        return;
      }

      this.hasSpun = true;
      axios.post('api/spinWheel', { user_id: this.user_id, otpCode: this.otpCode })
        .then(response => {
          const prize = response.data.prize;

          document.getElementsById('spin__img').classList.add('rot');
          setTimeout(() => {
            alert(`Вы выиграли ${prize} долларов 🎉`);
          }, 7000);
          setTimeout(() => {
            document.getElementsById('spin__img').classList.remove('rot');
          }, 8500);
        })
        .catch(error => {
          console.error(error);
          this.notificationMessage = 'Ошибка при попытке прокрутить колесо. Пожалуйста, попробуйте еще раз.';
          this.showNotification = true;
          this.hasSpun = false; // Allow retry if there was an error
        });
  }
  }
  
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@800&family=Roboto&display=swap');


.spin__content {
  position: absolute; 
  top: 5%; 
  left: 50%; 
  transform: translate(-50%, 0); 
  text-align: center; 
  width: 100vw; 
  height: 100vh;
  padding-top: 5pt;
}
.wheel-img {
  width: 100%;
  height: 100vw;
  display: flex;
  align-items: center;
}
.spin-img {
  width: 85%;
  object-fit: cover;
  position: absolute;
  right: 8%;
  top: 23%;
}
.spin-arrow {
  position: absolute;
    z-index: 5;
    top: 96.5%;
    right: 44%;
    transform: translate(-50%, -50%);
    width: 8%;
    height: 15%;
}
.rot {
    animation-name: rotation;
    animation-duration: 1.5s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
}

@keyframes rotation {
    0% {
        transform:rotate(0deg);
    }
    100% {
        transform:rotate(360deg);
    }
}


.animation-bg {
  max-width: 20px; 
  position: absolute;
  top: 10pt;
  z-index: 1;
  animation: snow ease-in infinite;
  animation-delay: 0;
  animation-duration: 29s;
}
.big {
  animation: snow-1 ease-in infinite;
  animation-delay: 0;
  animation-duration: 25s;
  left: 10pt;
}
.big-1 {
  top: 15vh;
  left: 50pt;
  animation: snow-2 ease-in infinite;
  animation-delay: 0;
  animation-duration: 22s;
}
.small {
  animation: snow-1 ease-in infinite;
  animation-delay: 0;
  animation-duration: 23s;
  left: 70pt;
}
.small-1 {
  animation: snow-2 ease-in infinite;
  animation-delay: 0;
  animation-duration: 28s;
  top: 20vh;
  left: 100pt;
}
.center {
  animation: snow-1 ease-in infinite;
  animation-delay: 0;
  animation-duration: 22s;
  right: 10pt;
}
.center-1 {
  animation: snow-2 ease-in infinite;
  animation-delay: 0;
  animation-duration: 25s;
  top: 10vh;
  right: 50pt;
}

.big-2{
  animation: snow-3 ease-in infinite;
  animation-delay: 0;
  animation-duration: 29s;
  top: 10vh;
  left: 10pt;
}
.big-3 {
  animation: snow-4 ease-in infinite;
  animation-delay: 0;
  animation-duration: 22s;
  top: 15vh;
  left: 50pt;
}
.small-2 {
  animation: snow-3 ease-in infinite;
  animation-delay: 0;
  animation-duration: 24s;
  top: 10vh;
  left: 70pt;
}
.small-3 {
  animation: snow-4 ease-in infinite;
  animation-delay: 0;
  animation-duration: 28s;
  top: 15vh;
  left: 100pt;
}
.center-2 {
  animation: snow-5 ease-in infinite;
  animation-delay: 0;
  animation-duration: 27s;
  top:15vh;
  right: 10pt;
}
.center-3 {
  animation: snow-6 ease-in infinite;
  animation-delay: 0;
  animation-duration: 22s;
  top: 20vh;
  right: 50pt;
}



.big-4{
  animation: snow-7 ease-in infinite;
  animation-delay: 0;
  animation-duration: 23s;
  top: 10vh;
  left: 10pt;
}
.big-5 {
  animation: snow-5 ease-in infinite;
  animation-delay: 0;
  animation-duration: 25s;
  top: 15vh;
  left: 50vw;
}
.small-4 {
  animation: snow-7 ease-in infinite;
  animation-delay: 0;
  animation-duration: 30s;
  top: 10vh;
  left: 70vw;
}
.small-5 {
  animation: snow-7 ease-in infinite;
  animation-delay: 0;
  animation-duration: 17s;
  top: 15vh;
  left: 88vw;
}
.center-4 {
  animation: snow-6 ease-in infinite;
  animation-delay: 0;
  animation-duration: 15s;
  top:15vh;
  right: 20vw;
}
.center-5 {
  animation: snow-8 ease-in infinite;
  animation-delay: 0;
  animation-duration: 20s;
  top: 20vh;
  right: 50vw;
}

@keyframes snow {
  0% {
    top: 0;
  }
  20% {
    right: 10vw;
  }
  40% {
    right: 15vw;
  }
  60% {
    right:5vw;
  }
  100% {
    top: 30vh;
  }
}

@keyframes snow-1{
  0% {
    top: 10vh;
  }
  20% {
    right: 30pt;
  }
  40% {
    right: 50pt;
  }
  60% {
    right: 10pt;
  }
  100% {
    top: 30vh;
  }
}
@keyframes snow-2{
  0% {
    top: 15vh;
  }
  20% {
    right: 5vw;
  }
  40% {
    right: 15vw;
  }
  60% {
    right: 0vw;
  }
  100% {
    top: 30vh;
  }
}
@keyframes snow-3{
  0% {
    top: 20vh;
  }
  20% {
    right: 10pt;
  }
  40% {
    right: 30pt;
  }
  60% {
    right: 20pt;
  }
  100% {
    top: 30vh;
  }
}
@keyframes snow-4 {
  0% {
    top: 0;
  }
  20% {
    left: 10vw;
  }
  40% {
    left: 15vw;
  }
  60% {
    left:5vw;
  }
  100% {
    top: 30vh;
  }
}

@keyframes snow-5{
  0% {
    top: 10vh;
  }
  20% {
    left: 40vw;
  }
  40% {
    left: 50vw;
  }
  60% {
    left: 30vw;
  }
  100% {
    top: 30vh;
  }
}
@keyframes snow-6{
  0% {
    top: 15vh;
  }
  20% {
    left: 5vw;
  }
  40% {
    left: 15vw;
  }
  60% {
    left: 0vw;
  }
  100% {
    top: 30vh;
  }
}
@keyframes snow-7{
  0% {
    top: 20vh;
  }
  20% {
    left: 50vw;
  }
  40% {
    left: 40vw;
  }
  60% {
    left: 60vw;
  }
  100% {
    top: 30vh;
  }
}
@keyframes snow-8{
  0% {
    top: 10vh;
  }
  20% {
    left: 35vw;
  }
  40% {
    left: 45vw;
  }
  60% {
    left: 60vw;
  }
  100% {
    top: 30vh;
  }
}

</style>
<style>
  .spin .v-responsive__content {
  height: 100vh;
}
.v-btn__overlay {
  display: none;
}
.spin__content .v-otp-input .v-field {
  border-radius:25%;
}

.spin__content .v-field__outline {
  display: none;
}
.v-row + .v-row {
  margin-top: 10vh !important;
}
</style>