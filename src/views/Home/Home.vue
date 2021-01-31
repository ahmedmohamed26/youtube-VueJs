<template>
	<div class="home">
		<h1>{{posts}}</h1>
	</div>
</template>

<script>
import {getRelatedVideo,getChannels} from '../../axios/services';

export default {
	name: 'Home',
	data() {
		return {
			posts: [],
		};
	},
	methods: {
	 getAllRelatedVideos() { 
		getRelatedVideo('Ks-_Mh1QhMc')
			.then((response) => {
				console.log(response)
			})
			.catch((error) => {
				throw new Error(error.message);
			});
	},
	 getAllChannels() { 
		getChannels('UC_x5XG1OV2P6uZZ5FSM9Ttw')
			.then((response) => {
				console.log(response)
			})
			.catch((error) => {
				throw new Error(error.message);
			});
	}
	
	},
	mounted() {
		this.getAllRelatedVideos();
		this.getAllChannels();
	},
};
</script>
