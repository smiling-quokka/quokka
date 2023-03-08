<template>
  <nav class="nav_bar">
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
  </nav>
</template>

<script>
export default {
    name: 'Router',
    data() {
        return {
            routes: [{
                title: 'home',
                path: '/',
                icon: 'home',
            },
            {
                title: 'notes',
                path: '/notes-list',
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
.nav_bar {
  width: 48px;
  height: 100%;
  background-color: $main;
  border-right: 2px solid $transparent-25--gray;
}
.router_list {
  margin-top: 35px;

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
