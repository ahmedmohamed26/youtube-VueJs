<template>
	<section class="play-list">
		<div class="container">
			<Loading v-if="loadingShow" />
			<ul class="list-videos" v-if="!loadingShow">
				<li class="list-item" v-for="list in playList" :key="list">
					<router-link v-bind:to="'/video/' + list.contentDetails.videoId">
						<div class="row">
							<div class="img-list column mr">
								<img
									:src="list.snippet.thumbnails.medium.url"
									v-bind:alt="list.snippet.title"
								/>
							</div>
							<!-- img-list -->
							<div class="info-list column ml">
								<h4 class="title-playlist">
									{{ list.snippet.title }}
								</h4>
								<p class="description">
									{{ list.snippet.description }}
								</p>
							</div>
							<!-- img-list -->
						</div>
					</router-link>
				</li>
			</ul>
		</div>
	</section>
</template>

<script>
import { getPlaylistItems } from '../../axios/services';
import Loading from '../../components/loading/loading';
export default {
	name: 'PlayList',
	components: {
		Loading,
	},
	data() {
		return {
			playList: [],
			id: this.$route.params.id,
			loadingShow: false,
		};
	},
	methods: {
		getAllPlaylistItems() {
			this.loadingShow = true;
			getPlaylistItems(this.id)
				.then(({ data }) => {
					console.log(data);
					this.playList = data.items;
					this.loadingShow = false;
				})
				.catch((error) => {
					throw new Error(error.message);
				});
		},
		
	},
	mounted() {
		this.getAllPlaylistItems();
	},
};
</script>
<style src="./playlist.scss" lang="scss" scoped></style>
