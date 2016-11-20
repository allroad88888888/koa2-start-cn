/**
 * Created by zylee on 2016/11/15.
 */
import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';

require("./steps.scss");


class Step extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {title, prefixName,stepNum,stepLast,status,lineWidth}=this.props;
        const classString=classNames({
            [`${prefixName}-item`]:true,
            [`${prefixName}-item-${status}`]:true,
            [`${prefixName}-item-last`]: stepLast,
        })
        return (
            <div className={classString} style={{width:lineWidth, zIndex:stepNum}}>
                <div className={`${prefixName}-line`}></div>
                <div className={`${prefixName}-step`} >
                    <div className={`${prefixName}-head`}>
                        <div className={`${prefixName}-icon`}>
                            {stepNum}
                        </div>
                    </div>
                    <div className={`${prefixName}-main`}>
                        <div className={`${prefixName}-title`}>
                            {title}
                        </div>
                    </div>
                </div>
            </div>
        );
    }


}

Step.propTypes = {
    stepLast: PropTypes.bool,
    status: PropTypes.string,
    stepNumber: PropTypes.string,
    prefixName: PropTypes.string,
};


module.exports = Step;