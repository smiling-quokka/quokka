import { createApp, h } from 'vue';
import utils            from 'utils';
import store            from 'store';
import router           from 'router';

import App              from './App.vue';

const app  = createApp({ render: () => h(App) });

app.use(router);
app.use(store);

app.config.globalProperties.$utils = utils;

export default app;