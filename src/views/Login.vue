<template>
  <div>
    <div>
      <h2>Please Log In</h2>
      <div id="loginForm">

        <p>
          <input class="w3-input" name="uid" placeholder="Enter your ID" v-model="loginInfo.userId"><br>
        </p>
        <p>
          <input name="password" class="w3-input" placeholder="Enter your password" v-model="loginInfo.userPwd"
            type="password">
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
import { mapActions } from 'vuex'

const loginAuthStore = 'loginAuthStore'

export default {
  name: 'LoginPage',
  components: {},
  data() {
    return {
      loginInfo: {
        userId: '',
        userPwd: ''
      }
    }
  },
  created() {
    this.initStore()
  },
  mounted() { },
  computed: {},
  methods: {
    ...mapActions(loginAuthStore, ['login', 'initStore']),

    fnLogin() {
      const loginInfo = this.loginInfo
      console.log('Loginpage > fnLogin > loginInfo => ', loginInfo)
      this.login(loginInfo)
        .then((res) => {
          console.log('===> LOGIN SUCCESS!!! <===')
          this.$router.push('/home')
        })
        .catch(function (error) {
          console.log('error occur' + error)
        });
    },
    goSignUp() {
      this.$router.push('/signUp')
    }
  }
}
</script>