<template>
    <dialog class="popup">
        <div class="popupHead">
            <div>
                <h1>Create a Channel</h1>
                <span v-if="page != 1">{{ channelName }}</span>
            </div>
            <button @click="closePopup()"> X </button>

        </div>
        <div class="popupBody">
            <div v-if="page == 1">
                <span>이름</span>
                <input type="text" v-model="channelName"> <br>
                <p style='color:red;' v-if:="channelName == ''">계속하려면 채널에 이름을 지정하세요</p>
            </div>

            <div v-if="page == 2">
                <div>
                    <span>가시성</span>
                    <label>
                        <input type="radio" v-model="isOpenChannel" value="true" checked>
                        <span>공개 - 누구나</span>

                    </label>
                    <label>
                        <input type="radio" v-model="isOpenChannel" value="false">
                        <span>비공개 - 일부 사람만</span>

                    </label>
                </div>
            </div>


        </div>
        <div class="popupFooter">
            <div>
                {{ page }}/{{ maxPage }} 단계
            </div>
            <div class="popupFooterButton">
                <div v-if="page == 1">
                    <button @click="page++" v-bind:disabled="isCanNext()"> 다음</button>
                </div>
                <div v-if="page == 2">
                    <button @click="page--"> 이전</button>
                    <button @click="createChannel()"> 생성</button>
                </div>
            </div>
        </div>
    </dialog>
</template>

<script>

export default {
    data() {
        return {
            page: 1,
            maxPage: 2,
            channelName: '',
            isOpenChannel: null
        }
    },

    methods: {
        closePopup() {
            this.$emit("closeCreateChannel", false)
        },
        isCanNext() {
            if (this.channelName == '') {
                return true;
            }
            // TODO 
            // 채널이름 중복체크, 
            return false;
        },
        createChannel() {

        }

    }
}
</script>

<style>
span {
    display: block;
    color: black;
    box-sizing: inherit;
    text-align: left;
}

.popup {
    background-color: ivory;
    display: inline-block;
    height: auto;
    max-width: 520px;
    width: 100%;
    overflow: hidden;
}

.popupHead {
    display: flex;
    align-items: center;
    width: 100%;
    box-sizing: inherit;
}

.popupHead h1 {
    font-size: 22px;
    font-weight: 900;
    line-height: 1.36365;
}

.popupHead span {
    color: gray;
    line-height: 1.36365;
    font-weight: 400;
}

.popupHead button {
    position: absolute;
    right: 20px;
    top: 20px;
    z-index: 1;
    height: 36px;
    width: 36px;
}


.popupBody {
    padding-right: 46px;
    padding-left: 36px;
}

.popupBody label {
    align-items: baseline;
    display: flex;
}

.popupFooter {
    box-sizing: inherit;
    display: flex;
}

.popupFooterButton {
    float: right;
    margin-left: auto;
}
</style>