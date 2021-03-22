<template>

<video ref="myvideo" controls muted width="100%" @click="click"></video>
</template>

<script>
import flv from "flv.js"
export default {
    data(){
        return {
            player: null,
            flag: false
        }
    },
    props: {
        options: {
            type: Object,
            default: {}
        }
    },
    created(){
        if(flv.isSupported()){
            this.player = flv.createPlayer({
                type: 'flv',
                url: this.options.videoUrl
            });
        }
    },
    mounted(){
        var video = this.$refs['myvideo']
        this.player.attachMediaElement(video)
        this.player.load();
        this.player.play();
    },
    beforeDestroy(){
        this.player.pause();
        this.player.unload();
        this.player.detachMediaElement();
        this.player.destroy();
        this.player = null;
    },
    methods: {
        click(){
            console.log("点击了");
            if(this.playing)
            {
                this.player.pause()
                this.playing = false;
            }
            else
            {
                this.player.play()
                this.playing = true;
            }
        },
        seek(latestTime) {
            let seconds = this.countSecons(latestTime);
            this.player.currentTime = seconds;
        },
        countSecons(latestTime){
            let hour = latestTime.getHours() - new Date(this.options.startTime).getHours();
            let min = latestTime.getMinutes() - new Date(this.options.startTime).getMinutes();
            let sec = latestTime.getSeconds() - new Date(this.options.startTime).getSeconds();
            return hour*3600 + min * 60 + sec;
        }
    }
}
</script>

<style>

</style>