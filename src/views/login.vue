<template>
  <div class="login">
    <div class="login-main">
      <div class="sys-title">后台管理系统</div>
      <p :class="{'login-tips-hidden':!tipsView,'login-tips-view':tipsView}">Tips : 用户名或密码错误</p>
      <div class="sys-form">
        <el-form  ref="form" :model="form" :rules="rules" label-width="60px">
          <el-form-item label="用户名:" prop="userName" style="color:#fff">
            <el-input v-model="form.userName"></el-input>
          </el-form-item>
          <el-form-item label="密码:" prop="password">
            <el-input type="password" v-model="form.password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit('form')">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      tipsView: false,
      form: {
        userName: 'admin',
        password: '123456'
      },
      rules: {
        userName: [
          {require: true, message: '请输入用户名', trigger: 'blur'}
        ],
        password: [
          {require: true, message: '请输入密码', trigger: 'blur'},
          {min: 6, max: 16, message: '密码长度在6到16个字符', trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    onSubmit (form) {
      this.$refs[form].validate((valid) => {
        if (valid) {
          localStorage.setItem('userName', this.form.userName)
          this.$router.push('/')
        } else {
          this.tipsView = true
          setTimeout(_ => {
            this.tipsView = false
          }, 2000)
          return false
        }
      })
    }
  }
}
</script>
<style lang="less" scoped>
.login {
  position: relative;
  width: 100%;
  height: 100%;
  bottom: 0;
  background:url('../assets/img/back.png') no-repeat;
  background-size: 100% 100%;
  .el-input {
    width: 250px;
  }
  .el-button {
    width: 250px;
  }
}
.login-main {
  width: 500px;
  height: 300px;
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-250px,-150px);
  background: rgba(255,255,255, 0.3);
  border-radius: 10px;
  .sys-title {
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #ddd;
    color: #fff;
    text-align: center;
    font-size: 24px;
  }
  .sys-form {
    padding-top: 50px;
    position: absolute;
    left: 50%;
    transform:translateX(-155px)
  }
}
.login-tips-view {
  position: absolute;
  height: 50px;
  width: 500px;
  line-height: 50px;
  text-align: center;
  top: 50px;
  color: red;
  font-size: 14px;
  opacity: 1;
  transition: opacity 1s linear;
}
.login-tips-hidden {
  position: absolute;
  height: 50px;
  width: 500px;
  line-height: 50px;
  text-align: center;
  top: 50px;
  color: red;
  font-size: 14px;
  opacity: 0;
  transition: opacity 1s linear;
}
</style>
