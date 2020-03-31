<template>
	<view>
		<view class="logoutInfo" v-if="!isLogin">
			<navigator url="../login/login" hover-class="navigator-hover">
				<button type="primary">注册/登录</button>
			</navigator>
		</view>
		
		<view class="loginInfo" v-else>
			<view class="loginInfoTop" >
				<view class="photoInfo"></view>
				<view class="nameInfo">
					<view class="name"><text>{{userName}}</text></view>
					<view><text>手机号：15516392395</text></view>
				</view>
			</view>
			<view class="loginInfoBody">
				<navigator url="info/info">
					<info-list>
						<template v-slot:icon>
							<image src="../../static/image/me_active.png"></image>
						</template>
						<template v-slot:content>个人信息</template>
						<template v-slot:right>
							<image src="../../static/image/arrow.png" mode=""></image>
						</template>
					</info-list>
				</navigator>
				<info-list>
					<template v-slot:icon>
						<image src="../../static/image/me_active.png"></image>
					</template>
					<template v-slot:content>历史记录</template>
					<template v-slot:right>
						<image src="../../static/image/arrow.png" mode=""></image>
					</template>
				</info-list>
			</view>
		</view>
		<button @click="logout">注销</button>
	</view>
</template>


<script>
	import infoList from "@/components/infoList/infoList"
	export default {
		data() {
			return {
			}
		},
		computed:{
			isLogin(){
				return this.$store.state.login;
			},
			userName(){
				return this.$store.state.userName;
			}
		},
		components:{
			infoList
		},
		methods: {
			logout(){
				this.$store.commit("logout")
			}
		},
		onShow() {
			//动态设置导航条标题
			uni.setNavigationBarTitle({
				title: "me"
			});
			//判断用户是否登录，
			
		}
	}
</script>

<style>
	.logoutInfo{
		text-align: center;
	}
	.loginInfoTop,.logoutInfo{
		height: 200rpx;
		display: flex;
		box-sizing: border-box;
		padding-top: 70rpx;
		border-bottom: #999999 10rpx solid;
	}
	.photoInfo {
		width: 100rpx;
		height: 100rpx;
		border-radius: 10%;
		margin: 0 20rpx;
	}
	.nameInfo{
		height: 100rpx;
		
	}
	.name text{
		font-weight: bold;
	}
	image{
		width:50rpx;
		height:50rpx;
		margin-top: 25rpx;
	}
</style>
