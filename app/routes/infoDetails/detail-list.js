import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

//var css = require("./list.scss");

import * as action from "./../action/listAction.js";

var InfoOne = require("./../info/info-one.js");
import each from "lodash/each";
import map from "lodash/map";
import Pannel from "./../../component/pannel/pannel.js";
class DetailList extends Component {
    constructor(props) {
        super(props);
    }
    /*   render() {
     var list = [];
     const {showData} = this.props;
     const items = (_.isArray(showData)||_.isObject(showData))?showData:[];
     if(items||items.length>0){
     each(items, function(item, i) {
     list.push(<li className="pannel" key={i}><InfoOne title={item.title}><span className="info-one-footer-font">{item.value}</span></InfoOne></li>);
     }.bind(this));
     }
     return(
     <ul className="contair-info-ul">{list}</ul>
     );
     }*/
    render(){
        const {showData} = this.props;
        return(
            <div className="container-detail">
                {map(showData,(item,index)=>{
                    return (
                        <Pannel key={index}  dataList={item.dataList} title={item.title}/>
                    )
                })
                }
            </div>
        )


    }
}

DetailList.defaultProps={
    items:[{
        title:"神说这里要有一个值",
        value:"神说这里要有一个值"
    }]
}
module.exports = DetailList

