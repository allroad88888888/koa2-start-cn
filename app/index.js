"use strict";
import * as React from 'react';
import * as ReactDOM from 'react-dom';

const injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

import {Provider} from 'react-redux';
import {Router, Route,browserHistory,hashHistory,IndexRoute} from 'react-router';
import {syncHistoryWithStore,routerReducer} from 'react-router-redux';
import {ConfigureStore,TodoApp,indexAction,helpAction} from "yuapt-help";

import App from './ctrl/app';

import Init from './component/base/init';
Init();


import {xuzu,save} from "./routes/reducer/xuzuReducer.js";

//import {save} from "./component/weixin/weixinReducer.js";
//console.log("xuzu",xuzu)

let store,todoApp = TodoApp({xuzu,save},{});
if(NODE_ENV!="production"){
    let DevTools = require ('./ctrl/devTools').default;
    let createLogger =require('redux-logger');
    store = ConfigureStore(NODE_ENV,createLogger,DevTools)(todoApp);
}else{
    store = ConfigureStore(NODE_ENV)(todoApp);
}

const history = syncHistoryWithStore(hashHistory, store);

//获取cookie  灰色发布所用
store.dispatch(helpAction.cookieGet());
const List = require("./routes/list/list");
const Info = require("./routes/info/info");
const Details = require("./routes/infoDetails/detail");

const UpImages = require("./routes/up/images");

const Service = require("./routes/service/service");

ReactDOM.render(
     <Provider store={store}>
         <Router history={history}>
            <Route path="/" component={App}>

                <IndexRoute component={Service} />
                <Route path="/service" component={Service} />
                <Route path="/list" component={List} />
                <Route path="/info/:id" component={Info} />
                <Route path="/detail/:id" component={Details}/>
                <Route path="/up" component={UpImages}/>
            </Route>
          </Router>
    </Provider>,
    document.getElementById('container-body')
);

/*dev.yms.tunnel.yujiangongyu.com
http://dev.yms.tunnel.yujiangongyu.com/usercenter/login.html
http://dev.yms.tunnel.yujiangongyu.com/caigou6/#/up

*/