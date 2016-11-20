import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

//var css = require("./list.scss");

/*import Search from "./../../component/search/search.js";
import Scroll from "./../../component/scroll/scroll.js";
import Swipe from "./../../component/swipe/swipe.js";
*/
import Head from "./../../component/base/head";
import Input from "./../../component/form/input";
import Select from "./../../component/form/select";
import SelectMany from "./../../component/form/select-many";
import Button from "./../../component/base/button";
import * as action from "./../action/listAction.js";
import {Steps,Step} from "./../../component/steps/index"

var InfoOne = require("./info-one.js")
require("./info.scss");

class Info extends Component {
    constructor(props) {
        super(props);
        this.setValue = this.setValue.bind(this);
    }
    setValue(name,value) {
        let {dispatch,xuzuSearch} = this.props;
        
    }
    componentWillMount(){
        let {dispatch,xuzuSearch} = this.props;
        /*dispatch(action.xuzuSearch());
        dispatch(action.xuzuSearchInit());*/
    }
    render() {
        let inProps = {
            setValue:this.setValue
        }
        let showData = [{id:"1",name:"aaa1111111111222222222222222222222222222222222221111111111111"},{id:"2",name:"bbb"},{id:"3",name:"ccc"},{id:"3",name:"ccc"},{id:"3",name:"ccc"},{id:"3",name:"ccc"},{id:"3",name:"ccc"},{id:"3",name:"ccc"},{id:"3",name:"ccc"},{id:"3",name:"ccc"},{id:"3",name:"ccc"}];

        let showManyData = [[{id:"1",name:"付1"},{id:"2",name:"付2"},{id:"3",name:"付三"}],[{id:"1",name:"押1"},{id:"2",name:"押2"},{id:"3",name:"押3"}]];
        return (
            <div className="contair-info">
                <Head history={this.props.history}/>
                <Steps current={1}>
                    <Step title="租客信息"/>
                    <Step title="新合同信息"/>
                    <Step title="图片上传"/>
                </Steps>
                <ul className="contair-info-ul">
                      {/*<li><InfoOne title="合租类型" isStar={true}/></li>
                    <li><InfoOne title="入住间数" isStar={true}></InfoOne></li>
                    <li><InfoOne title="签约日期" isStar={true}><Input type="text" placeholder="￥500" {...inProps}/></InfoOne></li>
                  <li><InfoOne title="合同生效日期:"></InfoOne></li>*/}
                    <li><InfoOne title="金融产品"><Select placeholder="选择金融产品" {...inProps} /></InfoOne></li>
                    <li><InfoOne title="付款方式" isStar="true"><Select /></InfoOne></li>
                   <li><InfoOne title="合同租期" isStar="true"><SelectMany name={"ya,bao"} showManyData={showManyData}/></InfoOne></li>
                   <li><InfoOne title="房屋租金" isStar="true"><Input type="text"/></InfoOne></li>
                   <li><InfoOne title="有无网费" isStar="true"><Select/></InfoOne></li>
                   <li><InfoOne title="网费" isStar="true"></InfoOne></li>
                   <li><InfoOne title="租金总计" isStar="true"></InfoOne></li>
                   <li><InfoOne title="押金" isStar="true"></InfoOne></li>
                   <li><InfoOne title="活动"><Select  showData={showData}/></InfoOne></li>
               </ul>
               <div className="contair-btn"><Button title="下一步" type="submit"/></div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        search:state.search,
        list:state.fetch,
        xuzu:state.xuzu
    };
}


module.exports = connect(mapStateToProps)(Info)

