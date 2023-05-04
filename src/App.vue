<template>
  <PageHeader></PageHeader>
  <router-view></router-view>
</template>

<script>
import PageHeader from '@/components/PageHeader'
// import Main from '@/views/Main.vue'

export default {
  name: 'App',
  components: {
    PageHeader
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#nav a.router-link-exact-active {
  color:
}
</style>
