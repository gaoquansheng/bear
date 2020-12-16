<template>
	<view>
		<History v-for="(item,index) in liveList" :key="index" :videoInfo="item">
			<!-- <video :src="item.videoUrl" controls></video> -->
			
		</History>
	</view>
</template>

<script>
	import History from "@/components/history.vue"
	export default {
		data() {
			return {
				liveList: [],
			}
		},
		mounted() {
			this.initVideos();
		},
		methods: {
			initVideos(){
				//1.首先在刚进入页面的时候利用用户手机号取出来自己所有的历史直播数据
				let _this = this
				uni.request({
						url: "http://172.17.71.62:8080/app/liveHistory/"+this.$store.state.userTel,
						dataType: "json",
						method:"GET",
						success(res) {
						//2.把历史直播数据渲染到页面中
							_this.liveList = res.data;
							console.log(_this.liveList.length)
						},
						fail(res) {
							uni.showToast({
								position: "bottom",
								title: "网络错误"
							})
						}
					})
			}
		},
		components:{
			History
		}
	}
</script>

<style>
</style>
