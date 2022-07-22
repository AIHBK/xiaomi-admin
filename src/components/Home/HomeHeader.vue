<template>
  <el-header>
    <div class="logo-box">
      <span class="logo-wrap"></span>
      <span class="logo-title">管理系统</span>
    </div>
    <div class="userinfo">
      <el-dropdown>
        <el-avatar class="user-img" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
        <span class="user-message">管理员: {{tempName.getName}}</span>
        <span class="user-message">{{createDate}}</span>
      </el-dropdown>
    </div>
  </el-header>
</template>
<script>
export default {
  name: 'HomeHeader',
  props: ['userName', 'listData'],
  data () {
    return {
      tempName: JSON.parse(JSON.stringify(this.userName))
    }
  },
  computed: {
    createDate () {
      return this.listData.filter((val) => {
        return val.name === this.tempName.getName
      })[0].date.substring(0, this.listData.filter((val) => {
        return val.name === this.tempName.getName
      })[0].date.indexOf(' '))
    }
  }
}
</script>

<style lang="less" scoped="scoped">
  .el-header{
    text-align: right;
    font-size: 12px;
    background-color: rgb(238, 241, 246);
    .logo-box{
      width: 250px;
      height: 60px;
      position: absolute;
     .logo-wrap{
       width: 50px;
       height: 50px;
       margin: 5px 0;
       display: block;
       background: url(https://s02.mifile.cn/assets/static/image/logo-mi2.png) center center no-repeat;
       background-size: 100%;
       position: absolute;
       left: 100px;
     }
     .logo-title{
       font-weight: 700;
       font-size: 20px;
       line-height: 60px;
     }
    }
    .userinfo{
      position: absolute;
      right: 15px;
      width: 300px;
      height: 60px;
      line-height: 60px;
      .el-dropdown{
        justify-content: space-around;
        display: flex;
      }
      .user-message {
        width: 100px;
        height: 50px;
        margin: 5px 0;
        text-align: center;
      }
      .user-img{
        width: 50px;
        height: 50px;
        margin: 5px 0;
      }
    }
  }
</style>
