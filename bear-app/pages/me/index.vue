<template>
	<view>
		<view class="header" v-bind:class="{'status':isH5Plus}">
			<view class="userinfo">
				<view class="face">
					<image :src="userInfo.face"></image>
				</view>
				<view class="info">
					<view class="userName">{{userInfo.userName}}</view>
					<view class="userTel">手机号:{{userInfo.userTel}}</view>
				</view>
			</view>
			<view class="setting">
				<image src="../../static/image/setting.png"></image>
			</view>
		</view>
		
<!-- 		<view class="orders">
			<view class="box">
				<view class="label" v-for="(row,index) in orderTypeLise" :key="index" hover-class="hover" @tap="tmpFunc(row.name)">
					<view class="icon">
						<image :src="'../../static/image/'+row.image"></image>
					</view>
				</view>
			</view>
		</view> -->
		
		<view class="list" v-for="(list,list_i) in severList" :key="list_i">
			<view class="li" v-for="(li,li_i) in list" @tap="toPage(list_i,li_i)" v-bind:class="{'noborder':li_i==list.length-1}"
			 hover-class="hover" :key="li.name">
				<view class="icon">
					<image :src="'../../static/image/sever/'+li.icon"></image>
				</view>
				<view class="text">{{li.name}}</view>
				<image class="to" src="../../static/image/to.png"></image>
			</view>
		</view>
	</view>
</template>
<script>
	import {mapState} from 'vuex'
	export default {
		data() {
			return {
				//#ifdef APP-PLUS
				isH5Plus: true,
				//#endif
				// orderTypeLise: [
				// 	//name-标题 icon-图标 badge-角标
				// 	{
				// 		name: 'mobile',
				// 		image: 'mobile.png',
				// 	},
				// 	{
				// 		name: 'weibo',
				// 		image: 'weibo.png',	
				// 	},
				// 	{
				// 		name: 'weixin',
				// 		image: 'weixin.png',						
				// 	},
				// 	{
				// 		name: 'qq',
				// 		image: 'QQ.png',	
				// 	}
				// ],
				severList: [
					[{
							name: '历史记录',
							icon: 'point.png'
						},
						{
							name: '优惠券',
							icon: 'quan.png'
						},
						{
							name: '红包',
							icon: 'momey.png'
						},
						{
							name: '任务',
							icon: 'renw.png'
						},
					],
					[{
							name: '积分明细',
							icon: 'mingxi.png'
						},
						{
							name: '抽奖',
							icon: 'choujiang.png'
						},
						{
							name: '收货地址',
							icon: 'addr.png'
						},
						{
							name: '银行卡',
							icon: 'bank.png'
						},
						{
							name: '安全中心',
							icon: 'security.png'
						},
						{
							name: '退出登录',
							icon: 'kefu.png'
						}
					]
				],
			};
		},
		onLoad() {
			//加载
			this.init();
		},
		computed:mapState({
			userInfo(state){
				face: '../../static/image/face.jpeg',
				userName: state.userName,
				userTel: state.userTel
			}
		})
		methods: {
			//根据点击的登录方式进行跳转
			//用户点击列表项
			toPage(list_i, li_i) {
				uni.showToast({
					title: this.severList[list_i][li_i].name
				});
			}
		}
	}
</script>

<style lang="scss">
	page {
		background-color: #fff
	}

	.header {
		&.status {
			padding-top: var(--status-bar-height);
		}

		background-color:#ff6364;
		width:92%;
		height:30vw;
		padding:0 4%;
		display:flex;
		align-items:center;

		.userinfo {
			width: 90%;
			display: flex;

			.face {
				flex-shrink: 0;
				width: 15vw;
				height: 15vw;

				image {
					width: 100%;
					height: 100%;
					border-radius: 100%
				}
			}

			.info {
				display: flex;
				flex-flow: wrap;
				padding-left: 30upx;

				.userName {
					width: 100%;
					color: #fff;
					font-size: 40upx
				}

				.userTel {
					display: flex;
					align-items: center;
					padding: 0 20upx;
					height: 40upx;
					color: #fff;
					background-color: rgba(0, 0, 0, 0.1);
					border-radius: 20upx;
					font-size: 24upx
				}
			}
		}

		.setting {
			flex-shrink: 0;
			width: 6vw;
			height: 6vw;

			image {
				width: 100%;
				height: 100%
			}
		}
	}

	.hover {
		background-color: #eee
	}

	.orders {
		background-color: #ff6364;
		width: 92%;
		height: 11vw;
		padding: 0 4%;
		margin-bottom: calc(11vw + 40upx);
		display: flex;
		align-items: flex-start;
		border-radius: 0 0 100% 100%;
		margin-top: -1upx;

		.box {
			width: 98%;
			padding: 0 1%;
			height: 22vw;
			background-color: #fefefe;
			border-radius: 24upx;
			box-shadow: 0 0 20upx rgba(0, 0, 0, 0.15);
			margin-bottom: 40upx;
			display: flex;
			align-items: center;
			justify-content: center;

			.label {
				display: flex;
				align-items: center;
				justify-content: center;
				flex-flow: wrap;
				width: 100%;
				height: 16vw;
				color: #666666;
				font-size: 26upx;

				.icon {
					position: relative;
					width: 7vw;
					height: 7vw;
					margin: 0 1vw;

					image {
						width: 7vw;
						height: 7vw;
						z-index: 9;
					}
				}
			}
		}
	}

	.list {
		width: 100%;
		border-bottom: solid 26upx #f1f1f1;

		.li {
			width: 92%;
			height: 100upx;
			padding: 0 4%;
			border-bottom: solid 1upx #e7e7e7;
			display: flex;
			align-items: center;

			&.noborder {
				border-bottom: 0
			}

			.icon {
				flex-shrink: 0;
				width: 50upx;
				height: 50upx;

				image {
					width: 50upx;
					height: 50upx
				}
			}

			.text {
				padding-left: 20upx;
				width: 100%;
				color: #666
			}

			.to {
				flex-shrink: 0;
				width: 40upx;
				height: 40upx
			}
		}
	}
</style>
