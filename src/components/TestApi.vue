<template>
  <div id="main">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>Main Page</h1>     
    <button v-on:click="getList">서버 http 요청</button>
    <h1>{{ msg }}</h1>
  </div>
</template>
  
<script>
import axios from "axios";
export default {
  data() {
    return {
      msg: ''
    };
  },
  // created() {
  //   this.getList();
  // },
  methods: {
    getList: function() {
      var vm = this;
      axios.get('http://localhost:8080/test/hello')
          .then((response) =>{
            vm.msg = response.data;
          })
          .catch(function(error) {
            console.log(error);
          });
    }
  }
}
</script>
<style>
  #main {
    text-align: center;
    float: left;
    width: 85%;
    height: 95vh;
  }
  table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%
  }
  td, th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
  }


</style>