'use strict'
import * as React from 'react';
require("./base.scss");
import Icon from "./icon.js";
/*input插件*/
class Header extends React.Component {
    constructor(props) {
        super(props);
    };
    render() {
        // console.log(this.props);
        return (
            <header className="header">
                <div className="head-return" onClick={() => this.props.history.goBack()}><Icon classParent={"icon icon-return"} classChildren={"top_icon_return"}/></div>
                <div className="head-title">续约</div>
            </header>
        )
    }
};
// function mapStateToProps(state) {
//     return {
//        state:state
//     };
// }
// module.exports = connect(mapStateToProps)(Header)
module.exports = Header;