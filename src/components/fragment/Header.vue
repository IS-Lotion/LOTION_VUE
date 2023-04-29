<template>
    <header>
        <button @click="logout()" class="w3-button w3-green w3-round">Log Out</button>
    </header>

</template>

<script>
export default {

  methods: {
    logout(){
        this.$cookies.remove("userId");
        this.$cookies.remove("userName"); 
        this.$router.push('/Login');
    }
  }
}
</script>

<style>
  header {
    height: 4.9vh;
    display: flex;
    background: #350d36;
    border-bottom: 0.05vh solid aliceblue;;
  }
  header button {
    position: relative; 
    left: 90%;
    border: 0px; 
    padding: 0px 
  }
</style>