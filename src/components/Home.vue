<template>
  <el-container>
    <el-header>
      <HomeHeader :userName="userName"></HomeHeader>
    </el-header>
    <el-container>
      <HomeAside></HomeAside>
      <HomeMain></HomeMain>
    </el-container>
  </el-container>
</template>
<script>
import HomeHeader from './Home/HomeHeader.vue'
import HomeAside from './Home/HomeAside.vue'
import HomeMain from './Home/HomeMain.vue'
export default {
  name: 'Home',
  props: ['userName'],
  components: {
    HomeHeader,
    HomeAside,
    HomeMain
  },
  data () {
    return {
      listData: [
        {
          date: '2022-05-20',
          name: '菜狗',
          phone: '17370630783',
          qq: '2226773466',
          address: '甘肃'
        },
        {
          date: '2022-05-20',
          name: '菜狗',
          phone: '17370630783',
          qq: '2226773466',
          address: '甘肃'
        },
        {
          date: '2022-05-20',
          name: '菜狗',
          phone: '17370630783',
          qq: '2226773466',
          address: '甘肃'
        },
        {
          date: '2022-05-20',
          name: '菜狗',
          phone: '17370630783',
          qq: '2226773466',
          address: '甘肃'
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped="scoped">
  .el-menu{
    min-width: 150px;
  }
  .el-header{
    padding: 0;
    position: relative;
  }
  .el-table{
    position: relative;
    .deleteUserInfo{
      width: 50px;
      height: 30px;
      background-color: red;
      color: #ffffff;
      position: absolute;
      right: 15px;
    }
  }
</style>
