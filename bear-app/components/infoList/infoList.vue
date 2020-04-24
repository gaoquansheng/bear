<template>
	<view>
		<view class="info">
			<view class="left">
				<!-- <view class="icon"> -->
					<slot name="icon">图标</slot>
				<!-- </view> -->
			</view>
			<view class="right">
				<view class="content">
					<slot name="content">内容</slot>
				</view>
				<view>
					<slot name="right">右</slot>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style scoped>
	.info {
		width: 100%;
		height: 100rpx;
		line-height: 100rpx;
		display: flex;
		font-size: 30rpx;
		font-family:"Microsoft YaHei",微软雅黑,"MicrosoftJhengHei",华文细黑,STHeiti,MingLiu;
		/* 	padding:0rpx 10rpx;
	//解决padding-right失效问题
	box-sizing: border-box; */
		/* border-top: #464E52 solid 1rpx; */

	}

	.left {
		width: 100rpx;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.right {
		display: flex;
		flex: 1;
		border-bottom: #999999 solid 1rpx;
		justify-content: space-between;
	}
	


</style>
