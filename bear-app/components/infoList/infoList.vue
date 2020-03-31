<template>
	<view>
		<view class="info">
			<view class="left">
				<view class="icon">
					<slot name="icon">图标</slot>
				</view>
				<view class="content">
					<slot name="content">内容</slot>
				</view>
			</view>
			<view class="right">
				<slot name="right">右</slot>
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
		flex-direction: row;
		font-size: 30rpx;
		/* 	padding:0rpx 10rpx;
	//解决padding-right失效问题
	box-sizing: border-box; */
		border-bottom: #464E52 solid 1rpx;
		/* border-top: #464E52 solid 1rpx; */

	}

	.left {
		display: flex;
		flex-direction: row;
		flex: 1;
		align-items: center;
		justify-content: center;

	}

	.right {
		height: 60rpx;
		width: 60rpx;
	}

	.icon {
		text-align: center;
		width: 100rpx;
		height: 100rpx;
	}

	.content {
		flex: 1;
	}
</style>
