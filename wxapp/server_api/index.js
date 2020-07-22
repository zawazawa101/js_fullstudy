const express = require('express');//后端开发框架
const apiMocker = require('mocker-api')
const fs = require('fs');
const path = require('path');//文件系统 node内置
const app = express();
//localhost 127.0.0.1:8080  
// 阿里云上的IP  :3306 mysql   :27017 mongodb
app.get('/', (req,res)=>{
  fs.createReadStream('./home.html').pipe(res);
  // res.end('hello world');
})
apiMocker(app,path.resolve('./mocker/mocker.js'));
app.listen(1314);// 端口