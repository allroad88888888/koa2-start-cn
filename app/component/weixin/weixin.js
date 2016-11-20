import React, {Component, PropTypes} from 'react';
import * as ReactDOM from 'react-dom';
import {connect} from 'react-redux';

//import * as action from "./weixinAction";

class Weixin extends Component {
     constructor(props) {
        super(props);
        this.state={
            weixin:false
        }
        this.config = this.config.bind(this);

    }
    componentWillMount(){
        //let {dispatch,weixin,configList,callBack} = this.props;
       // this.config();
    }
    componentWillReceiveProps(nextProps){
        this.config(nextProps);
    }
    config(nextProps){
        let _this = this;
        let {debug,appId,timestamp,nonceStr,signature,jsApiList} = nextProps;

        //console.info("加载 微信信息  ",appId)

        if(this.state.weixin!==false||appId===""){
            return false;
        }
        require.ensure([], () => {
             /*if(_this.state.weixin!==false){
                    return false;
                }*/
              var wx = require("./jweixin-1.0.0.js");
              wx.config({
                    debug: debug, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                    appId: appId, // 必填，公众号的唯一标识
                    timestamp:timestamp, // 必填，生成签名的时间戳
                    nonceStr:nonceStr, // 必填，生成签名的随机串
                    signature: signature,// 必填，签名，见附录1
                    jsApiList: jsApiList // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
                });
                console.info("加载 微信信息  ",wx)
                wx.ready(function(){
                    console.error("加载 微信信息  ")
                    _this.setState({
                        weixin:wx
                    })
                    // config信息验证后会执行ready方法，所有接口调用都必须在config接口获得结果之后，config是一个客户端的异步操作，所以如果需要在页面加载时就调用相关接口，则须把相关接口放在ready函数中调用来确保正确执行。对于用户触发时才调用的接口，则可以直接调用，不需要放在ready函数中。
                });
                wx.error(function(res){
                    // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。

                });
            }
              //dispatch(action.loadWeiXinConfig(wx,weixin,configList));
        )
    }
    render() {
        return React.cloneElement(React.Children.only(this.props.children), {
            weixin: this.state.weixin
        });
    }
}

Weixin.defaultProps={
    debug:false,
    appId: "", // 必填，公众号的唯一标识
    timestamp:"", // 必填，生成签名的时间戳
    nonceStr:"", // 必填，生成签名的随机串
    signature: "",// 必填，签名，见附录1
    jsApiList: ["chooseImage", "previewImage", "uploadImage", "downloadImage"]

}


module.exports = Weixin;
