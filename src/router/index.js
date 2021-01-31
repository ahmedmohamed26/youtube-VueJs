import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home/Home.vue';
import Channel from '../views/Channel/Channel.vue';

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/channel',
		name: 'Channel',
		component: Channel,
	},
	// {
	// 	path: '/about',
	// 	name: 'About',
	// 	component: () =>
	// 		import('../views/About.vue'),
	// },
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
