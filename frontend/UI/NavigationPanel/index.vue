<template>
  <nav class="navigation_panel">
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
.navigation_panel {
  width: 48px;
  height: 100%;
  background-color: $main;
  border-right: 2px solid $transparent-25--gray;
}
</style>
