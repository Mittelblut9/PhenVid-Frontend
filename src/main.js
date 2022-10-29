import { createApp } from 'vue';
import App from './App.vue';
import router from './server/router';

const app = createApp(App);

app.use(router);

export default app;
