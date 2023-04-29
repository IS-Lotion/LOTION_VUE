<template>
  <div>
    <div>
      <h2>Please Log In</h2>
      <div id="loginForm">
        
          <p>
            <input class="w3-input" name="uid" placeholder="Enter your ID" v-model="user_id"><br>
          </p>
          <p>
            <input name="password" class="w3-input" placeholder="Enter your password" v-model="user_pw" type="password">
          </p>
          <p>
            <button @click="fnLogin()" class="w3-button w3-green w3-round">Login</button>
            <button @click="goSignUp()" class="w3-button w3-green w3-round">SignUp</button>
          </p>

      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      user_id: this.$cookies.get("userId"),
      user_pw: ''
    }
  },
  methods: {
    fnLogin() {
      if (this.user_id === '') {
        alert('ID를 입력하세요.')
        return
      }

      if (this.user_pw === '') {
        alert('비밀번호를 입력하세요.')
        return
      }
      axios.get('http://localhost:8080/login')
            .then((response) =>{
              this.$cookies.set("userId", this.user_id)
              this.$cookies.set("userName", response.data)

              this.$router.push('/home')
            })
            .catch(function(error) {
              console.log(error)
            });
      
    },
    goSignUp(){
        this.$router.push('/signUp')
    }
  }
}
</script>