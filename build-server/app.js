'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _temp = require('./database/temp');

var _koaOnerror = require('koa-onerror');

var _koaOnerror2 = _interopRequireDefault(_koaOnerror);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var koa = require('koa');
var logger = require('koa-logger');
var send = require('koa-send');
var router = require('koa-router')();

var bodyParser = require('koa-bodyparser');

var artTemplate = require('art-template');
artTemplate.config('base', _path2.default.resolve(__dirname, 'views/'));
artTemplate.config('extname', '.html');

//var views = require('koa-views');


var app = new koa();
app.use(logger()); //日志
app.use(bodyParser()); //表单什么数据转换 

//异常处理
(0, _koaOnerror2.default)(app);

/*处理  404   500  页面 */
app.use(function () {
  var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(ctx, next) {
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return next();

          case 2:
            console.log("status", ctx.status);

            if (!(404 != ctx.status && 500 != ctx.status)) {
              _context.next = 5;
              break;
            }

            return _context.abrupt('return');

          case 5:
            _context.t0 = ctx.accepts('html', 'json');
            _context.next = _context.t0 === 'html' ? 8 : _context.t0 === 'json' ? 11 : 13;
            break;

          case 8:
            ctx.type = 'html';
            ctx.body = artTemplate(ctx.status, ctx);
            return _context.abrupt('break', 15);

          case 11:
            ctx.body = {
              message: 'Page Not Found'
            };
            return _context.abrupt('break', 15);

          case 13:
            ctx.type = 'html';
            ctx.body = artTemplate(ctx.status, ctx);

          case 15:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());

//onerror(app, {text:"你大爷 出错了 啦   哈哈 你帮你"})
/*路由  处理  */

var database = new _temp.DB();
//console.log("DB",dd.add);

router.get('/', function () {
  var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(ctx, next) {
    var a;
    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            // 发送静态文件
            a = artTemplate("index", {});

            console.log("a", database);
            _context2.next = 4;
            return database.find().then(function (result) {
              ctx.body = ccc;
            });

          case 4:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, undefined);
  }));

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}());

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000);