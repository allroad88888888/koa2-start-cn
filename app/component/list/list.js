/**
 * Created by zylee on 2016/11/16.
 */
import React, { Component, PropTypes } from 'react';
import map from "lodash/map";
import isPlainObject from "lodash/isPlainObject"
require("./list.scss");

import Layer from "../layer/layer.js"
class List extends Component{
    constructor(props){
        super(props);
        this.handleClick=this.handleClick.bind(this);
        this.state={
            layerContent:'',
        }
    }

    handleClick(data){
        //event.stopPropagation()
        //event.preventBubble()
        //var layerCon=event.target.innerHTML

        if(data.item.isEdit){
            console.log(data);

            this.props.onChange(data)
        }



    }

    render(){
        let {dataList,isEdit}=this.props;
        let _this=this
        return (
            <ul className="list-group">

                {map(dataList,function (item,i) {

                    return(
                        <li key={i} className="list-group-item"  onClick={_this.handleClick.bind(this,{item})}>
                            <span>{item.key}</span>
                            <span>{item.value}</span>
                        </li>
                    )
                })
                }
            </ul>
        )
    }
}

List.defaultProps = {
    isEdit:false    //是否可编辑
};

module.exports = List;