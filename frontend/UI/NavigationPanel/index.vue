<template>
  <nav class="nav_bar">
    <router-links />
  </nav>
</template>
<script>
import RouterLinks from './components/RouterLinks';

export default {
    name: 'NavigationPanel',
    components: { RouterLinks }
};
</script>

<style lang="scss" scoped>
.nav_bar {
  width: 48px;
  height: 100%;
  background-color: $main;
  border-right: 2px solid $transparent-25--gray;
}
</style>
