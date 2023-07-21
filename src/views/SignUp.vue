<template>
    <div>
      <div>
        <h2>Please Sign up In</h2>
        <div id="signUpForm">
            <p>
              <input class="w3-input" name="uid" placeholder="Enter your ID" v-model="user_id"><br>
            </p>
            <p>
              <input name="password" class="w3-input" placeholder="Enter your password" v-model="user_pw" type="password">
            </p>
            <p>
              <input name="password" class="w3-input" placeholder="confirm password" v-model="user_pw" type="password">
            </p>
            <p>
              <button @click="fnSignUp()" type="submit" class="w3-button w3-green w3-round">Sign up</button>
            </p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        user_id: '',
        user_pw: '',
        user_pw2: '',
      }
    },
    methods: {
    fnSignUp() {
        if (this.user_id === '') {
          alert('ID를 입력하세요.')
          return
        }
  
        if (this.user_pw === '') {
          alert('비밀번호를 입력하세요.')
          return
        }
  
        alert('회원가입 되었습니다.')
      }
    }
  }
  </script>