import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/home/home.vue';
import Channel from '../views/channel/channel.vue';
import PlayList from '../views/play-list/playlist.vue';
import Video from '../views/video/video.vue';

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
	{
		path: '/play-list/:id',
		name: 'PlayList',
		component: PlayList,
	},
	{
		path: '/video/:id',
		name: 'Video',
		component: Video,
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
