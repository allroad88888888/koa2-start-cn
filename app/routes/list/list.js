import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

//var css = require("./list.scss");

import Search from "./../../component/search/search.js";
import Scroll from "./../../component/scroll/scroll.js";
import Swipe from "./../../component/swipe/swipe.js";
import Loading from "./../../component/base/loading.js";
import Weixin from "./../../component/weixin/weixin.js";
import * as action from "./../action/listAction.js";
import Contract from "./contract";

require("./contract.scss");

class List extends Component {
    constructor(props) {
        super(props);
        this.setValue = this.setValue.bind(this);
        this.search = this.search.bind(this);
        this.upFn = this.upFn.bind(this);
        /*this.state = {
            isShowLoad:true
        }*/
    }
    //初始化 调用
    componentWillMount() {
        let { dispatch, xuzuSearch } = this.props;
        dispatch(action.xuzuSearchInit()); //设置查询配置
        dispatch(action.xuzuSearch());  //调用查询
    }
    //动作  设置查询值
    setValue(name, value) {
        let { dispatch, xuzuSearch } = this.props;
        dispatch(action.xuzuSearchSetValue(name, value)); //设置查询值
    }
    //点击搜索按钮
    search() {
        let { dispatch, xuzuSearch } = this.props;
        dispatch(action.xuzuSearch(false));  //调用查询按钮
    }
    //下拉加载
    upFn(){
        let { dispatch, xuzuSearch,list } = this.props;
        list.isFetching||(list.result.result.length>=10&&dispatch(action.xuzuSearch(true,this.props.xuzu.page)));
    }
    //界面显示
    render() {
        let searchProps = {
            onChange:this.setValue,
            handClick:this.search
        },
        $contractShow = [],{xuzu,list,search,swipeProps} = this.props;
        let isShowLoad = list&&list.result&&list.result.result&&list.result.result.length<10?false:true;
        return (
            <div className="main">
            	<Search {...search&&search.filds&&search.filds.query} {...searchProps} />
                {(()=>{
                    if(!xuzu.showData){
                        return (<Loading />);
                    }else{
                        for(let i=0;i<xuzu.showData.length;i++){
                            $contractShow.push(<Contract key={i}  item={xuzu.data[xuzu.showData[i]]}/>);
                        }
                        return (
                            <Scroll upFn={this.upFn} isShowLoad={isShowLoad}>
                                <Swipe {...swipeProps}>
                                    {$contractShow}
                                </Swipe>
                            </Scroll>
                        )
                    }
                })()}
            </div>
        );
    }
}

List.defaultProps={
    swipeProps:{
                min:-60,
                max:0,
                step:60,
                findScroller:".list-content-left",
                findDis:".list-content-position"
            }
}

    function mapStateToProps(state) {
        return {
            search:state.search&&state.search.xuzuSearch,
            list:state.featch&&state.featch.xuzuSearch,
            xuzu:state.xuzu
        };
    }


    module.exports = connect(mapStateToProps)(List)