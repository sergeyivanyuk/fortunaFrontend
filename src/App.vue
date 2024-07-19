<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  data: () => ({
  }),
  mounted() {
    // window.Telegram.WebApp.onEvent('backButtonClicked', () => {
    //   this.$router.push({ name: 'Home'});
    // })
  }
}

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=swap');
@import url('https://fonts.cdnfonts.com/css/sf-pro-display');

html, body {
  font-family: 'SF Pro Display', sans-serif !important;
  color: white;
  background-color: #000000;
  touch-action: manipulation !important;
}


.tg-button-text-color {
  color: var(--tg-theme-button-text-color)
}

</style>