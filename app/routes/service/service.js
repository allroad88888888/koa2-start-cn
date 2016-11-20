import React, { Component, PropTypes } from 'react';
// import { connect } from 'react-redux';

//var css = require("./list.scss");

import ServiceSearch from "./../../component/search/serviceSearch.js";
import Scroll from "./../../component/scroll/scroll.js";
// import Swipe from "./../../component/swipe/swipe.js";
// import Loading from "./../../component/base/loading.js";
// import Weixin from "./../../component/weixin/weixin.js";
// import * as action from "./../action/listAction.js";
import ServiceList from "./service_list";
import TabsControl from "./../../component/tab/tab.js";
import each from "lodash/each";

class Service extends Component {
    constructor(props) {
        super(props);
        // this.setValue = this.setValue.bind(this);
        // this.search = this.search.bind(this);
        // this.upFn = this.upFn.bind(this);
        /*this.state = {
            isShowLoad:true
        }*/
    }
    //初始化 调用
    // componentWillMount() {
    //     let { dispatch, xuzuSearch } = this.props;
    //     dispatch(action.xuzuSearchInit()); //设置查询配置
    //     dispatch(action.xuzuSearch());  //调用查询
    // }
    // //动作  设置查询值
    // setValue(name, value) {
    //     let { dispatch, xuzuSearch } = this.props;
    //     dispatch(action.xuzuSearchSetValue(name, value)); //设置查询值
    // }
    // //点击搜索按钮
    // search() {
    //     let { dispatch, xuzuSearch } = this.props;
    //     dispatch(action.xuzuSearch(false));  //调用查询按钮
    // }
    // //下拉加载
    // upFn(){
    //     let { dispatch, xuzuSearch,list } = this.props;
    //     list.isFetching||(list.result.result.length>=10&&dispatch(action.xuzuSearch(true,this.props.xuzu.page)));
    // }
    //界面显示
    render() {
         let showData = [
            {name:"ccc",address:"111",time:"12/5"},
            {name:"ddd",address:"222",time:"12/5"}];
        let showData01 = [{name:"aaa",address:"333",time:"12/5"},
            {name:"bbb",address:"444",time:"12/5"}];
         let $contractShow = [];
         let $contractShow01 = [];
         each(showData,function(item,i) {
            console.log("................",item);
            $contractShow.push(<ServiceList key={i}  item={showData[i]}/>);
        })
        each(showData01,function(item,i) {
            console.log("................",item);
            $contractShow01.push(<ServiceList key={i}  item={showData01[i]}/>);
        })
        return (
            <div className="main">
                <ServiceSearch/>
                <TabsControl>
                    <div name="待处理" value="6">
                        <Scroll>
                            {$contractShow}
                        </Scroll>
                    </div>
                    <div name="已完成" value="5">
                        <Scroll>{$contractShow01}</Scroll>
                    </div>
                </TabsControl>
            </div>
        );
    }
}

module.exports = Service