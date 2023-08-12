<template>
    <aside id='workspace__sidebar'>
        <div @click="clickChannelVisible" class="wrap">
            <button>></button>
            <span>채널</span>
        </div>
        <div v-if="!channelVisible">
            <div>workspace left side</div>
            <div>workspace left side</div>
            <div style="display: flex;" @click="openPopup()">
                <button> + </button>
                <span> 워크스페이스 생성</span>
            </div>
        </div>
        <hr>
        <div>
            <div class="wrap">
                <button>></button>
                <span>다이렉트 메시지</span>
            </div>
        </div>

    </aside>
</template>

<script>

export default {
    name: 'WorkspaceSideBar',
    data() {
        return {
            channelVisible: false
        }
    },
    methods: {
        openPopup() {
            this.$emit("openCreateChannel", true)
        },
        clickChannelVisible() {
            this.channelVisible = !this.channelVisible
        }
    }

}
</script>

<style>
#workspace__sidebar {
    color: white;
    width: 15%;
    float: left;
    /* border-bottom: 1px solid #0000001a; */
    background: #350d36;
    height: 95vh;
}

 #workspace__sidebar .wrap {
    padding-top: 20px;
    display: flex;
}  

#workspace__sidebar button {
    height: 20px;
    height: 20px;
}
</style>