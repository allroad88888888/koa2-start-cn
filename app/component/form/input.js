'use strict'
import * as React from 'react';
import * as _ from "lodash";

require("./input.scss");

/*input插件*/
class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          value: props.value
        };
    }
    componentWillMount() {
    }
    componentWillReceiveProps (nextProps) {
        let value = nextProps.value;
        if (value !== this.props.value && value !== this.state.value) {
          this.setState({ value });
        }
      }
    onChange(){
        this.props.onChange&&this.props.onChange(this.props.name,this.state.value,this.props.formKey);
    }
    handleTrigger(event) {
        let value = event.target.value.substr(0, 140);
        //this.value = value.replace(/(^\s*)|(\s*$)/g, "");
        this.setState({
            value:value
        })

    }
    handleBlur() {
        this.onChange(this.props.name,this.state.value,this.props.formKey);
    }
   /* handleFocus() {
        this.props.handleFocus && this.props.handleFocus(this.value);
    }*/
    render() {
        const props = this.props;
        const {max,min,placeholder,type, trigger,value,subTitle,disabled} = this.props;
        const newProps = {
            type: type === 'password' ? 'password' : 'text',
            className:"input input-normal" ,
            onChange:this.handleTrigger.bind(this),
            onBlur:this.handleBlur.bind(this),
            max,min,placeholder,
            value:this.state.value,
            disabled
        };
        //this.value = value;
        let sub;
        if(subTitle){
            sub = (<span className="form-input-rignt">{subTitle}</span>)
        }
        return (
            <div className="virtual-input">
                <input   {...newProps}  />{sub}
            </div>
        )
    }
};

Input.defaultProps = {
    type: 'INPUT'
}

module.exports = Input;


