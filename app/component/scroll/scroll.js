import React, { Component, PropTypes } from 'react';
import * as ReactDOM from 'react-dom';

import Loading from "./../base/loading.js";

import isEqual from "lodash/isEqual";

/*import Icon from "./../base/icon.js";
import Button from "./../base/button.js";*/

require("./scroll.scss")

class Scroll extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          value: props.value,
          isShowLoad:true
        };

        this.scrollInit = this.scrollInit.bind(this);
        this.scrollEnd = this.scrollEnd.bind(this);
        this.upFn = this.upFn.bind(this);
        //this.handleBlur = this.handleBlur.bind(this);
    }
    componentWillMount(){
        let _this = this;
        _this.IScroll = false;
        require.ensure([], () => {
           _this.IScroll = require("./iscroll-lite.js");
        })

        console.error(this);
    }
    closeLoading(){

    }
    componentWillReceiveProps(nextProps){

        /*if(nextProps.isShowLoad!==undefined&&nextProps.isShowLoad!==this.state.isShowLoad){
            this.setState({
                isShowLoad:nextProps.isShowLoad
            })
        }*/
    }
    componentDidUpdate(prevProps,prevState){
      /*  console.log("prevState.isShowLoad",prevProps.children)

        console.log("prevState.isShowLoad",this.props.children)*/
        if(!isEqual(prevProps.children,this.props.children)||prevProps.height!==this.props.height){
            this.scrollInit();
            //console.error("你们居然 相等")
        }


       /* if(this.IScroll&&prevState.isShowLoad!==this.state.isShowLoad){
            console.error("掉用这里？",this)

            //this.scrollInit();
        }*/
    }
    componentDidMount(){
        let _this = this;
        if(_this.IScroll){
            _this.scrollInit()
        }else{
            require.ensure([], () => {
               _this.IScroll = require("./iscroll-lite.js");
               _this.scrollInit();
            })
        }

        let scrollDom = ReactDOM.findDOMNode(this.refs["scroll-temp"]);
        console.log("滚动",scrollDom.offsetHeight);//offsetTop
       // dom.style["maxHeight"] = Number(window.innerHeight-dom.offsetTop)+"px";

        /*scroll-temp*/
    }
    /*scroll(){

    }*/
    /*componentDidUpdate(){
        this.scrollInit()
    }*/
    scrollInit(){
        let {$scroll,scrollEnd,IScroll} = this;
        let {height} = this.props;
        
        if(!this.IScroll){
            return false;
        }
        if ($scroll) {
            $scroll.refresh();
        } else {
            let dom = ReactDOM.findDOMNode(this.refs.iscroll);
            console.log("滚动",dom);//offsetTop
            dom.style["maxHeight"] = (height?height:Number(window.innerHeight-dom.offsetTop))+"px";
            //React.findDOMNode(this.refs.iscroll)
            $scroll = new IScroll(ReactDOM.findDOMNode(this.refs.iscroll), {
                tap: false,
                disableMouse: true,
                disablePointer: true,
                scrollbars:"true",
                shrinkScrollbars:"scale",
                preventDefaultException: {tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT|A)$/}
                //probeType: 2,
                //bounce:false
            });
            //$scroll.on('scroll', positionJudge);
            $scroll.on("scrollEnd", scrollEnd);
            this.$scroll = $scroll;
        }

    }
    scrollEnd(e){
        let {$scroll} = this;
        let _this = $scroll
       /* //console.log("啊哈  娘子",this)
        //console.log("啊哈  娘子",e);*/

        if(_this.y <=_this.maxScrollY){
            this.upFn();
        }
        //this.props
    }
    upFn(argument) {
         let {upFn} = this.props;
         upFn&&upFn();
         //console.info("上拉 加载",this)
        // body...
    }
    render() {
        //let {isShowLoad} = this.state;
        let {scrollInit,closeLoading,$scroll} = this;
        let {className,isShowLoad,isUl} = this.props;
        let children;

        //console.log("sddssss",this.props)
/*
        if(Array.isArray(this.props.children)){
            children = this.props.children.map( (o, i)=>{
                if(o){
                    return React.cloneElement(o,{key:i});
                }
            })
        }else if(this.props.children){
            children = React.cloneElement(this.props.children,{scrollRefresh:scrollInit,closeLoading:closeLoading,$scroll:$scroll});
            //console.log(".....")
        }*/

        //let {children} = this.props;
        /*let children = Array.isArray(this.props.children)?(this.props.children.map( (o, i)=>{
            return React.cloneElement(o);
        }))||(this.props.children);*/
       // //console.log(this.props.children)
        return (
            <div className={"contait-scroll "+className} ref="iscroll">
                {(()=>{
                    if(isUl){
                        return (
                             <ul className="scroll-temp" ref="scroll-temp">
                                {this.props.children}
                                {isShowLoad&&(<Loading/>)}
                            </ul>
                        )
                    }else{
                        return(
                            <div className="scroll-temp" ref="scroll-temp">
                                {this.props.children}
                                {isShowLoad&&(<Loading/>)}
                            </div>
                        )
                    }

                })()}
                
            </div>
        )
    }
}
/*
React.cloneElement(
  element,
  [props],
  [...children]
)
{React.cloneElement(this.props.children||<div/>)}

{this.props.children}
 */
Scroll.defaultProps = {
    className:"",
    height:false,
    isShowLoad:false,
    isUl:false
}


module.exports = Scroll;