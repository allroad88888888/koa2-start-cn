import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';



let Pages = React.createClass({
    shouldComponentUpdate:function(nextProps){
        if(_.isEqual(this.props,nextProps)){

            console.log("  不重新  计算                                  =======================================")
            return false;
        }
        return true
    },
    componentWillReceiveProps(nextProps) {

    },
    render: function() {
        let {pages,showKey} = this.props,shows=[];
       for(var key in pages){
             shows.push(<div key={key} className={showKey===key?"container-body":"container-body-hide"}>
                      {pages[key]}
                  </div>)
       }
       console.log("kkkkkkkkkkkkkkkkkkkkkkkkkkkkk")
       if(shows.length==0){
         return(<div></div>)
       }
       return(<div>{shows}</div>)
    }

})

function select(state) {
  return {
     pages:state.tab.pageMap,
     showKey:state.tab.showKey
  };
}



// // // 包装 component ，注入 dispatch 和 state 到其默认的 connect(select)(App) 中；
  module.exports = connect(select)(Pages);
/*

{React.cloneElement(pages[key]|| <div/>,{closeSelf:this.props.closeSelf})}
 */

