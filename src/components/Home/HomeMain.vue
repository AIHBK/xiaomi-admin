<template>
  <el-main>
    <el-table :data="listData" stripe>
      <el-table-column prop="date" label="日期" width="140"></el-table-column>
      <el-table-column prop="name" label="姓名" width="120"></el-table-column>
      <el-table-column prop="phone" label="手机号" width="120"></el-table-column>
      <el-table-column prop="qq" label="QQ" width="120"></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
      <el-table-column label="操作">
        <template>
          <el-button size="mini">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-main>
</template>

<script>
export default {
  name: 'HomeMaon'
}
</script>

<style lang="less" scoped="scoped">
</style>
