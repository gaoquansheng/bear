<template>
	<view>
		<view>
			<view class="topInfo">
				<text>注册</text>
			</view>
			<view class="registerForm">
				<input type="number" placeholder="手机号" focus v-model="userTel" />
				<input type="text" placeholder="姓名" v-model="userName" />
				<input type="password" placeholder="密码" v-model="userPwd" />
				<input type="password" placeholder="确认密码" v-model="repeatUserPwd" />
				<button type="primary" @click="register">注册</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userName: "",
				userTel: "",
				userPwd: "",
				repeatUserPwd: ""
			}
		},
		methods: {
			register() {
				//先不做表单数据校验
				var user = {
					"userName": this.userName,
					"userTel": this.userTel,
					"userPwd": this.userPwd
				}
				uni.request({
					url: "http://192.168.1.18:8080/app/register",
					data: user,
					dataType: "json",
					method: "POST",
					success(data) {
						if (data.data.statusCode == 200) {
							uni.showModal({
								title: '提示',
								content: data.data.msg,
								success(res) {
									uni.reLaunch({
										url: "../login/login"
									})
								}
							})
						} else {
							uni.showModal({
								title: '提示',
								content: data.data.msg,
							})
						}
					}
				})
			}
		}
	}
</script>

<style>
	.topInfo {
		height: 200rpx;
		border-bottom: #464E52 5rpx solid;
		text-align: center;
		line-height: 200rpx;
		font-size: 60rpx;
	}

	.registerForm {
		width: 70%;
		margin: 100rpx auto;
	}

	input {
		border-bottom: #000000 1rpx solid;
		margin-top: 50rpx;
		height: 50rpx;
	}

	button {
		margin-top: 100rpx;
	}
</style>
