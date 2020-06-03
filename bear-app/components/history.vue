<template>
	<view class="main" @click="playVideo">
		<view class="title">
			{{video.title}}
		</view>
		<view class="time">
			{{video.startTime}}
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return {
				video: this.videoInfo
			}
		},
		props:{
			videoInfo: {
				type: Object,
				default(){
					return {}
				}
			}
		},
		methods:{
			playVideo(){
				uni.navigateTo({
					url:"./playVideos?videoUrl="+this.video.videoUrl,
					success(res) {
						console.log(res)
					},
					fail(res) {
						console.log(res)
					}
				})
			}
		}
		// filters:{
		// 	timeFilter(date){
		// 		return date
		// 	}
		// }
	}
</script>

<style>
	.main {
		width: 100%;
		height: 120rpx;
		border-bottom: 1rpx solid #b9b9b9;
		box-sizing: border-box;
		padding: 20rpx 15rpx;
	}
	.title {
		font-size: 40rpx;
		/* padding-left: 10rpx; */
	}
	.time {
		font-size: 30rpx;
		color:#a5a5a5;
	}
</style>
