<template>
	<view>
		<video :src="videoUrl"></video>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				videoUrl:""
			}
		},
		onLoad(option) {
			this.videoUrl = option.videoUrl;
		},
		methods: {
			
		}
	}
</script>

<style>
	video {
		width: 100%;
	}
</style>
