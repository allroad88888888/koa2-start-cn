'use strict'
import * as React from 'react';

const BTN_CSS={
    "normal":"btn-success",/*顶部搜索 确定按钮 */
    "form":"btn-icon icon-edi",
    "table":"btn-table",
    "warn-add":"btn-warn-add",
    "input-search":"btn-search",/*橙色移动端搜索按钮*/
    "submit":"btn-submit"/*下一步提交按钮*/
}


/*input插件*/
class Button extends React.Component {
    constructor(props) {
        super(props);
        this.handClick = this.handClick.bind(this);
    }
    handClick () {
        this.props.disabled===false&&this.props.handClick&&this.props.handClick();
    }
    render() {
        let css = "btn "+BTN_CSS[this.props.type];
        let {disabled} = this.props;

        let newProps = {
            onClick:this.handClick,
            className:css,
            disabled:disabled
        }

        return (
            <button {...newProps}>
                {this.props.children}{this.props.title}
            </button>
        )
    }
};




Button.defaultProps={
    type:"normal",
    disabled:false
}
/*
btn-add
 */

module.exports =  Button ;