'use strict'
import React,{Component} from 'react';

import Scroll from "./../../scroll/scroll";

import isEqual from "lodash/isEqual";

import "./select-list.scss";

//console.log("啊哈 ",Scroll)

class SelectList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          value: false
        };
    }
    componentWillMount(){
        this.initValue(this.props);
        console.error("渲染一次")
    }
    componentWillReceiveProps(nextProps){
        if(this.props.defaultValue!==nextProps.defaultValue&&nextProps.defaultValue!==false){
            this.initValue(nextProps);
        }
        
    }
    shouldComponentUpdate(nextProps, nextState){
        if(isEqual(nextProps,this.props)&&isEqual(nextState,this.state)){
            return false;
        }
      /*  console.error("555555555555",nextState);
        console.error("555555555555",this.props);*/
        return true;
    }
    initValue(props){
        //console.log("Select  接受值为:",props);
        if(props.defaultValue){
            /*this.setState({
                value:props.defaultValue
            })*/
            this.handleClick(nextProps.defaultValue,nextProps.index);
        }
    }

  handleClick(name,item,showName,e) {
      this.props.handleClick&&this.props.handleClick(name,item,showName);
      this.setState({
            value:item
      })
      e&&e.stopPropagation();
  }
  render() {
    let {dataShow,dataKey,items,width,index,name} = this.props;

    console.log("啊哈，",index);
    let {value} = this.state;
    //console.log("dataKey",items);

    var clean = (<li onClick={this.handleClick.bind(this,name,false,"")}>{(!items||items.length<1)?(this.props.defaultShow || "无"):"清空"}</li>),
        list = [];
    let isArray = _.isArray(items);
    _.each(items, function(item, i) {
        let showName = isArray == false ? item : item[dataShow];
        let one = isArray == false ? (function(){
            let result=  {};
            result[dataKey] = i;
            result[dataShow] = name;
            return result;
        }.bind(i))() : item;
        /*console.log("select循环",item);
        console.log("select循环",selectItem);*/
        list.push(<li key={i} className={item[dataKey]===value[dataKey]?"select":"select-no"} onClick={this.handleClick.bind(this,name,one,showName)}>{showName}</li>);
    }.bind(this));


    return (
        <div className="drop-up-one" style={{width:width}}>
            <ul className="">{clean}{list.length===0?undefined:list}</ul>
        </div>
    )
  }
};

/*
<Scroll className="drop-container" isUl={true} >{clean}{list.length===0?undefined:list}</Scroll>
 */

SelectList.defaultProps = {
    dataKey: "id",
    dataShow:"name",
    defaultValue:false,
    placeholder:"请选择",
    width:"100%"
}

module.exports = SelectList;