'use strict';
import React, { Component, PropTypes } from 'react';

import { connect } from 'react-redux';

import { isEqual } from "lodash";


// import {Layout, Loading, TabList, Menus, LeftMenu, Modal} from 'yuapt-ui';

var App = React.createClass({
    shouldComponentUpdate: function(nextProps, nextState) {
        if (isEqual(nextProps, this.props)) {
            return false;
        }
        return true;
    },
    componentWillReceiveProps(nextProps) {
        // if we changed routes...
        if ((
                nextProps.location.key !== this.props.location.key &&
                nextProps.location.state &&
                nextProps.location.state.modal
            )) {
            this.previousChildren = this.props.children
        }
        let isModal =
            nextProps.location.state &&
            nextProps.location.state.modal &&
            this.previousChildren && true || false;

        /*if(!isModal&&nextProps.location.pathname !== this.props.location.pathname&&nextProps.location.pathname!="/"){
         this.addPage(nextProps);
         }*/

    },
    componentWillMount: function() {
        let { dispatch, history, location } = this.props;
    },
    render: function() {
        let { menuAndUserInfo, tab, showKey, location } = this.props;

        let isModal =
            location.state &&
            location.state.modal &&
            this.previousChildren && true || false;


        return ( 
            <div>

            { this.props.children } {
                isModal && ( < Modal isOpen = { true }
                    close = { this.toPage }
                    location = { location.state.location }
                    others = { location.state } > { this.props.children } </Modal>
                )
            } </div>
        )
    }
})


export default App;