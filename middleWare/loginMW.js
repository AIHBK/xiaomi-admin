const connection = require('../db/mysql');
var selectSql = 'select username password from userinfo where username="?" and password="?"'
const wm = {
    setHeard:function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "X-Requested-With");
        res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
        res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
        res.header("X-Powered-By",' 3.2.1')
        res.header("Content-Type", "application/json;charset=utf-8");
        next();
    },
    login:function(req,res,next){
        console.log(req.query)
        connection.query(selectSql,(req,res)=>{
            console.log(res);
        });
        next();
    },
    register:function(req,res,next){

        const sqlInsert = 'insert into test (mobile)values(?)'
        console.log(req.body);
        connection.query(sqlInsert,req.query,(err,result)=>{
            connection.query('select * from test',(err,res)=>{
                console.log(res);
            })
        });
        

        next();
    }
}
module.exports = wm;
