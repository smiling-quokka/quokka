import { createApp, h } from 'vue';
import utils            from './utils';
import store            from './store';
import router           from './router';
import components       from './components';
import App              from './App.vue';

import './styles';
import './icons';

const app  = createApp({ render: () => h(App) });

app.use(router);
app.use(store);
app.config.globalProperties.$utils = utils;

for (let key in components.modules) {
    let name = components.modules[key].name;
    let component = components.modules[key];

    app.component(name, component);
}

export default app;
