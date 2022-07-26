<template>
  <el-main>
    <!-- <el-button type="primary" icon="el-icon-plus" size="mini" @click="addList(true)" >添加 </el-button> -->
    <addinfo :tempListData="tempListData">
    </addinfo>
    <el-table @selection-change="selectItem" :data="tempListData" stripe>
      <el-table-column type="selection" width="140"></el-table-column>
      <el-table-column prop="date" label="日期" width="140"></el-table-column>
      <el-table-column prop="name" label="姓名" width="120"></el-table-column>
      <el-table-column prop="phone" label="手机号" width="120"></el-table-column>
      <el-table-column prop="qq" label="QQ" width="120"></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
      <el-table-column label="操作" width="150">
        <template slot-scope="scope">
          <el-button size="mini" type="danger" @click="Deletes(scope.row)">删除</el-button>
          <el-button size="mini" type="primary" @click="upData(true,scope.row)">编辑</el-button>
          <el-dialog title="提示" :visible.sync="centerDialogVisible" width="30%" center>
          <el-input type="text" :value="tempObj.date" v-model="tempObj.date" clearable></el-input>
          <el-input type="text" :value="tempObj.name" v-model="tempObj.name" clearable></el-input>
          <el-input type="text" :value="tempObj.phone" v-model="tempObj.phone" clearable></el-input>
          <el-input type="text" :value="tempObj.qq" v-model="tempObj.qq" clearable></el-input>
          <el-input type="text" :value="tempObj.address" v-model="tempObj.address" clearable></el-input>
            <span slot="footer" class="dialog-footer">
              <el-button @click="centerDialogVisible = false">取 消</el-button>
              <el-button type="primary" @click="confirmDate(false,tempObj.id)">确 定</el-button>
            </span>
          </el-dialog>
        </template>
      </el-table-column>
    </el-table>
    <div style="margin-top: 20px" v-if="tempListData.length>0">
      <el-button type="danger" size="mini" @click="deleteAll()">删除选中</el-button>
    </div>
  </el-main>
</template>

<script>
import addinfo from './HomeMain/addinfo.vue'
export default {
  name: 'HomeMaon',
  props: ['listData'],
  components: {
    addinfo
  },
  data () {
    return {
      tempObj: {},
      tempArr: [],
      tempListData: this.listData,
      centerDialogVisible: false,
      addArrState: false,
      selectItemValLength: null
    }
  },
  methods: {
    Deletes (deleteId) {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
        this.tempListData = this.tempListData.filter((val) => {
          return val.id !== deleteId.id
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
        console.log(deleteId)
      })
    },
    upData (Dialog, obj) {
      this.centerDialogVisible = Dialog
      this.tempObj = JSON.parse(JSON.stringify(obj))
    },
    confirmDate (Dialog, getId) {
      this.$confirm('确认修改该信息吗?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '修改成功!'
        })
        this.tempListData[this.tempListData.findIndex((val) => {
          return val.id === this.tempObj.id
        })] = this.tempObj
        this.tempListData = JSON.parse(JSON.stringify(this.tempListData))
        this.centerDialogVisible = Dialog
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消修改'
        })
        this.centerDialogVisible = Dialog
      })
    },
    // 删除选中
    selectItem (val) {
      if (val.length > 0) {
        for (var i = 0; i < val.length; i++) {
          val[i].deleteState = true
        }
      } else {
        for (var x = 0; x < this.tempListData.length; x++) {
          this.tempListData[x].deleteState = false
        }
      }
      this.selectItemValLength = val.length
    },
    deleteAll () {
      if (this.selectItemValLength <= 0 || this.selectItemValLength == null) {
        return this.$message({
          type: 'warning',
          message: '请先选择!'
        })
      }
      this.$confirm('此操作将删除所用意选中, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        center: true
      }).then(() => {
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
        this.tempListData = this.tempListData.filter((val) => {
          return val.deleteState !== true
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    }
  }
}
</script>
<style lang="less" scoped="scoped">
</style>
