/**
 * Created by zylee on 2016/11/15.
 */
import React, { Component, PropTypes } from 'react';
import map from "lodash/map";
import isPlainObject from "lodash/isPlainObject"
require("./pannel.scss");


class Pannel extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const {title,dataList,dataBody,dataFooter}=this.props;

        return(
            <div className="pannel">
                <div className="pannel-header">
                    {title}
                </div>
                {(()=>{
                    if(dataBody){
                        return (
                            <div className="pannel-body">
                                {dataBody}
                            </div>
                        )
                    }
                })()}

                <ul className="list-group">
                    {map(dataList,(item,index)=>{

                        if(isPlainObject(item)){
                            return(
                                <li className="list-group-item" key={index}>
                                    <span>{item.key}</span>
                                    <span>{item.value}</span>
                                </li>
                            );
                        }else {
                            return(
                                <li className="list-group-item" key={index}>
                                    {item}
                                </li>
                            );
                        }

                    })}
                </ul>
                {(()=>{
                    if(dataFooter){
                        return (
                            <div className="pannel-footer">
                                {dataFooter}
                            </div>
                        )
                    }
                })()}

            </div>
        );
    }


}

Pannel.propTypes = {
    title: React.PropTypes.string.isRequired,// 面板标题
    dataBody:React.PropTypes.string,         // 面板内容(可省略)
    dataList:React.PropTypes.array,          // 面板列表
    dataFooter:React.PropTypes.string,       // 面板底部(可省略)
};

Pannel.defaultProps = {
    title: 'Pannel header',
};

module.exports = Pannel;


/**
 *   引用组件 <Pannel  dataList={item.dataList} title={item.title} dataBody={item.dataBody} dataFooter={item.dataFooter}/>
 */
