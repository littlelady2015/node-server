var express = require('express');
var router  = express.Router();
var mongoose= require('mongoose');
var Goods   = require('../bin/models/goods');

//连接mongoDB
mongoose.connect('mongodb://127.0.0.1:27017/db-demo')
//对mongoDB进行监听
mongoose.connection.on("connected",function(){
console.log('successfully connected')
});
mongoose.connection.on("disconnected",function(){
    console.log('Ops!connection failed.')
});
mongoose.connection.on("error",function(){
    console.log('something is wrong,please check again.')
})
router.get('/',function (req,res,next) {
    Goods.find({},function(err,doc){
     if(err){
         res.json({
           status:'1',
           msg:err.message
         });}
     else {
         res.json({
             status : '0',
             msg    : '',
             result : {
                 count:doc.length,
                 list:doc
             }
         });
     }
    })
})
module.exports = router;