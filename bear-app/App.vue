<script>
	export default {
		onLaunch() {
			//这里获取保存在本地的用户信息
			let _this = this;
			uni.getStorage({
				key: "userInfo",
				success(res){
					_this.$store.commit("login",res.data)
				}
			})
			uni.getLocation({
			    type: 'wgs84',
			    success: function (res) {
			        _this.$store.commit("location",res)
			    }
			});
		}
	}
</script>
<style>
	/*每个页面公共css */
</style>
