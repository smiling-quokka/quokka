<template>
  <div class="content--container flex--row">
    <NavBar />
    <main>
      <router-view
        v-slot="{ Component, route }"
        class="content--page"
      >
        <transition :name="route.meta.transition">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
  </div>
</template>

<script>
import { NavBar } from 'modules';

export default {
    name: 'App',
    components: { NavBar },
};
</script>

<style lang="scss" scoped>
.content--container {
  height: 100vh;
  width: 100vw;
  background-color: $main;

  main {
    width: 100%;
    padding: 10px;
  }
}

</style>
