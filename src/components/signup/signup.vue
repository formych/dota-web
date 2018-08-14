<template lang="html">
  <div class="sign-form">
    <div class="common-wrapper input-wrapper">
      <span class="sign-span">账号</span>
      <input v-model="mobile" placeholder="请输入手机号" required>
    </div>
    <div class="common-wrapper input-wrapper">
      <span class="sign-span">密码</span>
      <input type="password" placeholder="请输入登录密码" v-model="certificate" required>
    </div>
    <div class="common-wrapper button-wrapper">
      <button id="button-signin" class="button-submit" @click="signin">登录</button>
    </div>
    <div class="common-wrapper foot-wrapper">
      <router-link class="register" to="/signin">登录账号</router-link>
      <router-link class="find-pwd" to="/find">找回密码</router-link>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

const CodeOK = 200
export default {
  data() {
    return {
      mobile: '',
      certificate: ''
    }
  },
  created() {
    localStorage.setItem('logged_in', false)
    this.$store.state.logged_in = false
  },
  methods: {
    signin() {
      if (!this.mobile.match(/^1([3456789])\d{9}$/)) {
        alert('手机号不合法')
        return
      }
      if (this.certificate === '') {
        alert('密码不合法')
      }
      axios.post('http://localhost/user/signup', {
        auth_type: 1,
        identifier: this.mobile,
        certificate: this.certificate
      }).then((res) => {
        if (res.data.code === CodeOK) {
          localStorage.setItem('logged_in', true)
          this.$store.state.logged_in = true
          this.$router.push('/recent')
        } else {
          alert(res.data.msg)
        }
      })
    }
  }
}

</script>

<style lang="stylus">
@import '../../common/stylus/mixin'
  .sign-form
    width 100%
    height 100%
    margin-top 30%
  .common-wrapper
    display flex
    height 50px
    width 90%
    margin 0 auto
    vertical-align middle
  .input-wrapper
    border-bottom 1px solid rgba(7,17,27,0.1)
    .sign-span
      height 50px
      width 15%
      margin-left 10px
      line-height 50px
      display inline-block
    input
      width 80%
      margin-left: 30px
      outline none
      border none
      font-size 1.2em
  .button-wrapper
    margin-top 40px
    .button-submit
      width 100%
      text-align center
      outline none
      cursor pointer
      font-size 1.3em
      border-radius: 30px
      border 0
      background-color #f70
  .foot-wrapper
    margin-top 20px
    .register
      width 50%
      line-height 50px
      display inline-block
      float left
      text-align center
      margin 0 auto
    .find-pwd
      width 50%
      line-height 50px
      display inline-block
      float right
      text-align center
</style>
