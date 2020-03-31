<template>
	<view>
		<view class="updateForm">
			<view class="updateInput">
				<text>用户名：</text>
				<input v-model="userName" />
			</view>

		</view>
		<view class="updateButton">
			<button @click="update">确认修改</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userName:this.$store.state.userName
			}
		},
		// computed: {
		// 	userName() {
		// 		return this.$store.state.userName
		// 	}
		// },
		methods: {
			update() {
				var user = {
					userName:this.userName
				}
				var _this = this;
				uni.request({
					url: "http://192.168.1.18:8080/update",
					data: user,
					dataType: "json",
					method: "POST",
					success(data) {
						if (data.statusCode == 200) {
							//登录成功之后，将后端返回的用户名赋值
							_this.$store.commit("updateUserName", {
								userName: _this.userName
							})
							console.log("修改成功")
						} else {
							console.log("错误")
						}

					},
					fail() {
						return "网络错误";
					}
				})
			}
		},
		mounted() {
			//动态设置导航条标题
			uni.setNavigationBarTitle({
				title: "me2"
			});
			//动态设置导航条的颜色
			// uni.setNavigationBarColor({
			// 	// frontColor: '#ffffff',
			// 	backgroundColor: '#ff0000',
			// })
		}
	}
</script>

<style>
	.updateForm {
		width: 90%;
		height: 500rpx;
		margin: 200rpx auto;
	}

	.updateButton {
		margin-bottom: 20rpx;
	}

	.updateInput {
		display: flex;
		flex-direction: row;
		border-bottom: solid 1rpx #000000;
	}
</style>
