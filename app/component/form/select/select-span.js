'use strict'
import * as React from 'react';

import Icon from './../../base/icon';

/* 单选 */
class SelectSpan extends React.Component {
    constructor(props) {
        super(props);
       /* this.state={
            value:"",
        }*/
    }
    render() {
        const {placeholder,value} = this.props;
        let inProps = {
            //placeholder:placeholder,
            //value:value,
            className:"drop-title",
            //type:"text",
            //disabled:"disabled"
        }
        //console.log("value",value)
        return (
            <div className="can-edit">
                <span {...inProps}>{(value===undefined||value===false||value==="")?placeholder:value}</span>
                {/*<input {...inProps} />*/}
                <Icon classParent="icon icon-right" classChildren="icon_right"/>
            </div>
        )
    }
};

SelectSpan.defaultProps ={
     dataKey: "id",
    dataShow:"name",
}

module.exports = SelectSpan;
