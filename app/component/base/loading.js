'use strict'
import * as React from 'react';
require("./loading.scss");
/*input插件*/
class Loading extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
       // let css = "btn "+BTN_CSS[this.props.type];
        return (
         <div className="contair-load">
            <div className="load">
              <div className="load-one rt-1">
                <span className="small-quan an-1"></span>
              </div>
              <div className="load-one rt-2">
                <span className="small-quan an-2"></span>
              </div>
              <div className="load-one rt-3">
                <span className="small-quan an-3"></span>
              </div>
              <div className="load-one rt-4">
                <span className="small-quan an-4"></span>
              </div>
              <div className="load-one rt-5">
                <span className="small-quan an-5"></span>
              </div>
              <div className="load-one rt-6">
                <span className="small-quan an-6"></span>
              </div>
              <div className="load-one rt-7">
                <span className="small-quan an-7"></span>
              </div>
              <div className="load-one rt-8">
                <span className="small-quan an-8"></span>
              </div>
            </div>
            <svg className="load-logo">
                  <use xlinkHref='#logo'></use>
            </svg>
         </div>
        )
    }
};

module.exports = Loading;