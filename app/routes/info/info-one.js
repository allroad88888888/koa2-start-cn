import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

//var css = require("./list.scss");

import * as action from "./../action/listAction.js";

require("./info-one.scss");

class InfoOne extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        
        let {title} = this.props;
        let star = "star "+(this.props.isStar?"":"star-none");
        let children;
        if(Array.isArray(this.props.children)){
            children = this.props.children.map( (o, i)=>{
                return React.cloneElement(o);
            })
        }else if(this.props.children){
            children = React.cloneElement(this.props.children);
        }
        return (
            <div className="info-one">
                <div className="info-one-header"><label>{title}</label><span className={star}>*</span></div>
                <div className="info-one-footer">{children}</div>
            </div>
        );
    }
}

InfoOne.defaultProps={
    title:"神说这里要有一个值",
    isStar:false,//是否有星星
}



module.exports = InfoOne

