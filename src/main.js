import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import '../src/assets/styles/app.scss';

createApp(App)
	.use(router)
	.mount('#app');
