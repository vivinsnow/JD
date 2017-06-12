/**
 * Created by vivin on 2017-06-07.
 */
const express = require('express');
const app = express();
const config = require('config-lite')(__dirname);
const pkg = require('./package.json');
const bodyParser = require('body-parser');
const path = require('path');
const cookieParser = require('cookie-parser');
// 设置模板目录
app.set('views', path.join(__dirname, 'views'));
// 设置模板引擎为 ejs
app.set('view engine', 'ejs');
// 设置静态文件目录
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());

const index = require('./routes/index.js');



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

index(app);
app.listen(config.port,()=>{
    console.log(pkg.name+' start on '+config.port);
});