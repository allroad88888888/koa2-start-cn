import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';




import * as action from "./../action/listAction.js";



class ContractScroll extends Component {
    constructor(props) {
        super(props);
        /*this.setValue = this.setValue.bind(this);
        this.search = this.search.bind(this);*/
    }
    componentWillMount(){
        //let {dispatch,xuzuSearch} = this.props;
        /*dispatch(action.xuzuSearch());
        dispatch(action.xuzuSearchInit());*/
    }
    render() {
        return (
            <div className="contair-contract">
            	{this.props.children}
            </div>
        );
    }
}

/*
scrollRefresh / closeLoading


 */
function mapStateToProps(state) {
    return {
        list:state.featch.xuzuSearch
    };
}


module.exports = connect(mapStateToProps)(ContractScroll)

