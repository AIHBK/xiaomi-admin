const db = require('../db/mysql');
const bcryptjs = require('bcryptjs'); 
// 注册新用户
exports.reguser = (req, res) => {
    // 获取客户端提交到服务器的表单数据
    const userinfo = req.body;
    // 检验表单数据
    if (!userinfo.username || !userinfo.password) {
        return res.send({ status: 1, message: 'username 或 password 为 null' });
    }
    var sql = "select * from user where username=?"
    db.query(sql, userinfo.username, (err, result) => {
        if (err) {
            return res.send({ status: 1, message: err.message })
        }
        if (result.lenght > 0) {
            return res.send({ status: 1, message: "已占用" })
        }
    })
    // 加密
    userinfo.password = bcryptjs.hashSync(userinfo.password,10);
    var insertInto = "insert into user set?";
    db.query(insertInto,{username:userinfo.username,password:userinfo.password},(err,result)=>{
        if(err){
            return res.send({status:1,message:err.message});
        }
    })
    res.send({status:0,message:"插入成功！"});
}
// 登陆
exports.login = (req, res) => {
    res.send('login success');
}