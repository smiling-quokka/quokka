<template>
  <router-link to="/home">Go to Home</router-link>
  <!-- <transition> -->
    <router-view />
  <!-- </transition> -->
</template>

<script>

export default {
  name: 'App',
}
</script>

<style lang="scss">
#root {
  height: 100vh;
  width: 100vw;
  background-color: $main;
  overflow: hidden;
}
</style>
