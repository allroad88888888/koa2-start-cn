import React, { Component, PropTypes } from 'react';

import 'whatwg-fetch' ;
import UpButton from "./up-button";
import concat from "lodash/concat";

import each from "lodash/each";
import assign from "lodash/assign";
import size from "lodash/size";

import AlloyFinger from "./../finger/finger.js";
/*
Up  上传
        localIds  记录所有上传的 图片的ids
        localIdm  
 */

require("./up-weixin.scss");

class UpWeiXin extends Component {
    constructor(props) {
        //if(props.multiple)
        super(props);
        this.chooseImage = this.chooseImage.bind(this);

        this.state={
            localIds:[], //微信本地 is "sss","ss","s","s"
            showIds:[], //0,1,3
            localIdm: {
               /* 0: {
                    src: "http://7qn8hl.com1.z0.glb.clouddn.com/20150624/7d47e424dffbbab77f66b5e38f72282b74029462.jpg?imageMogr2/interlace/1/thumbnail/160x90!"
                },
                1: {
                    src: "http://7qn8hl.com1.z0.glb.clouddn.com/20151123/3b655766d498cfcb51c47d2ac46259aa5654fff0.JPG?imageMogr2/interlace/1/thumbnail/160x90!"
                },
                2: {
                    src: "http://7qn8hl.com1.z0.glb.clouddn.com/20150902/fbc9cedb01397595d72d7f2bcd68fafd3c6f907d.JPG?imageMogr2/interlace/1/thumbnail/160x90!"
                },
                3: {
                    src: "http://7qn8hl.com1.z0.glb.clouddn.com/20160411/64e45eefaced929c1c036b6fb27ce16d66793133.JPG?imageMogr2/interlace/1/thumbnail/160x90!"
                }*/
            },
            serverIds:[],//微信服务端id
            serverIdm:{},
            qiniuIds:[],//七牛服务 id
            qiniuIdm:{},
            showM:{}, //本地显示 状态
            startIndex:0,
            isUp:true,
            a:""
        };

        this.chooseImage = this.chooseImage.bind(this);
        this.showImages = this.showImages.bind(this);
        
        this.upImage = this.upImage.bind(this);
        this.handTap = this.handTap.bind(this);
        this.handSwipe = this.handSwipe.bind(this);
        this.oneHandTap = this.oneHandTap.bind(this);


        this.delImages = this.delImages.bind(this);

        //this.upWeiXin = this.upWeiXin.bind(this);
        this.upQiniu = this.upQiniu.bind(this);
        this.onChange = this.onChange.bind(this);

    }
    //初始化 调用
    componentWillMount() {
       
    }
    //选择图片上传
    chooseImage(index){
        let {weixin,multiple,max} = this.props;

        let {showIds,isUp} = this.state;

        if(isUp===false){
            return false;
        }
        multiple = max-showIds.length;
        let _this = this;
        weixin&&weixin.chooseImage({
            count: 1, // 默认9
            sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
            sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
            success: function(res) {
                let newLocalIds = res.localIds;
                let {localIdm,startIndex,localIds} = assign(_this.state);

                let newShowIds = [];

                each(newLocalIds,function(one,index){
                    localIdm[localIds.length+index] = assign({},localIdm[startIndex+index],{src:one,loading:true});
                    newShowIds.push(Number(localIds.length+index));
                });

                let showIds = concat(_this.state.showIds,newShowIds);
                //localIdm
                _this.setState({
                    localIds:concat(localIds,newLocalIds),
                    startIndex:_this.state.startIndex+newLocalIds.length,
                    localIdm:localIdm,
                    showIds:showIds,
                    isUp:max<=showIds.length?false:true
                });
                //var localIds = res.localIds; // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
                //for(let i = 0;i<)
                console.error("------------------")
                _this.upImage(newLocalIds,newShowIds);

            },
            error:function(){
                console.error("------------")
            }
        });

    }
    //微信上传图片
    upImage(srcs,ids) {
        //window.pageLoading.showLoading();
        let {weixin,multiple,onChange} = this.props;
        let _this = this;
        //console.log("触发srcs", srcs,ids);
        weixin.uploadImage({
            localId: srcs[0], // 需要上传的图片的本地ID，由chooseImage接口获得
            isShowProgressTips: 0, // 默认为1，显示进度提示
            success: function(res) {
                var serverId = res.serverId; // 返回图片的服务器端ID
                _this.upQiniu(serverId,ids[0])
                //alert("5555",JSON.stringify(res))
            }
        });
    }
    upQiniu(serverId,index){



        let {upUrl,upParam} = this.props;
        let _this = this;
        upParam.mediaId = serverId;
        upUrl +="?"+this.toExcString(upParam)
        fetch(upUrl, {
            method: 'GET',
            credentials: 'same-origin',
        })
        .then((res) => {
            console.log(res.status);
            return res.json()
        })
        .then((data) => {
            console.log('收到data', data);

            let {localIdm,showIds} = assign({},this.state);
            localIdm[index].loading = false;
            localIdm[index].serverId = serverId;
            localIdm[index].qiniuId = data.result;
            _this.setState({
                localIdm
            })
             this.onChange(localIdm,showIds);
            console.error("状态为",serverId,index,localIdm)
            return false;
            //return dispatch(fetchSuccess(key, data));
        })
    }
    toExcString(array,type={":":"=",",":"&"}){
        let result ="";
        for(var temp in array){
            result+= temp+'='+array[temp]+"&"
        }
        return result.substring(-1,result.length-1);
    }
    showImages (index) {

        let {showIds,localIdm} = this.state;
        let {weixin} = this.props;
        console.log("当前显示图片的http链接",this.state.showIds[index]);

        let show=[];
        for(let i=0;i<size(showIds);i++){
            show.push(localIdm[showIds[i]].src);
        };
        console.log("需要预览的图片http链接列表",show);
        weixin&&weixin.previewImage({
            current: show[index], // 当前显示图片的http链接
            urls: show // 需要预览的图片http链接列表
        });
        /*let {weixin,multiple,max} = this.props;
        weixin.previewImage({
            current: current, // 当前显示图片的http链接
            urls: urls // 需要预览的图片http链接列表
        });*/
    }
    //删除图片
    delImages(index){
        let {showIds,localIdm} = this.state;
        showIds.splice(index,1);
        this.setState({
            showIds,
            isUp:true
        })
        this.onChange(localIdm,showIds);
        //splice
    }
    handTap(props){
        console.log(props);
        this.chooseImage();
    }
    handSwipe(evt,index){
        console.log("error",evt)
        console.log(evt.direction,index);
        if(evt.direction==="Down"){
            this.delImages(index)
        }
    }
    oneHandTap(evt,index){
        this.showImages(index);
    }
    onChange(localIdm,showIds){
        
        let result=[];
        for(let i=0;i<size(showIds);i++){
            result.push(localIdm[showIds[i]].qiniuId);
        };
        this.props.onChange&&this.props.onChange(this.props.name,result);
    }
    /*onClick={this.chooseImage}*/
    render() {
        let {localIdm,showIds} = this.state,$showBtn=[];

        for(let i=0;i<size(showIds);i++){
            //console.error(showIds)
            $showBtn.push(<UpButton key={i} {...localIdm[showIds[i]]} index={i}  onHandSwipe={this.handSwipe} onHandTap={this.oneHandTap} />);
        };

        return (
            //<AlloyFinger onSwipe={this.handSwipe}>
                <div className="contair-img" >{this.state.a}
                    {$showBtn}
                    <UpButton onHandTap={this.handTap}/>
                </div>
            //</AlloyFinger>
        );
    }
}

UpWeiXin.defaultProps={
    multiple:3,//一次上传多少张  
    weixin:false,
    max:3,  //这个组件 最多能上传多少张
    status:[
        {loading:false}
    ],
    upUrl:"/wxapi/",
    upParam:{_url:"/wechat/up2qn"},
    upType:"GET",
    name:"name"
}


module.exports = UpWeiXin