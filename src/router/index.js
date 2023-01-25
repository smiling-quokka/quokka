import { createRouter, createWebHistory } from "vue-router";
import HelloWorld from '../app/components/HelloWorld.vue';

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HelloWorld,
    },
  ],
});

router.beforeEach(async (to, from) => {
  if (to.path === '') return { path: '/' }
})

export default router;