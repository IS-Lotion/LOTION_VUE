<template>
  <div>
    <div> 
      <h2>Please Sign up In</h2>
      <div id="signUpForm">
          
          <p>
            <input name="uid" class="w3-input" placeholder="Enter your ID" v-model="userid">
            <button @click="fnCheckID()" type="submit" class="w3-button w3-green w3-round">Check ID</button><br>
          </p>
          <p>
            <input name="nickname" class="w3-input" placeholder="Enter nickname" v-model="nickname"><br>
          </p>
          <p>
            <input name="password" class="w3-input" placeholder="Enter your password" v-model="password" type="password">
          </p>
          <p>
            <input name="password" class="w3-input" placeholder="confirm password" v-model="password2" type="password" @blur="checkInfo"><br>
            <span class="badge badge-danger mt-1" v-if="!checkPassword">비밀번호가 일치하지 않습니다.</span>
          </p>
          <p>
            <input name="mobile" class="w3-input" placeholder="Enter your mobile number" v-model="mobile"><br>
          </p>
          <p>
            <input name="email" class="w3-input" placeholder="Enter your email" v-model="email" type="text" @blur="checkEmail"><br>
            <span class="badge badge-danger mt-1" v-if="!availableEmail">이미 사용중인 이메일입니다.</span>
            <span class="badge badge-danger mt-1" v-if="!availableEmailForm">이메일 형식이 다릅니다.</span>
          </p>
          
          <p>
            <button @click="fnSignUp()" type="submit" class="w3-button w3-green w3-round">Sign up</button>
          </p>
      </div>
    </div>
  </div>
</template>

<script>
import signUpService from '@/service/signUpService.js'

export default {
  data() {
    return {
      userid: '',
      nickname: '',
      password: '',
      password2: '',
      mobile: '',
      email: '',
      availableEmail : true,
      availableEmailForm : true,
      checkPassword : true
    }
  },
  methods: {
  async fnSignUp() {

      const userData = {
        userid: this.userid,
        nickname: this.nickname,
        userpw: this.password,
        userpw2: this.password2,
        mobile: this.mobile,
        email: this.email
      };

      const response = await signUpService.registerUser(userData);
      
      if(response.status == 200){
        alert('회원가입 되었습니다.');
        this.$router.push('/login');
      } else {
        alert(response.data);
      }

  },
  async fnCheckID() {

      // ID 중복체크
      const response = await signUpService.checkDuplicateId(this.userid);
      if(!response.data) {
        alert('사용 가능한 아이디입니다.');
      } else {
        alert('이미 사용 중인 아이디입니다.');
      }

  },
  checkInfo() {      
    this.checkPassword = true;

    // 비밀번호 일치 여부 체크
    if(this.password !== this.password2){
     this.checkPassword = false;
    } else {
      this.checkPassword = true;
    }
  },
  async checkEmail() {
      this.availableEmail = true;
      this.availableEmailForm = true;

      // 이메일 유효성 검사
      if(!this.vaildateEmail(this.email)){
        this.availableEmailForm = false;
        return;
      } else {
        this.availableEmailForm = true;
      }
  },
  vaildateEmail: function(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
}
}
</script>