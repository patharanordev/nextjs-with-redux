import React from "react";
import {connect} from "react-redux";

import TestComponent from '../components/Test';

const Page = props => (
    <div>
        <div>Prop from Redux {props.foo}</div>
        <div>Prop from Page.getInitialProps {props.custom}</div>
        <TestComponent/>
    </div>
);

Page.getInitialProps = ({store, isServer, pathname, query}) => {

    // For dispatching, we can dispatch from here(_app.js)
    // or specific page in "Page.getInitialProps" by using
    // this.props.store
    // store.dispatch({type: 'FOO', payload: 'foo'});

    // To test adding the new one to store
    return { custom: 'custom' };
}

export default connect(state => state)(Page);