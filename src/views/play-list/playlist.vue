<template>
	<section class="play-list">
		<div class="container">
			<ul class="list-videos">
				<li class="list-item" v-for="list in playList" :key="list">
					<router-link v-bind:to="'/video/' + list.contentDetails.videoId">
						<div class="row">
							<div class="img-list column mr">
								<img
									:src="list?.snippet?.thumbnails?.medium?.url"
									v-bind:alt="list.snippet.title"
								/>
							</div>
							<!-- img-list -->
							<div class="info-list column ml">
								<h4 class="title-playlist">
									{{ list?.snippet?.title }}
								</h4>
								<p class="description">
									{{ list?.snippet?.description }}
								</p>
							</div>
							<!-- img-list -->
						</div>
					</router-link>
				</li>
			</ul>
			<Loading v-if="loadingShow" />
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
			playList: null,
			id: null,
			loadingShow: false,
			pageSize: 25,
		};
	},
	mounted() {
		this.getAllPlaylistItems();
		this.scroll();
	},
	methods: {
		getAllPlaylistItems() {
			this.loadingShow = true;
			this.id = this.$route.params.id;
			getPlaylistItems(this.id, this.pageSize)
				.then(({ data }) => {
					this.playList = data.items;
					this.loadingShow = false;
				})
				.catch((error) => {
					throw new Error(error.message);
				});
		},
		scroll() {
			window.onscroll = () => {
				let bottomOfWindow =
					document.documentElement.scrollTop + window.innerHeight ===
					document.documentElement.offsetHeight;
				if (bottomOfWindow || this.playLists?.length < 50) {
					this.pageSize = this.pageSize + 25;
					this.getAllPlaylistItems();
				}
			};
		},
	},
	
};
</script>
<style src="./playlist.scss" lang="scss" scoped></style>
