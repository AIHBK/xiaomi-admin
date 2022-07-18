<template>
  <el-header style="text-align: right; font-size: 12px; background-color: rgb(238, 241, 246);">
    <div class="userinfo">
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px; line-height: 60px;"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>新增</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span>{{userName.getName}}</span>
    </div>
  </el-header>
</template>
<script>
export default {
  name: 'HomeHeader',
  props: ['userName']
}
</script>

<style lang="less" scoped="scoped">
  .userinfo{
    position: absolute;
    right: 20px;
  }
</style>
