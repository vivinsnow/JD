/**
 * Created by vivin on 2017-06-07.
 */
'use strict';
const betController = require('../middlewares/betController');
const payoutController = require('../middlewares/payoutController');

module.exports = function (app) {
    //注册接口
    app.route('/api/v1/reg')
        .get(function (req,res,next) {
            //注册页面获取
            res.render('reg');
        })
        .post(function (req,res,next) {
        //todo
            //注册逻辑
            console.log(req.body);
            res.send('注册');
        });
    //登陆以及余额验证
  app.route('/api/v1/login')
      .get(function (req,res,next) {
          console.log(req.cookies);
          res.render('login');
            // res.status(500)
            //     .json({
            //         code:2000,
            //         data:{
            //             msg:'不允许使用GET请求'
            //         }
            //     });
        })
      .post(function (req,res,next) {
          //todo
          //登陆以及验证玩家接口
          console.log(req.cookies);
          res.cookie('deng','xiao');

          res.send('登陆');

      });
   //下注接口
  app.route('/api/v1/bet')
      .get( (req,res,next)=> {
          res.status(500)
              .json({
                  code:2000,
                  data:{
                      msg:'不允许使用GET请求'
                  }
              });
      })
      .post( (req,res,next)=> {
          //todo
          //下注接口
         // betController.checkBet();

         res.json(betController.checkBet());
      });
  //赔付接口
  app.route('/api/v1/payout')
      .get((req,res,next)=> {
          res.status(500)
              .json({
                  code:2000,
                  data:{
                      msg:'不允许使用GET请求'
                  }
              });
      })
      .post( (req,res,next)=> {
          //todo
          //赔付接口
          res.json(payoutController.checkPayout());
      });
};