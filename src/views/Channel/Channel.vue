<template>
	<section class="channel">
		<div class="container">
			<img
				v-if="snippet"
				class="image-cover"
				:src="snippet.url"
				v-bind:alt="cover"
			/>
			<div class="info-channel">
				<h1 class="title-channel">{{ title }}</h1>
				<h4 class="subscriber-count">
					subscribe <span>{{ subscriberCount }}</span>
				</h4>
			</div>
			<!-- info-channel -->
			<ul class="play-list">
				<li class="list-item" v-for="list in playLists" :key="list">
					<router-link v-bind:to="'/play-list/' + list.id">
						<div class="row">
							<div class="img-list column mr">
								<img
									:src="list.snippet.thumbnails.medium.url"
									v-bind:alt="list.snippet.title"
								/>
								<h6 class="video-count ">
									{{ list.contentDetails.itemCount }}
								</h6>
							</div>
							<!-- img-list -->
							<div class="info-list column ml">
								<h4 class="title-playlist">
									{{ list.snippet.localized.title }}
								</h4>
								<p class="description">
									{{ list.snippet.localized.description }}
								</p>
								<h6 class="view-playlist-count">
									view full playlist({{ list.contentDetails.itemCount }} videos)
								</h6>
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
import { getChannels, getPlaylists } from '../../axios/services';

export default {
	name: 'Channel',
	data() {
		return {
			snippet: {},
			title: '',
			subscriberCount: '',
			playLists: [],
		};
	},
	methods: {
		getAllChannels() {
			getChannels('UC_x5XG1OV2P6uZZ5FSM9Ttw')
				.then(({ data }) => {
					console.log(data.items[0]);
					this.snippet = data.items[0].snippet.thumbnails.medium;
					this.title = data.items[0].snippet.title;
					this.subscriberCount = data.items[0].statistics.subscriberCount;
				})
				.catch((error) => {
					throw new Error(error.message);
				});
		},
		getAllplaylists() {
			getPlaylists('UC_x5XG1OV2P6uZZ5FSM9Ttw')
				.then(({ data }) => {
					console.log(data);
					this.playLists = data.items;
				})
				.catch((error) => {
					throw new Error(error.message);
				});
		},
	},
	mounted() {
		this.getAllChannels();
		this.getAllplaylists();
	},
};
</script>
<style src="./channel.scss" lang="scss" scoped></style>
