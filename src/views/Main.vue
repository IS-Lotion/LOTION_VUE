<template>
  <div id="workspace">
    <WorkSpaceSideBar @openCreateWorkspace="openCreateWorkspacePopup"/>
    <TestApi />

    <dialog class="popup" v-if="isVisible">
      <div class="popupHead">
        <div>
          <h1>Create a Channel</h1>
        </div>    
        <button @click="closePopup()" > X </button>

      </div>  
      <div class="popup-input">
        이름 <input type="text" name="WorkspaceName">
      
      </div>
      <div>
        <button> 초대</button>
      </div>
    </dialog>
  </div>
</template>

<script>
import TestApi from '../components/TestApi.vue'
import WorkSpaceSideBar from '../components/WorkSpaceSideBar.vue'

export default {
  components: {
    TestApi,
    WorkSpaceSideBar
  },

  data() {
    return {
      isVisible : null
    }
  },
  methods: {
    openCreateWorkspacePopup(data) {
      this.isVisible = data
      console.log(this.isVisible)
    },
    closePopup() {
      this.isVisible = false
      console.log(this.isVisible)
    }
    
  }
}
</script>

<style>

.popup {
  width: 80%;
  background-color: ivory;
  display: inline-block;
  padding: 10px;
}

.popupHead {
  display: block;
  align-items: center;
  right: 20px;
  top: 20px;
}

.popupHead h1{
  padding: 0px 1px 0px 3px;

}

.popupHead button {
  position: absolute;
  right: 20px;
  top: 35px;
  z-index: 1;
  height: 36px;
  width: 36px;
}

p {
  color: black;
}
</style>