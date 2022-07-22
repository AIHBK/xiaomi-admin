<template>
  <el-main>
    <el-button type="primary"
     icon="el-icon-plus"
     size="mini"
     @click="addList(true)"
     >添加
    </el-button>
    <el-dialog title="提示" :visible.sync="addDialog" width="30%" center>
      <el-input clearable type="text" v-model="addArr.name" placeholder="请输入姓名"></el-input>
      <el-input clearable type="text" v-model="addArr.phone" placeholder="请输入手机号"></el-input>
      <el-input clearable type="text" v-model="addArr.qq" placeholder="请输入QQ"></el-input>
      <el-input clearable type="text" v-model="addArr.address" placeholder="请输入地址"></el-input>
      <span slot="footer" class="dialog-footer">
        <el-button @click="addDialog = false">取 消</el-button>
        <el-button type="primary" @click="closeAddDialog(false)">确 定</el-button>
      </span>
    </el-dialog>
    <el-table :data="tempListData" stripe>
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
          <el-input type="text" :value="tempArr.date" v-model="tempArr.date" clearable></el-input>
          <el-input type="text" :value="tempArr.name" v-model="tempArr.name" clearable></el-input>
          <el-input type="text" :value="tempArr.phone" v-model="tempArr.phone" clearable></el-input>
          <el-input type="text" :value="tempArr.qq" v-model="tempArr.qq" clearable></el-input>
          <el-input type="text" :value="tempArr.address" v-model="tempArr.address" clearable></el-input>
            <span slot="footer" class="dialog-footer">
              <el-button @click="centerDialogVisible = false">取 消</el-button>
              <el-button type="primary" @click="confirmDate(false,tempArr.id)">确 定</el-button>
            </span>
          </el-dialog>
        </template>
      </el-table-column>
    </el-table>
  </el-main>
</template>

<script>
import { nanoid } from 'nanoid'
export default {
  name: 'HomeMaon',
  props: ['listData', 'listDelete', 'listUpData'],
  data () {
    return {
      tempArr: {},
      tempIndex: null,
      tempListData: this.listData,
      centerDialogVisible: false,
      addDialog: false,
      addArrState: false,
      addArr: {
        id: '',
        name: '',
        phone: '',
        qq: '',
        address: ''
      }
    }
  },
  computed: {
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
        this.listDelete(deleteId.id)
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },
    upData (Dialog, obj) {
      this.centerDialogVisible = Dialog
      this.tempArr = JSON.parse(JSON.stringify(obj))
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
          return val.id === this.tempArr.id
        })] = this.tempArr
        this.tempListData = JSON.parse(JSON.stringify(this.tempListData))
        this.listUpData(this.tempArr)
        this.centerDialogVisible = Dialog
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消修改'
        })
        this.centerDialogVisible = Dialog
      })
    },
    addList (Dialog) {
      this.addDialog = Dialog
    },
    addNotNull () {
      for (var item in this.addArr) {
        if (this.addArr[item] === '' || this.addArr[item] === null) {
          this.$message.error('信息不可以为空!')
          return false
        }
      }
      return true
    },
    closeAddDialog (closeDialog) {
      this.$confirm('此操作将添加一条用户信息, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.addArr.id = nanoid()
        this.addArr.date = new Date(new Date()).toLocaleDateString().replaceAll('/', '-')
        if (this.addNotNull()) {
          this.$message({
            type: 'success',
            message: '添加成功'
          })
          this.tempListData.push(JSON.parse(JSON.stringify(this.addArr)))
        }
        this.addDialog = closeDialog
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消添加'
        })
        this.addDialog = closeDialog
      })
    }
  }
}
</script>
<style lang="less" scoped="scoped">
</style>
