<template>
	<view class="content" :class="{'active':active}">
		<!-- <image class="logo" :class="{'active':active}" src="../../static/image/logo.png"  mode="aspectFit"></image> -->
		<view class="tabbar-box-wrap">
			<view class="tabbar-box">
				<view class="tabbar-box-item" @click="goToPage('/pages/tabbar-3-detial/tabbar-3-release/tabbar-3-release')">
					<image class="box-image" src="../../static/image/release.png" mode="aspectFit"></image>
					<text class="explain">发图文</text>
				</view>
				<view class="tabbar-box-item" @click="goToPage('/pages/live/live')">
					<image class="box-image" src="../../static/image/video.png" mode="aspectFit"></image>
					<text class="explain">开始直播</text>
				</view>
				<view class="tabbar-box-item" @click="goToPage('/pages/live/record')">
					<image class="box-image" src="../../static/image/qa.png" mode="aspectFit"></image>
					<text class="explain">查看录播</text>
				</view>
			</view>
		</view>
		
		<uni-popup ref="popup" type="dialog">
		    <uni-popup-dialog
				mode="bear"
				title="直播准备"
				:plans="plans"
				@close="close" 
				placeholder="请输入标题"
				@confirm="confirm">	
			</uni-popup-dialog>
			
		</uni-popup>
	</view>
	

</template> 

<script>
	
	import uniPopup from "@/components/uni-popup/uni-popup.vue"
	import uniPopupDialog from '@/components/uni-popup/uni-popup-dialog.vue'
	import request from "@/utils/request.js"

	export default {
		data() {
			return {
				active: false,
				plans: []
			};
		},
		components:{
			uniPopup,      
			uniPopupDialog
		},
		onLoad() {},
		onShow() {
			this.getPlans();
			// setTimeout(() => {
			this.active = true;
			// }, 500);
		},
		onHide() {
			this.active = false;
		},
		methods: {
			getPlans(){
				//这里来判断一下是否有应急演练可以拍摄
				 request({
					url: "/plan/openPlans",
					method: "GET",
					dataType: "json",
					success: (res) => {
						this.plans = res.data.rows;
					}
				})
			},
			goToPage(url) {

				if (!url) {
					return;
				}
				if(!this.plans.length){
					//没有应急演练可以直播
					uni.showToast({
						icon: 'none',
						position: 'bottom',
						title: '没有应急演练可以直播,请联系管理员'
					});
					return;
				}
				if(url === '/pages/live/live') {
					//这里可以弹框
					this.$refs.popup.open()
					return;
				}
				// if(url == '/pages/live/record') {
				// 	uni.navigateTo({
				// 		url
				// 	})
				// }else {
				// 	uni.reLaunch({
				// 		url
				// 	});
				// }

			},
			close(){
				console.log("我倒这里了")
				this.$refs.popup.close();
			},
			confirm(done,value){
				console.log(value);
				this.$refs.popup.close();
				uni.navigateTo({
					url:`/pages/live/live?planId=${value.planId}&title=${value.title}`
				})
			}
		}
	};
</script>

<style lang="scss" scoped>
.content {
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	/* #ifdef H5 */
	height: calc(100vh - var(--window-bottom) - var(--window-top));
	/* #endif */
	/* #ifndef H5 */
	height: 100vh;
	/* #endif */
	transition: opacity 0.3s;
	background: #999;
	opacity: 0;
	&.active {
		opacity: 1;
	}
	.logo {
		position: relative;
		margin-top: -400upx;
		width: 200upx;
		height: 200upx;
		// z-index: -1;
		opacity: 0;
		transition: opacity 0.3s;
		&.active {
			opacity: 1;
		}
	}
}
.tabbar-box-wrap {
	position: absolute;
	width: 100%;
	padding: 50upx;
	box-sizing: border-box;
	bottom: 0upx;
	.tabbar-box {
		position: relative;
		display: flex;
		width: 100%;
		background: #fff;
		border-radius: 20upx;
		padding: 15upx 20upx;
		box-sizing: border-box;
		z-index: 2;
		box-shadow: 0px 2px 5px 2px rgba(0, 0, 0, 0.1);
		&:after {
			content: '';
			position: absolute;
			bottom: -16upx;
			left: 0;
			right: 0;
			margin: auto;
			width: 50upx;
			height: 50upx;
			transform: rotate(45deg);
			background: #fff;
			z-index: 1;
			box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.1);
			border-radius: 2px;
		}
		&:before {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background: #ffffff;
			border-radius: 20upx;
			z-index: 2;
		}
		.tabbar-box-item {
			// position: relative;
			width: 100%;
			z-index: 3;
			margin: 10upx;
			color: $uni-color-subtitle;
			text-align: center;
			font-size: $uni-font-size-base;
			.box-image {
				width: 100%;
				height: $uni-img-size-lg;
			}
		}
	}
}
</style>
