

var koa = require('koa');
var logger = require('koa-logger');
var router = require('koa-router')();

//var views = require('koa-views');
import path from 'path'

//import artTemplate from 'koa-artTemplate';

//app.use(koaArt(path.resolve(__dirname, 'views/')))

var app = new koa();

console.log("第一次提价o")

/*// logger
app.use(ctx =>{
  // (2) 进入 logger 中间件
  var start = new Date;
  yield next;
  // (4) 再次进入 logger 中间件，记录2次通过此中间件「穿越」的时间
  var ms = new Date - start;
  console.log('%s %s - %s', this.method, this.url, ms);
});
*/
/*app.use((ctx, next) => {
  const start = new Date();
  return next().then(() => {
    const ms = new Date() - start;
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
  });
});

app.use(async (ctx, next) => {
  const start = new Date();
  await next();
  const ms = new Date() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});*/

/*app.use(views(__dirname + '/views', {
  map: {
    html: 'underscore'
  }
}));*/
//app.use(koaArt(path.resolve(__dirname, 'views/')));
app.use(logger())

/*app.use(ctx => {
  ctx.body = 'Hello World5555555666666666655555';
});*/
/*var html = require("./index.html");
console.log("html",html)*/
/*app.use(async (ctx, next) => {
  await ctx.render('./views/index.html')
})*/
app.use(async function(ctx){
  await ctx.render('index.html')
})

/*router.get('/',function (ctx, next) {
   ctx.body =  ctx.render('index.html')
});

app.use(router.routes())
  .use(router.allowedMethods());*/


app.listen(3000);