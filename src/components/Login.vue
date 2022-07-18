<template>
 <div class="userinfoWrap" :style="{width:fullWidth-1+'px',height:fullHeight-1+'px'}">
   <div class="userinfo">
     <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
       <el-form-item label="账号" prop="account">
         <el-input type="text" v-model="ruleForm.account" @change="getInputName" autocomplete="off"></el-input>
       </el-form-item>
       <el-form-item label="密码" prop="pass">
         <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
       </el-form-item>
       <el-form-item>
         <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
       </el-form-item>
     </el-form>
   </div>
 </div>
</template>

<script>
export default {
  name: 'Login',
  props: ['userName'],
  data () {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass')
        }
        callback()
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.ruleForm.pass) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      fullWidth: document.documentElement.clientWidth,
      fullHeight: document.documentElement.clientHeight,
      ruleForm: {
        pass: '',
        checkPass: '',
        account: ''
      },
      rules: {
        pass: [{
          validator: validatePass,
          trigger: 'blur'
        }],
        checkPass: [{
          validator: validatePass2,
          trigger: 'blur'
        }]
      }
    }
  },
  methods: {
    getInputName (e) {
      this.userName.getName = e
    },
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$router.replace('/Home')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
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
