import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

//var css = require("./list.scss");


import Loading from "./../../component/base/loading.js";
import Weixin from "./../../component/weixin/weixin.js";
import * as action from "./../action/listAction.js";


import UpWeiXin from "./../../component/up/up-weixin.js";

//require("./contract.scss");

class UpImages extends Component {
    constructor(props) {
        super(props);
       /* this.setValue = this.setValue.bind(this);
        this.search = this.search.bind(this);
        this.upFn = this.upFn.bind(this);*/
        /*this.state = {
            isShowLoad:true
        }*/
    }
    //初始化 调用
    componentWillMount() {
        let { dispatch, weixinConfig } = this.props;
        weixinConfig||dispatch(action.loadWeiXinConfig());
        //loadWeiXinConfig
        //if()

    }
    //动作  设置查询值
    setValue(name, value) {
        console.error("name",name,value);
        //let { dispatch, xuzuSearch } = this.props;
    }
    render() {
        let {weixinConfig} = this.props;

        //console.error("weixinConfig",weixinConfig)

        return (
            <div className="main">
            	<Weixin {...weixinConfig} >
                    <UpWeiXin onChange={this.setValue}/>
                </Weixin>
            </div>
        );
    }
}

/*UpImages.PropTypes={

}
*/

function mapStateToProps(state) {
    return {
        list:state.featch,
        weixinConfig:state.featch&&state.featch.weixinConfig&&state.featch.weixinConfig.result&&state.featch.weixinConfig.result.result
    };
}


module.exports = connect(mapStateToProps)(UpImages)