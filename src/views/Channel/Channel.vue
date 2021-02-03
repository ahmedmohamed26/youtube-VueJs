<template>
	<section class="channel">
		<div class="container">
			<div class="parent-channel-details" v-if="!loadingShow">
				<div v-for="item in items" :key="item">
					<img
						class="image-cover"
						:src="item?.snippet?.thumbnails?.medium?.url"
						v-bind:alt="cover"
					/>
					<div class="info-channel">
						<h1 class="title-channel">{{ item?.snippet?.title }}</h1>
						<h4 class="subscriber-count">
							subscribe <span>{{ item?.statistics?.subscriberCount }}</span>
						</h4>
					</div>
					<!-- info-channel -->
				</div>
			</div>
			<ul class="play-list">
				<li class="list-item" v-for="list in playLists" :key="list">
					<router-link v-bind:to="'/play-list/' + list.id">
						<div class="row">
							<div class="img-list column mr">
								<img
									:src="list?.snippet?.thumbnails?.medium?.url"
									v-bind:alt="list.snippet.title"
								/>
								<h6 class="video-count ">
									{{ list?.contentDetails?.itemCount }}
								</h6>
							</div>
							<!-- img-list -->
							<div class="info-list column ml">
								<h4 class="title-playlist">
									{{ list?.snippet?.localized?.title }}
								</h4>
								<p class="description">
									{{ list?.snippet?.localized?.description }}
								</p>
								<h6 class="view-playlist-count">
									view full playlist({{ list?.contentDetails?.itemCount }}
									videos)
								</h6>
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
import { getChannels, getPlaylists } from '../../axios/services';
import Loading from '../../components/loading/loading';
export default {
	name: 'Channel',
	components: {
		Loading,
	},
	data() {
		return {
			items: null,
			playLists: null,
			loadingShow: false,
			pageSize: 25,
		};
	},
	mounted() {
		this.getAllChannels();
		this.getAllplaylists();
		this.scroll();
	},
	methods: {
		getAllChannels() {
			this.loadingShow = true;
			getChannels('UC_x5XG1OV2P6uZZ5FSM9Ttw')
				.then(({ data }) => {
					this.items = data.items;
					this.loadingShow = false;
				})
				.catch((error) => {
					throw new Error(error.message);
				});
		},
		getAllplaylists() {
			this.loadingShow = true;
			getPlaylists('UC_x5XG1OV2P6uZZ5FSM9Ttw', this.pageSize)
				.then(({ data }) => {
					this.playLists = data.items;
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
				if (bottomOfWindow && this.playLists?.length < 50) {
					this.pageSize = this.pageSize + 25;
					this.getAllplaylists();
				}
			};
		},
	},
};
</script>
<style src="./channel.scss" lang="scss" scoped></style>
