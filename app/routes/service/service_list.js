import React, { Component, PropTypes } from 'react';
import {Link} from 'react-router';


require("./service_list.scss");

class ServiceList extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        //console.log("啊哈",this.props.item)
        let {
            address,
            name,
            time
        } = this.props.item;

        return (
            <div className="service-list" >
               <div className="list-row">
                    <p>
                        <span className="list-new">new</span>
                        <span>{name}</span>
                    </p>
                    <p className="list-name">维修</p>
                </div>
                <div className="list-content">
                    <p className="list-address-nowrap">地址：{address}</p>
                    <p>派单时间：{time}</p>
                </div>
            </div>
        )
    }
}
module.exports = ServiceList;