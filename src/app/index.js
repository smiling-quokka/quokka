import { createApp } from 'vue';
import utils         from 'utils';
import store         from 'store';
import router        from 'router';

import App           from './App.vue';
let app = createApp(App);

app.use(router);
app.use(store);

app.config.globalProperties.$utils = utils;

export default app;