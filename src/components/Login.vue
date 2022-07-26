<template>
 <div class="userinfoWrap" :style="{width:fullWidth-1+'px',height:fullHeight-1+'px'}">
   <div class="userinfo">
     <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
       <el-form-item prop="loginId">
         <el-input type="text" v-model="ruleForm.loginId" prefix-icon="iconfont icon-gerenzhongxin1" autocomplete="off"></el-input>
       </el-form-item>
       <el-form-item prop="loginPass">
         <el-input type="password" v-model="ruleForm.loginPass" prefix-icon="iconfont icon-mima" autocomplete="off"></el-input>
       </el-form-item>
       <el-form-item>
         <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
       </el-form-item>
     </el-form>
   </div>
 </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import qs from 'qs'
axios.defaults.baseURL = 'http://127.0.0.1:3000/vue/admin'
Vue.prototype.$http = axios
export default {
  name: 'Login',
  props: ['userName'],
  data () {
    return {
      fullWidth: document.documentElement.clientWidth,
      fullHeight: document.documentElement.clientHeight,
      ruleForm: {
        loginId: '',
        loginPass: ''
      },
      rules: {
        loginId: [
          { required: true, message: '请输入用户ID或昵称', trigger: 'blur' },
          { min: 3, max: 15, message: '长度在 3 到 15 个字符', trigger: 'blur' }
        ],
        loginPass: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 16, message: '长度在 6 到 16 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          const result = await this.$http.post('/Login', qs.stringify(this.ruleForm))
          if (result.data.state === 3 && (result.status >= 200 || result.status < 300)) {
            this.userName.getName = this.ruleForm.loginId
            this.$router.replace('/Home')
          }
        } else {
          console.log('error submit!!', valid)
        }
      })
    }
  }
}
</script>
<style lang="less" scoped>
  .userinfoWrap{
    width: 100%;
    margin: 0 auto;
    background: url(../assets/demo-1-bg.jpg) center no-repeat fixed;
    background-size: 100% 100%;
    position: relative;
    .userinfo{
      width: 400px;
      height: 500px;
      text-align: center;
      position: absolute;
      left: 50%;
      margin-left: -200px;
      top: 25%;
      .el-button{
        width: 100%;
      }
    }
  }
</style>
