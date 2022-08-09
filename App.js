const express = require('express');
const cors = require('express');
const app = express();
const userRouter = require('./router/user');
var loginWM = require('./middleWare/loginMW')
// 解析application/x-www-from-urlencoded 数据
// app.use(express.urlencoded({extended:true}))
// 解决跨域问题
app.use(cors());
app.use(loginWM.setHeard);
app.use(loginWM.login);
app.use('/user',userRouter)




app.listen(80,()=>{
  console.log('success');
})































// // 导入模块
// const express = require('express');
// // 导入cots中间件
// const cors = require('cors');

// // 导入user
// const userRouter = require('./router/user')
// // 创建实例对象
// const app = express();
// // 解析表单数据中间件 只能解析x-www-from-urlencoded格式的表单数据
// app.use(express.urlencoded({extended:false}))
// app.use(cors());
// app.use('/api',userRouter)


// // 启动服务
// app.listen(3007,()=>{
//   console.log('api server runing at http://127.0.0.1:3007')
// })