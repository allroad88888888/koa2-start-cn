'use strict'
import * as React from 'react';

import isString from "lodash/isString";
import isArray from "lodash/isArray";
import isObject from "lodash/isObject";
import each from "lodash/each";


require("./select.scss");


import SelectSpan from "./select/select-span.js";
import SelectList from "./select/select-list.js";

/* 单选 */
class Select extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            value:"",
            isShow:false,
            isFirstClick:true,
        }
        this.isShowClick = this.isShowClick.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.initValue = this.initValue.bind(this);
        this.onChange = this.onChange.bind(this);
    }
    showName(item){
        return item&&item[this.props.dataShow]||false;
    }
    componentWillMount(){
        this.initValue(this.props);
    }
    componentWillReceiveProps(nextProps){
        if(this.props.defaultValue!==nextProps.defaultValue&&nextProps.defaultValue!==false){
            this.initValue(nextProps);
        }
    }
    initValue(props){
        //console.log("Select  接受值为:",props);
        if(props.defaultValue&&!_.isString(props.defaultValue)){
            this.setState({
                showValue:this.showName(props.defaultValue),
                value:props.defaultValue
            })
        }
    }
    onChange(name,item) {
       this.props.onChange&&this.props.onChange(name,item)
    }
    isShowClick(){
        //判断是否是第一次点击
        this.state.isFirstClick&&this.props.firstClick&&this.props.firstClick()
        this.setState({
            isShow:!this.state.isShow,
            isFirstClick:false
        })
        //console.log("显示  隐藏")
    }
    handleBlur(){
        console.log("出发select")
        this.setState({
            isShow:false
        })
    }
    handleClick(name,item,showName){

        /*name,item,showName*/
        this.setState({
            showValue:showName,
            isShow:false,
            //value:item
        })
        this.onChange(name,item);
    }
    render() {

        const {dataKey,showData,placeholder,value,dataShow,defaultValue} = this.props;
        const items = (_.isArray(showData)||_.isObject(showData))?showData:[];

        let propsIn = {
            placeholder:placeholder,
            value:this.state.showValue,
        }

        let propsLis = {
            isShow:this.state.isShow,
            handleClick:this.handleClick,
            defaultValue,
            /*selectItem:this.state.value,*/
            items,
            dataShow,
            dataKey,
            defaultShow:"没有查询到数据"
        }
        /*virtual-drop-down virtual-drop-up*/
        let classAll = "virtual-drop-down "+(this.state.isShow?"virtual-drop-up":"");

        return (
            <div onMouseLeave={this.handleBlur} className={classAll} onClick={this.isShowClick}>
                <SelectSpan {...propsIn} />
                <div className="drop-up">
                    <div className="virtual-list">
                    <SelectList  {...propsLis} />
                    </div>
                </div>
            </div>
        )
    }
};


Select.defaultProps = {
    dataKey: "id",
    dataShow:"name",
    defaultValue:false,
    placeholder:"请选择"
}
module.exports = Select;


/*var Lis = React.createClass({
  handleClick: function(item, e) {
      this.props.handleClick&&this.props.handleClick(item);
      e.stopPropagation();

  },
  render: function() {
    let {dataShow,dataKey,items,selectItem} = this.props;
    console.log("dataKey",items);
    if (!items||items.length<1) {
        return (
        <div className="drop-up drop-block">
            <ul className="drop-container">
                <li>{this.props.defaultShow || "无"}</li>
            </ul>
          </div>
        )
    }
    var a = (<li onClick={this.handleClick.bind(this,false)}>清空</li>),
        list = [];
    let isArray = _.isArray(items);
    each(items, function(item, i) {
        let name = isArray == false ? item : item[dataShow];
        let one = isArray == false ? (function(){
            let result=  {};
            result[dataKey] = i;
            result[dataShow] = name;
            return result;
        }.bind(i))() : item;
        list.push(<li key={i} className={item[dataKey]===selectItem[dataKey]?"select":"select-no"} onClick={this.handleClick.bind(this,one)}>{name}</li>);
    }.bind(this));


    return (
        <div className="drop-up">
            <ul className="drop-container">
                {a}{list}
            </ul>
        </div>
    )
  }

});*/