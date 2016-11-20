'use strict'
import * as React from 'react';

import isString from "lodash/isString";
import isArray from "lodash/isArray";
import isObject from "lodash/isObject";
import each from "lodash/each";
import assignIn from "lodash/assignIn";

import isEqual from "lodash/isEqual";

import Icon from '../base/icon';


import SelectSpan from "./select/select-span.js";
import SelectList from "./select/select-list.js";


import"./select.scss";
/* 单选 */
class SelectMany extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            isShow:false,
            isFirstClick:true,
            names:props.name.split(","),
            value:{},
            showName:{}
        }
        this.isShowClick = this.isShowClick.bind(this);
        //this.handleBlur = this.handleBlur.bind(this);
        this.handleClick = this.handleClick.bind(this);
        //this.initValue = this.initValue.bind(this);
        this.onChange = this.onChange.bind(this);
        this.close = this.close.bind(this);

        this.getShowName = this.getShowName.bind(this);
    }

    shouldComponentUpdate(nextProps, nextState){
        if(isEqual(nextProps,this.props)&&isEqual(nextState,this.state)){
            return false;
        }
        console.error("555555555555",nextState);
        console.error("555555555555",this.props);
        return true;
    }
    onChange(name,item) {
       this.props.onChange&&this.props.onChange(name,item);
       console.log("设置值为",name,item);
    }
    isShowClick(){
        //判断是否是第一次点击
        this.state.isFirstClick&&this.props.firstClick&&this.props.firstClick()
        this.setState({
            isShow:true,
            isFirstClick:false
        })
        console.log("显示  隐藏")
    }
   /* handleBlur(){
        console.log("出发select")
        this.setState({
            isShow:false
        })
    }*/
    handleClick(name,item,showName){

        let addValue = {},addShowName={};
        addValue[name] = item;
        addShowName[name] = showName;

        console.log("啊哈  娘子",showName)


        this.setState({
            //showValue:this.showName(item),
            //isShow:false,
            value:assignIn(this.state.value,addValue),
            showName:assignIn(this.state.showName,addShowName)
            //value:item
        })

        this.onChange(name,item);
    }
    close(e){
        console.error("guanbi  ");
        this.setState({
             isShow:false
        })
        e&&e.stopPropagation();
    }

    getShowName(){
         let {names,showName} = this.state,result="";

         let {geduan} = this.props;
        for(let i=0;i<names.length;i++){
            result+= showName[names[i]]?(showName[names[i]]+""+(i===names.length-1?"":geduan)):"";
        }
        //result = result.replace(result,geduan)
        console.log("显示的 为",result);
        return result;
    }

    render() {

        const {dataKey,showManyData,placeholder,value,dataShow,defaultValue} = this.props;
        const items = (_.isArray(showManyData)||_.isObject(showManyData))?showManyData:[];

         let propsLis = {
            /*isShow:this.state.isShow,*/
            handleClick:this.handleClick,
            items,
            dataShow,
            dataKey,
            defaultShow:"没有查询到数据"
        }

        let defaultValues = defaultValue?defaultValue.split(","):[];

        let $shows=[];
         console.log("................",items);
        let width = 100/(items.length)+"%";

        let {names} = this.state;
       
        each(items,function(item,i) {
            console.log("................",item);
            propsLis = assignIn({},propsLis,{items:item,width:width,defaultValue:defaultValues[i],name:names[i]});
            // console.log("啊哈  尼玛币",propsLis)
            $shows.push(<SelectList key={i} {...propsLis} />)
        })

        let propsIn = {
            placeholder:placeholder,
            value:this.getShowName()
        }

        /*virtual-drop-down virtual-drop-up*/
        let classAll = "virtual-drop-down "+(this.state.isShow?"virtual-drop-up":"");
        /*onMouseLeave={this.handleBlur}*/
        return (
            <div  className={classAll} onClick={this.isShowClick}>
                <SelectSpan {...propsIn} />
                <div className="drop-up">
                    <div className="virtual-list">
                        
                        {/*<div className="drop-todo"><Icon onClick={this.close} classParent={"icon icon-close"} classChildren={"svg-top_icon_cancel-icon"}/></div>*/}
                        {$shows}
                        <div className="drop-todo"><span onClick={this.close}>确定</span></div>
                    </div>
                </div>
            </div>
        )
    }
};

SelectMany.defaultProps = {
    dataKey: "id",
    dataShow:"name",
    defaultValue:false,
    placeholder:"请选择",
    geduan:",",
}


module.exports = SelectMany;