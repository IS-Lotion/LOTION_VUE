<template>
  <div id="workspace">
    <WorkSpaceSideBar/>
    <TestApi />
  </div>
</template>

<script>
import TestApi from '../components/TestApi.vue'
import WorkSpaceSideBar from '../components/WorkSpaceSideBar.vue'

export default {
  components: {
    TestApi,
    WorkSpaceSideBar
  }
}
</script>

<style>
#workspace {
  /* height: 95vh; */
}
</style>