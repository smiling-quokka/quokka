import { createRouter, createWebHistory } from 'vue-router';
import routes from './routes';

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

router.beforeEach(async (to) => {
    to.meta.transition = 'fade';

    if (to.path === '') return { path: '' };
});

export default router;
