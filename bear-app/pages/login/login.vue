<template>
	<view class="login">
		<view class="loginForm">
			<view class="loginuserTel">
				<image src="../../static/image/me_active.png"></image>
				<input type="number" placeholder="手机号" v-model="userTel" maxlength="11" focus/>
			</view>
			<view class="loginPwd">
				<image src="../../static/image/pwd.png"></image>
				<input password="true" placeholder="密码" v-model="userPwd"/>
			</view>
		</view>
		<view class="loginButton">
			<button type="primary" @click="login">登录</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userTel: "15516392395",
				userPwd: "123123",
			}
		},
		methods: {
			login(){
				var _this = this;
				//首先判断手机号输入是否规范
				var telRe = /^[1](([3][0-9])|([4][5-9])|([5][0-3,5-9])|([6][5,6])|([7][0-8])|([8][0-9])|([9][1,8,9]))[0-9]{8}$/;
				if (telRe.test(this.userTel)){
					var user = {
						userTel:this.userTel,
						userPwd : this.userPwd
					}
					//手机号登录，将applicationName返回
					uni.request({
						url:"http://192.168.1.18:8080/app/login",
						data:user,
						dataType:"json",
						method: "POST",
						success(data){
							if(data.data != ""){
								//登录成功之后，将后端返回的用户名赋值
								_this.$store.commit("login",{
									userName: data.data.userName,
									userId: data.data.userId
								})
								uni.reLaunch({
									url:"../me/me"
								})
							}else{
								uni.showModal({
									title:"提示",
									content: "用户名或密码错误"
								})
							}
							
						},
						fail() {
							uni.showModal({
								title:"提示",
								content: "网络错误"
							})
						}
					})
				}else{
					uni.showModal({
						title:"提示",
						content: "手机号输入错误"
					})
				}
				
			}
		},
		mounted() {
			uni.setNavigationBarTitle({
				title: "注册/登录"
			})
		}
	}
</script>

<style>
	//背景图片未设置
	
	.loginForm {
		width: 80%;
		margin-left: 10%;
		border: solid 1rpx grey;
		margin-top: 40%;
		border-radius: 10rpx;

	}

	.loginButton {
		margin-left: 10%;
		margin-top: 20rpx;
		width: 80%;
	}

	.loginuserTel {
		display: flex;
		height: 60rpx;
	}

	.loginPwd {
		display: flex;
		height: 60rpx;
	}

	input {
		flex: 1;
		height: 50rpx;
	}

	image {
		width: 50rpx;
		height: 50rpx;
		margin-right: 10rpx;
	}
</style>
