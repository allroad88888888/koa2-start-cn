import React, { Component, PropTypes } from 'react';


import Loading from "./../../component/base/loading.js";
import AlloyFinger from "./../finger/finger.js";



require("./up-button.scss");
/*
upButton  上传按钮  (Number type,  Boolean multiple )
      备注：分为三个状态

- 触发上传状态    触发上传

- 上传进度 loading

- 上传完毕 ，显示缩略图，显示删除图片事件/替换事
 */

class UpButton extends Component {
    constructor(props) {
        super(props);
        this.handClick = this.handClick.bind(this);
        this.handTap = this.handTap.bind(this);
        this.handSwipe = this.handSwipe.bind(this);
    }
    //初始化 调用
    componentWillMount() {

    }
    handClick(e){
        console.log("onclick",e)
    }
    handTap(e){
        let {index} = this.props;
        //console.log("tap",this.props);
        this.props.onHandTap&&this.props.onHandTap(e,index);
    }
    handSwipe(e){
        let {index} = this.props;
       
        this.props.onHandSwipe&&this.props.onHandSwipe(e,index);
    }
    render() {

        let {src,index,loading} = this.props;
        /*let style=src?{
            "backgroundImage":"url("+src+")"
        }:false;*/

        return (
            <AlloyFinger onTap={this.handTap} onSwipe={this.handSwipe} >
                <div className="up-btn" >
                    {(()=>{
                        if(loading){
                            return (<Loading/>)
                        }
                        if(src){
                            return (<img src={src} />);
                        }
                    })()}
                </div>
            </AlloyFinger>
        );
    }
}
/*onClick={this.handClick} onTouchTap={this.handTap} data-index={index}*/
UpButton.defaultProps={
    src:false,
    index:false,
    loading:false
}


module.exports = UpButton