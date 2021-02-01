<template>
	<section class="video">
		<div class="container">
			<div v-for="video in videos" :key="video" class="video-details">
				<img
					class="image-cover column"
					:src="video.snippet.thumbnails.high.url"
					v-bind:alt="cover"
				/>
				<h1 class="video-name">{{ video.snippet.title }}</h1>
				<div class="statistics">
					<h6 class="view-count">
						{{ video.statistics.viewCount }} watching now
					</h6>
					<ul class="list-statistics">
						<li class="item">
							<button class="item-button">
								<i class="fa fa-thumbs-up" aria-hidden="true"></i
								>{{ video.statistics.likeCount }}
							</button>
						</li>
						<li class="item">
							<button class="item-button">
								<i class="fa fa-thumbs-down " aria-hidden="true"></i
								>{{ video.statistics.dislikeCount }}
							</button>
						</li>
						<li class="item">
							<button class="item-button">
								<i class="fa fa-share" aria-hidden="true"></i>share
							</button>
						</li>
						<li class="item">
							<button class="item-button">
								<i class="fa fa-outdent" aria-hidden="true"></i>
							</button>
						</li>
						<li class="item">
							<button class="item-button">
								<i class="fa fa-outdent" aria-hidden="true"></i>
							</button>
						</li>
					</ul>
				</div>
				<!-- statistics -->
				<div class="channel-info">
					<h5>{{ video.snippet.channelTitle }}</h5>
					<h6>{{ new Date(video.snippet.publishedAt) }}</h6>
				</div>
			</div>
			<div class="related-video">
				<ul class="list-videos">
					<li class="list-item" v-for="video in relatedVideos" :key="video">
						<router-link v-bind:to="'/video/' + video.id.videoId">
							<div class="row">
								<div class="img-list column mr">
									<img
										:src="video.snippet.thumbnails.medium.url"
										v-bind:alt="video.snippet.title"
									/>
								</div>
								<!-- img-video -->
								<div class="info-list column ml">
									<h4 class="title-playlist">
										{{ video.snippet.title }}
									</h4>
									<p class="description">
										{{ video.snippet.description }}
									</p>
								</div>
								<!-- img-list -->
							</div>
						</router-link>
					</li>
				</ul>
			</div>
			<!-- related-video -->
		</div>
	</section>
</template>

<script>
import { getvideo, getRelatedVideo } from '../../axios/services';

export default {
	name: 'PlayList',
	data() {
		return {
			videos: [],
			relatedVideos: [],
			id: this.$route.params.id,
		};
	},
	// Ks-_Mh1QhMc,c0KYU2j0TM4,eIho2S0ZahI
	methods: {
		getVideoDetails() {
			getvideo(this.id)
				.then(({ data }) => {
					console.log(data);
					this.videos = data.items;
				})
				.catch((error) => {
					throw new Error(error.message);
				});
		},
		getAllRelatedVideo() {
			getRelatedVideo(this.id)
				.then(({ data }) => {
					console.log(data);
					this.relatedVideos = data.items;
				})
				.catch((error) => {
					throw new Error(error.message);
				});
		},
	},
	mounted() {
		this.getVideoDetails();
		this.getAllRelatedVideo();
	},
};
</script>
<style src="./video.scss" lang="scss" scoped></style>
