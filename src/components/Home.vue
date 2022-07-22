<template>
  <el-container>
    <el-header>
      <HomeHeader :userName="userName" :listData="listData"></HomeHeader>
    </el-header>
    <el-container>
      <HomeAside></HomeAside>
      <HomeMain
        :listData="listData"
        :listDelete="listDelete"
        :listUpData="listUpData"
      ></HomeMain>
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
  methods: {
    listDelete (Id) {
      this.listData = this.listData.filter((val) => {
        return val.id !== Id
      })
      console.log(this.listData)
    },
    listUpData (upData) {
      this.listData = this.listData.filter((val) => {
        return val.id !== upData.id
      })
      console.log(this.listData)
    }
  },
  data () {
    return {
      listData: [
        {
          id: '1',
          date: '2022-05-20 9:12',
          name: 'admin',
          phone: '17370630783',
          qq: '2226773466',
          address: '甘肃'
        },
        {
          id: '2',
          date: '2022-05-22 9:12',
          name: '狗',
          phone: '17370630783',
          qq: '2226773466',
          address: '甘肃'
        },
        {
          id: '3',
          date: '2022-05-20 9:14',
          name: '狗',
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
