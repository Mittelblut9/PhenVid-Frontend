<template>
  <Homepage :isLoggedIn="isLoggedIn" :username="username" :email="email"/>
</template>

<script>
import Homepage from './web/views/Homepage.vue'

export default {
  name: 'PhenixVid',
  data: () => {
    return {
      isLoggedIn: true,
      username: "Max Verstappen",
      email: "example@example.com"
    }
  },
  components: {
    Homepage
  },
}
</script>

<style>
@import url('../src/assets/css/main.css');
</style>
