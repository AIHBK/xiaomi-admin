<template>
  <div>
    <el-button type="primary" icon="el-icon-plus" size="mini" @click="addList(true)" >添加 </el-button>
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
  </div>
</template>

<script>
import { nanoid } from 'nanoid'
export default {
  name: 'addinfo',
  props: ['tempListData'],
  data () {
    return {
      addDialog: false,
      addArr: {
        name: '',
        phone: '',
        qq: '',
        address: ''
      }
    }
  },
  methods: {
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

<style>
</style>
