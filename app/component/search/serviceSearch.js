import React, { Component, PropTypes } from 'react';

import Icon from "./../base/icon.js";
import Button from "./../base/button.js";

require("./serviceSearch.scss");

class ServiceSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          value: props.value
        };

        this.onChange = this.onChange.bind(this);
        this.handClick = this.handClick.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
       // this.cancelClick = this.cancelClick.bind(this);
    }
    onChange(event) {
        let value = event.target.value.substr(0, 140);
        this.setState({
            value:value
        })
    }
    handleBlur() {
        this.props.onChange&&this.props.onChange(this.props.name,this.state.value,this.props.formKey);
    }
    /*handClick(){
        this.props.cancelClick&&this.props.cancelClick();

        this.setState({
            value:""
        });
        this.handleBlur();
    }*/
    handClick(){
        this.props.handClick&&this.props.handClick();
    }
    render() {
        let {placeholder,value,disabled} = this.props;
        let inputProps = {
            type:"text",
            value:value||this.state.value,
            disabled,
            placeholder,
            onChange:this.onChange,
            onBlur:this.handleBlur,
            className:"head-search-input",
        };
        return (
            <div className="service-head">
                <div className="head-return"><Icon classParent={"icon icon-return"} classChildren={"top_icon_return"}/></div>
                <div className="head-search"><Icon classParent={"icon icon-search"} classChildren={"content_icon_search"}/><input {...inputProps} /></div>
                <div className="head-btn"><Button title="确定" type="normal"/></div>
            </div>
        )
    }
}

ServiceSearch.defaultProps = {
    placeholder:"搜索",
    disabled:false,
    value:""
}


module.exports = ServiceSearch;