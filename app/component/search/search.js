import React, { Component, PropTypes } from 'react';

import Icon from "./../base/icon.js";
import Button from "./../base/button.js";

require("./search.scss")

class Search extends React.Component {
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
            className:"",
        };

        return (
            <div className="contait-search">
                <input {...inputProps} />
                <Button title="" handClick={this.handClick} type="input-search"><Icon classParent={"icon icon-serach"} classChildren={"content_icon_search"}/></Button>
            </div>
        )
    }
}

Search.defaultProps = {
    placeholder:"搜索",
    disabled:false,
    value:""
}


module.exports = Search;