<template>
  <v-card>
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



  <v-img src="./background-2.jpg" style="position: relative ;">
    <div style="position: absolute; top: 45%; left: 50%; transform: translate(-50%, -50%); width: 100%; z-index: 10;">
      <v-row>
        <v-col cols="12" class="text-center">
            <v-btn
              size="large"
              variant="elevated"
              color="#E5FF46"
              rounded="pill"
              height="71"
              width="307"
              href="https://t.me/evacampion" target="_blank" rel="noopener noreferrer"
              style='font-size: 18px; font-weight: 700; text-transform: uppercase;'
              :style="{
                boxShadow: '0 0 2px #E5FF46, 0 0 5px #E5FF46, 0 0 10px #E5FF46, 0 0 15px #E5FF46'
              }"
            >
              <label style="font-size: 18px">Связь с оператором</label>
            </v-btn>
          <v-row>
            <v-col cols="12">
            <v-btn
              variant="elevated"
              size="large"
              color="#E5FF46"
              rounded="pill"
              height="71"
              width="307"
              @click="redirectToSpin()"
              class="mt-10"
              style='font-size: 18px; font-weight: 700; text-transform: uppercase;'
              :style="{
                boxShadow: '0 0 2px #E5FF46, 0 0 5px #E5FF46, 0 0 10px #E5FF46, 0 0 15px #E5FF46'
              }"
            >
              <label style="font-size: 18px">Колесо фортуны</label>
            </v-btn>
            </v-col>
            </v-row>
          </v-col>
      </v-row>
    </div>
  </v-img>
  <div class="polar">
    <img class='polar__img' src='../../public/polar.png' />
  </div>
</v-card>

</template>
<script>
import axios from "axios";

export default {
  name: "HomePage",
  components: {},
  data: () => ({
  }),
  mounted() {
    window.Telegram.WebApp.setBackgroundColor("#000000")
    this.checkInitData({_auth: window.Telegram.WebApp.initData})
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
    redirectToSpin() {
      this.$router.push('/spin');
    }
  }
}

</script>

<style scoped>
@import url('https://fonts.google.com/share?selection.family=Montserrat:ital,wght@0,100..900;1,100..900');

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




.polar {
  width: 100vw;
  height: 25vh;
  position: absolute;
  bottom: 0;
}

.polar__img {
  position: relative;
  max-width: 100%;
  animation: polar ease-in infinite;
  animation-delay: 0;
  animation-duration: 25s;
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

@keyframes polar {
  0% {
    scale: 1.8;
  }
  50% {
    scale: 2.1;
    left: 0;
  }
  100% {
    scale: 2.4;
  }
}
</style>

<style>
.v-responsive__content {
  z-index: 10;
  position: relative
}
</style>