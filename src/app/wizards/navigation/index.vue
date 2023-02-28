<template>
  <nav>
    <ul class="flex--column">
      <li>
        <router-link to="/">
          Home
        </router-link>
      </li>
    </ul>
  </nav>
</template>
<script>

export default { name: 'NavigationMenu', };

</script>

<style lang="scss" scoped>
nav {
    width: 49px;
    background-color: $main;
    border-right: 1px solid $gray;
}
</style>
