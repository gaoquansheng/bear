<template>
	<div class="login-box">
		<form action="">
			<image src="../../static/image/avatar.svg" alt="" class="avatar"></image>
			<h2>Welcome</h2>
			<div class="input-group">
				<div class="icon">
					<i class="fa fa-user"></i>
				</div>
				<div>
					<h5>Username</h5>
					<input type="text" class="input" @focus="focusFunction" @blur="blurFunction">
				</div>
			</div>
			<div class="input-group">
				<div class="icon">
					<i class="fa fa-lock"></i>
				</div>
				<div>
					<h5>Password</h5>
					<input type="password" class="input" @focus="focusFunction" @blur="blurFunction">
				</div>
			</div>
			<input type="submit" class="btn" value="Login">
		</form>
	</div>
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
			login() {
				var _this = this;
				//首先判断手机号输入是否规范
				//手机号登录，将applicationName返回
				uni.request({
					url: "http://192.168.1.18:8080/app/login",
					data: user,
					dataType: "json",
					method: "POST",
					success(data) {
						if (data.data != "") {
							//登录成功之后，将后端返回的用户名赋值
							_this.$store.commit("login", {
								userName: data.data.userName,
								userId: data.data.userId
							})
							uni.reLaunch({
								url: "../me/me"
							})
						} else {
							uni.showModal({
								title: "提示",
								content: "用户名或密码错误"
							})
						}

					},
					fail() {
						uni.showModal({
							title: "提示",
							content: "网络错误"
						})
					}
				})
			} ,
			focusFunction() {
				let parentNode = this.parentNode.parentNode;
				parentNode.classList.add('focus');
			},
			blurFunction() {
				let parentNode = this.parentNode.parentNode;
				if (this.value == '') {
					parentNode.classList.remove('focus');
				}
			}

	},
	mounted() {
		// uni.setNavigationBarTitle({
		// 	title: "登录"
		// })
	}
	}
</script>

<style>
	* {
		padding: 0;
		margin: 0;
		box-sizing: border-box;
	}

	body {
		font-family: 'Roboto', sans-serif;
	}

	.wave {
		position: fixed;
		height: 100%;
		left: 0;
		bottom: 0;
		z-index: -1;
	}
	.container {
		width: 100vw;
		height: 100vh;
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-gap: 18rem;
		padding: 0 2rem;
	}
	.img {
		display: flex;
		justify-content: flex-end;
		align-items: center;
	}
	.img img {
		width: 500px;
	}
	.login-box {
		display: flex;
		align-items: center;
		text-align: center;
	}

	form {
		width: 360px;
	}

	.avatar {
		width: 100px;
	}

	form h2 {
		font-size: 2.9rem;
		text-transform: uppercase;
		margin: 15px 0;
		color: #999;
	}

	.input-group {
		position: relative;
		display: grid;
		grid-template-columns: 7% 93%;
		margin: 25px 0;
		padding: 5px 0;
		border-bottom: 2px solid #d9d9d9;
	}

	.input-group:nth-child(1) {
		margin-bottom: 4px;
	}

	.input-group:before,
	.input-group:after {
		content: '';
		position: absolute;
		bottom: -2px;
		width: 0;
		height: 2px;
		background-color: #38d39f;
		transition: .5s;
	}

	.input-group:after {
		right: 50%;
	}

	.input-group:before {
		left: 50%;
	}

	.icon {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.icon i {
		color: #d9d9d9;
		transition: .5s;
	}

	.input-group>div {
		position: relative;
		height: 45px;
	}

	.input-group>div>h5 {
		position: absolute;
		left: 10px;
		top: 50%;
		transform: translateY(-50%);
		color: #d9d9d9;
		font-size: 18px;
		transition: .3s;
	}

	.input-group.focus .icon i {
		color: #38d39f;
	}

	.input-group.focus div h5 {
		top: -5px;
		font-size: 15px;
	}

	.input-group.focus:after,
	.input-group.focus:before {
		width: 50%;
	}

	.input {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		border: none;
		outline: none;
		background: none;
		padding: 0.5rem 0.7rem;
		font-size: 1.2rem;
		color: #555;
		font-family: 'Roboto', sans-serif;
	}

	a {
		display: block;
		text-align: right;
		text-decoration: none;
		color: #999;
		font-size: 0.9rem;
		transition: .3s;
	}

	a:hover {
		color: #38d39f;
	}

	.btn {
		display: block;
		width: 100%;
		height: 50px;
		border-radius: 25px;
		margin: 1rem 0;
		font-size: 1.2rem;
		outline: none;
		border: none;
		background-image: linear-gradient(to right, #32be8f, #38d39f, #32be8f);
		cursor: pointer;
		color: #fff;
		text-transform: uppercase;
		font-family: 'Roboto', sans-serif;
		background-size: 200%;
		transition: .5s;
	}

	.btn:hover {
		background-position: right;
	}

	.copyright {
		position: absolute;
		width: 100%;
		height: 50px;
		bottom: 2px;
		color: #38d39f;
		text-align: center;
		font-size: 18px;
		font-family: 'Roboto', sans-serif;
	}

	/*媒体查询*/
	@media screen and (max-width: 1080px) {
		.container {
			grid-gap: 9rem;
		}
	}

	@media screen and (max-width: 1024px) {
		form {
			width: 290px;
		}

		form h2 {
			font-size: 2.4rem;
			margin: 8px 0;
		}

		.img img {
			width: 360px;
		}
	}

	@media screen and (max-width: 768px) {
		.wave {
			display: none;
		}

		.img {
			display: none;
		}

		.container {
			grid-template-columns: 1fr;
		}

		.login-box {
			justify-content: center;
		}
	}
</style>
