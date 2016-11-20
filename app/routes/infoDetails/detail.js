import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import * as ReactDOM from 'react-dom';
import Scroll from "./../../component/scroll/scroll.js";
import Head from "./../../component/base/head";
import * as action from "./../action/detailAction.js";

var DetailList = require("./detail-list.js")
require("./detail.scss");

class Detail extends Component {
    constructor(props) {
        super(props);
         this.state = {
          height:""
        };
    }

    componentWillMount(){
        let {dispatch,xuzuDetail,params} = this.props;
        dispatch(action.getDetail('761116805147591680'))
    }
    componentDidMount(){

        let head = ReactDOM.findDOMNode(this.refs.head);
       // let foot = ReactDOM.findDOMNode(this.refs.foot);

         console.log("啊哈",Number(window.innerHeight-head.offsetHeight))

        this.setState({
            height:Number(window.innerHeight-head.offsetHeight)
        })


    }
    render() {

        let  {detail,params}=this.props;

        /*
        * 接口返回数据
        * */

        if(detail){
            let result=detail[`detail${'761116805147591680'}`];

            if(result&&!result.isFetching){

                console.group('detail')
                console.info(result.result.result,params.id,'dsssssssssssssssssssssssss')
                console.groupEnd()
            }
        }



        let items = [
            {
                title: "基本信息",
                dataList: [
                    {
                        key: '合同编号:',
                        value: 'CO-100569'
                    },
                    {
                        key: '客房编号:',
                        value: 'CO-100569'
                    },
                    {
                        key: '门店:',
                        value: '九亭'
                    },
                    {
                        key: '入住人数:',
                        value: '5'
                    },
                    {
                        key: '客房地址:',
                        value: '徐汇区徐家汇上海市徐家汇2888号800号50室L房'
                    },
                    {
                        key: '起租日期:',
                        value: '2016-10-10'
                    },
                    {
                        key: '退租日期:',
                        value: '2016-10-10'
                    },
                    {
                        key: '活动名称:',
                        value: 'jaskdk'
                    }
                ]
            },
            {
                title: "租金",
                dataList: [
                    {
                        key: '房屋租金:',
                        value: '1683.34'
                    },
                    {
                        key: '有无网费:',
                        value: '1683.34'
                    },
                    {
                        key: '合计租金:',
                        value: '1683.34'
                    },
                    {
                        key: '押金:',
                        value: '1683.34'
                    },
                ],
            },
            {
                title: "金融产品",
                dataList: [
                    {
                        key: '金融产品:',
                        value: '01111'
                    },
                    {
                        key: '付款方式:',
                        value: 'jaskdk'
                    },
                    {
                        key: '金融产品开始时间:',
                        value: '2016-10-10'
                    },
                    {
                        key: '金融产品截止日期:',
                        value: '2016-10-10'
                    },
                ],
            }];
        return (
            <div className="contair-info">
                <Head history={this.props.history} ref='head'/>
                <Scroll height={this.state.height}>
                    <DetailList showData={items}/>
                {/*<Head history={this.props.history}/>
                <Scroll height={150}>
                    <DetailList showData={items} />*/}
                </Scroll>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        detail:state.featch,
    };
}

module.exports =connect(mapStateToProps)(Detail);

