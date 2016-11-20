/**
 * Created by zylee on 2016/11/15.
 */
import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';

require("./steps.scss");


class Steps extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {title, current, status,children,prefixName}=this.props;
        const lastIndex=children.length-1;

        return (
            <div className={prefixName}>
                {React.Children.map(children, (ele, index) => {
                    const lineWidth =  `${100 / (lastIndex+1)}%`;

                    const param={
                        prefixName,
                        lineWidth,
                        stepNum:(index+1).toString(),
                        stepLast:index===lastIndex,
                    };

                    if(index===current){
                        param.status=status;
                    }else if(index<current){
                        param.status='passed';
                    }else {
                        param.status='will';
                    }

                    return React.cloneElement(ele,param);
                },this)}
            </div>
        );
    }


}

Steps.propTypes = {};

Steps.defaultProps = {
    prefixName:'steps',   //默认className前缀
    current:0,            //当前状态下标，从 0 开始记数
    status:'process',
};

module.exports = Steps;