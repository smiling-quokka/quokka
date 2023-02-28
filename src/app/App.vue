<template>
  <div class="content--container flex--row">
    <navigation-menu />
    <main>
      <router-view class="content--page" />
    </main>
  </div>
</template>

<script>
import { NavigationMenu } from './wizards';

export default {
    name: 'App',
    components: { NavigationMenu }
};
</script>

<style lang="scss" scoped>
.content--container {
  height: 100vh;
  width: 100vw;
  background-color: $main;

  main {
    width: 100%;
    padding-left: 10px;
  }
}

</style>
