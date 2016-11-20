var koa = require('koa');
var logger = require('koa-logger');
var send = require('koa-send');
var router = require('koa-router')();

var bodyParser = require('koa-bodyparser');


import {DB} from "./database/temp";

import onerror from 'koa-onerror';

const artTemplate = require('art-template');
artTemplate.config('base', path.resolve(__dirname, 'views/'));
artTemplate.config('extname', '.html');


//var views = require('koa-views');
import path from 'path'

var app = new koa();
app.use(logger());//日志
app.use(bodyParser());//表单什么数据转换 

//异常处理
onerror(app);

/*处理  404   500  页面 */
app.use(async(ctx,next) => {
   await next();
   console.log("status",ctx.status)
   if (404 != ctx.status&& 500 != ctx.status) return; //&& 500 != ctx.status
   switch (ctx.accepts('html', 'json')) {
    case 'html':
      ctx.type = 'html';
      ctx.body = artTemplate(ctx.status, ctx);
      break;
    case 'json':
      ctx.body = {
        message: 'Page Not Found'
      };
      break;
    default:
      ctx.type = 'html';
      ctx.body = artTemplate(ctx.status, ctx);
  }
});


//onerror(app, {text:"你大爷 出错了 啦   哈哈 你帮你"})
/*路由  处理  */

var database = new DB();
//console.log("DB",dd.add);

router.get('/', async (ctx, next) => {
    // 发送静态文件
    var a = artTemplate("index", {});
    console.log("a",database);
    await database.find().then((result)=>{
        ctx.body=ccc;
    });    
})

app.use(router.routes())
   .use(router.allowedMethods());






app.listen(3000);
