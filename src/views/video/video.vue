<template>
	<section class="video">
		<div class="container">
			<Loading v-if="loadingShow" />
			<div  v-if="!loadingShow">
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
								<button class="item-button" title="i like this">
									<i class="fa fa-thumbs-up" aria-hidden="true"></i
									>{{ video.statistics.likeCount }}
								</button>
							</li>
							<li class="item">
								<button class="item-button" title="i dislike this">
									<i class="fa fa-thumbs-down " aria-hidden="true"></i
									>{{ video.statistics.dislikeCount }}
								</button>
							</li>
							<li class="item">
								<button class="item-button" title="share">
									<i class="fa fa-share" aria-hidden="true"></i>share
								</button>
							</li>
							<li class="item">
								<button class="item-button" title="save">
									<i class="fa fa-outdent" aria-hidden="true"></i>
								</button>
							</li>
							<li class="item">
								<button class="item-button" title="">
									<i class="fa fa-ellipsis-h " aria-hidden="true"></i>
								</button>
							</li>
						</ul>
					</div>
					<!-- statistics -->
					<div class="channel-info">
						<h5 class="channel-title">{{ video.snippet.channelTitle }}</h5>
						<h6 class="published-video">
							Published on
							{{ new Date(video.snippet.publishedAt).toDateString() }}
						</h6>
					</div>
				</div>
			</div>
			<div class="related-video" v-if="!loadingShow">
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
import { watch } from 'vue';
import Loading from '../../components/loading/loading';
export default {
	name: 'PlayList',
	components: {
		Loading,
	},
	data() {
		return {
			videos: [],
			relatedVideos: [],
			id: null,
			loadingShow:false
		};
	},
	mounted() {
		this.getVideoDetails();
		this.getAllRelatedVideo();
	},
	watch: {
		$route: 'getVideoDetails',
	},
	methods: {
		getVideoDetails() {
			this.loadingShow = true;
			this.id = this.$route.params.id;
			getvideo(this.id)
				.then(({ data }) => {
					this.videos = data.items;
					scrollTo(0, 0);
					this.loadingShow = false;
				})
				.catch((error) => {
					throw new Error(error.message);
				});
		},
		getAllRelatedVideo() {
			this.loadingShow = true;
			getRelatedVideo(this.id)
				.then(({ data }) => {
					this.relatedVideos = data.items;
					this.loadingShow = false;
				})
				.catch((error) => {
					throw new Error(error.message);
				});
		},
	},
};
</script>
<style src="./video.scss" lang="scss" scoped></style>
