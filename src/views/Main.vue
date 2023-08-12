<template>
  <div id="workspace">
    <WorkSpaceSideBar @openCreateChannel="openCreateChannel"/>
    <TestApi />
    <CreateChannel v-if="isVisible" @closeCreateChannel="closeCreateChannel"/>
  </div>
</template>

<script>
import TestApi from '../components/TestApi.vue'
import WorkSpaceSideBar from '../components/WorkSpaceSideBar.vue'
import CreateChannel from '@/components/CreateChannel.vue'

export default {
  components: {
    TestApi,
    WorkSpaceSideBar,
    CreateChannel
  },

  data() {
    return {
      isVisible : null
    }
  },
  methods: {
    openCreateChannel(data) {
      this.isVisible = data
    },
    closeCreateChannel(data) {
      this.isVisible = data
    }
    
  }
}
</script>

<style>
span {
  color: white;
}
</style>