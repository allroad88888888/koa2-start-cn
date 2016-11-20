import React, { Component, PropTypes } from 'react';
import each from "lodash/each";
require("./tab.scss")

class TabsControl extends React.Component{
    constructor(props){
        super(props);
        this.state={ 
            currentIndex : 0
        };
    }
    check_tittle_index(index){
        return index===this.state.currentIndex ? "tab-title-item click" : "tab-title-item";
    }
    check_item_index(index){
        return index===this.state.currentIndex ? "tab-container-list show" : "tab-container-list";
    }
    render(){
        let _this=this;
        return(
            <div className="service-container">
                {/*动态生成Tab导航*/}
                <div className="tab-title">
                    { React.Children.map( this.props.children , (element,index) => {
                        return(
                            /*箭头函数没有自己的this，这里的this继承自外围作用域，即组件本身*/
                            <div onClick={ () => { this.setState({currentIndex : index}) } } className={ this.check_tittle_index(index) }>{element.props.name}{element.props.value}</div>
                            );
                    }) }
                </div>
                {/*Tab内容区域*/}
                <div className="tab-container">
                    {React.Children.map(this.props.children,(element,index)=>{
                        return(
                            <div className={ this.check_item_index(index)}>{ element }</div>
                        );
                    })}
                </div>
            </div>
        );
    }
}
module.exports = TabsControl;