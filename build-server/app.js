'use strict';

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var koa = require('koa');
var logger = require('koa-logger');
var router = require('koa-router')();

//var views = require('koa-views');


//import artTemplate from 'koa-artTemplate';

//app.use(koaArt(path.resolve(__dirname, 'views/')))

var app = new koa();

console.log("第一次提价o");

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
app.use(logger());

/*app.use(ctx => {
  ctx.body = 'Hello World5555555666666666655555';
});*/
/*var html = require("./index.html");
console.log("html",html)*/
/*app.use(async (ctx, next) => {
  await ctx.render('./views/index.html')
})*/
app.use(function () {
  var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(ctx) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return ctx.render('index.html');

          case 2:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}());

/*router.get('/',function (ctx, next) {
   ctx.body =  ctx.render('index.html')
});

app.use(router.routes())
  .use(router.allowedMethods());*/

app.listen(3000);