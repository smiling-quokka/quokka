<template>
  <ul class="router_list flex--column">
    <li
      v-for="(route, i) in routes"
      :key="i"
    >
      <router-link
        class="router_link flex--column"
        :to="route.path"
      >
        <icon
          :icon-name="route.icon"
        />
        <span class="router_link-name">{{ route.title }}</span>
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {
    name: 'RouterLinks',
    data() {
        return {
            routes: [{
                title: 'home',
                path: '/',
                icon: 'home',
            },
            {
                title: 'marks',
                path: '/bookmarks',
                icon: 'list-menu',
            }, {
                title: 'board',
                path: '/notice-board',
                icon: 'map',
            }]
        };
    } 
};
</script>

<style lang="scss" scoped>
.router_list {
  margin-top: 120px;
}

.router_link-name {
  color: $gray;
  font-size: 0.8em;
}

.router_link {
  justify-content: center;
  align-items: center;
  height: 60px;

  &:hover {
    background: $transparent-05--blue;
  }

  &.router-link-active {
    background: $transparent-25--blue;
  }
}

</style>
