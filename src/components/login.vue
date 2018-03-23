<template>
	<div  class="login">
		<div class="userName">
			<label>用户名:</label>
			<input type="text" name="" v-model="params.userName">
		</div>
		<div class="passWord">
			<label>密&nbsp;&nbsp;&nbsp;码:</label>
			<input type="text" name="" v-model="params.userPassword">
		</div>
		<div class="yzCode">
			<label>验证码:</label>
			<input type="text" name="" v-model="params.checkCode">
			<img :src="codeSrc" id="imageCode" @click="changeCode">
		</div>
		<mt-button type="primary" @click="toLogin">登录</mt-button>
	</div>
</template>
<script type="text/javascript">
	export default {
	  name: 'login',
	  data () {
	    return {
	      codeSrc: '',
      apiUrl: this.All.ApiUrl,
      params: {
        userName: '',
        userPassword: '',
        checkCode: ''
      }
    }
  },
  created: function () {
    this.changeCode()
  },
  components: {
  },
  methods: {
    changeCode: function () {
      let append = '?clearCache=' + new Date().getTime() + 'a' + Math.random()
      this.codeSrc = this.apiUrl + '/login/LoginCtrl-getVerifyImage' + append
    },
    toLogin: function () {
      if (this.params.userName !== '' && this.params.userPassword !== '' && this.params.checkCode !== '') {
        this.$http.post('/crm/login/LoginCtrl-loginInterface?userName=' + this.params.userName + '&userPassword=' + this.params.userPassword + '&checkCode=' + this.params.checkCode)
      .then((res) => {
        console.log(res)
        console.log(this, 'this')
        if (res.data.state === '0') {
          alert('验证码错误')
        } else if (res.data.state === '-1') {
          alert('密码错误')
        } else if (res.data.state === '-2') {
          alert('用户名有误')
        } else {
          this.$cookies.set('deptonename', res.data.deptonename)
          this.$cookies.set('deptfather', res.data.deptfather)
          this.$cookies.set('depttwoname', res.data.depttwoname)
          this.$cookies.set('postId', res.data.postId)
          this.$cookies.set('typeDesktop', res.data.typeDesktop)
          this.$cookies.set('userNickName', res.data.userNickName)
          this.$cookies.set('userid', res.data.userid)
         // console.log(this.$cookies.get('deptonename'))
          this.$router.push({name: 'afficheAndNewList'})
        }
	      })
      .catch((error) => {
        console.log(error)
	      })
      } else {
        alert('请填写信息')
      }
	    }
  }
}
</script>
<style type="text/css" scoped>
	.login{
		padding-top:3rem; 
		text-align: center;
	}
	.login div{
		padding: 0.07rem 0.4rem;
		font-size: 0.16rem;
		text-align: center;
	}
	button{
		width: 80px;
    	height: 35px;
	}
</style> 
