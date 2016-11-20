'use strict'
import * as React from 'react';
/*input插件*/
class Icon extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
       // let css = "btn "+BTN_CSS[this.props.type];
        return (
          <span className={this.props.classParent}>
            <svg className={this.props.classParent}>
                <use  xlinkHref= {'#'+this.props.classChildren}></use>
            </svg>
          </span>
        )
    }
};
module.exports = Icon;
