import { createRouter, createWebHistory } from 'vue-router';
const routes = [
	{
		path: '',
		redirect:'/channel'
	},
	{
		path: '/channel',
		name: 'Channel',
		component: () => import('../views/channel/channel.vue'),
	},
	{
		path: '/play-list/:id',
		name: 'PlayList',
		component: () => import('../views/play-list/playlist.vue'),
	},
	{
		path: '/video/:id',
		name: 'Video',
		component: () => import('../views/video/video.vue'),
	},
	{
		path: '/:catchAll(.*)',
		name: 'NotFound',
		component: () => import('../views/not-found/notfound.vue'),
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
