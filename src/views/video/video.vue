<template>
	<section class="video">
		<div class="container">
			<h2>hello video</h2>
		</div>
	</section>
</template>

<script>
import { getvideo } from '../../axios/services';

export default {
	name: 'PlayList',
	data() {
		return {
			video: '',
			id: this.$route.params.id,
		};
	},
	// Ks-_Mh1QhMc,c0KYU2j0TM4,eIho2S0ZahI
	methods: {
		getVideoDetails() {
			getvideo(this.id)
				.then((response) => {
					console.log(response)
				})
				.catch((error) => {
					throw new Error(error.message);
				});
		},
	},
	mounted() {
		this.getVideoDetails();
	},
};
</script>
<style src="./video.scss" lang="scss" scoped></style>
