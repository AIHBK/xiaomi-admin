var express = require('express');
var loginWM = require('../middleWare/loginMW')
const router = express.Router();
// const sqlSelect = 'select username,password from userinfo'
// const sqlInsert = 'insert into userinfo(username,age,sex,nation,idno,nickname,password,qq,mobile)values(?,?,?,?,?,?,?,?,?)'
    
    router.post('/register',loginWM.register,(request,result)=>{
        // connection(sqlSelect,(err,res)=>{
        //     console.log(res)

        // }) 
        
        result.send('1')
    })

    router.post('/login',loginWM.login,(request,result)=>{
        result.send('1')
    })

module.exports = router;
























 


// const express = require('express');
// const router = express.Router();
// var mw = (req,res,next)=>{} //局部中间件
// var mw1 = (req,res,next)=>{} //局部中间件
//     router.post('/',mw,mw1,(req,res)=>{
//         // 可以调用多个中间件
//     })
// // 注册新用户
//     router.get('/regUser',(req,res)=>{
        
//         res.send('1')
//     })
// // 登陆
//     router.post('/login',(req,res)=>{
//         res.send('2w'+req.time)
//     })


// module.exports = router;