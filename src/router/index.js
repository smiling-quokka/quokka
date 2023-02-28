import { createRouter, createWebHistory } from 'vue-router';
import { HomePage } from '../app/pages';

const routes = [
    {
        path: '/',
        name: '',
        component: HomePage,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

router.beforeEach(async (to) => {
    if (to.path === '') return { path: '' };
});

export default router;
