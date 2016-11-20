import React, { Component, PropTypes } from 'react';
import {Link} from 'react-router';

import Icon from "./../../component/base/icon.js";
/*import Button from "./../base/button.js";*/

require("./contract.scss");


class Contract extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        //console.log("啊哈",this.props.item)
        let {
            address,
            startDate,
            endDate,
            gender,
            id,
            isRenewal,
            name,
            phone
        } = this.props.item;


        return (
            <div className="container-list" >
                <Link to={`/detail/${id}`}>
                <div className="list-top">

                    <p className="list-new">
                        <span className="mar-right">{name}</span>
                        <span>{gender==1?"男":"女"}</span>
                    </p>
                    <p>正常合同</p>

                </div>
                </Link>
                <div className="list-content">
                    <div className="list-content-left">
                        <p className="list-address-nowrap">物业地址:{address}</p>
                        <p>合同期限:{startDate+"-"+endDate}</p>
                    </div>
                    <div className="list-content-position">
                        <p><a href={"tel:"+phone}></a><Icon classParent={"icon icon-telephone"} classChildren={"ts_icon_phone"}/></p>
                      {/*  <p onClick={() => this.history.pushState(null, '/details')}><Icon classParent={"icon icon-telephone"} classChildren={"icon_handle"}/></p>*/}
                      <p><Link to={`/detail/${id}`}></Link><Icon classParent={"icon icon-telephone"} classChildren={"icon_handle"}/></p>
                    </div>
                </div>
            </div>
        )
    }
}
Contract.defaultProps = {
    address:"",
    startDate:"",
    endDate:"",
    gender:"",
    id:"",
    isRenewal:"",
    name:"",
    phone:""
}
module.exports = Contract;