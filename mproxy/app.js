/**
 * Created by vivin on 2017-06-07.
 */
const express = require('express');
const proxy = require('express-http-proxy');

let app = express();

app.use('/proxy',proxy('www.baidu.com',{
    filter:function (req,res) {
        console.log(req.method);
        return req.method=='POST';
    }

}));

app.listen(3000);