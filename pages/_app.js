import React from "react";
import { makeStore } from "../helper/redux-store";
import { Provider } from "react-redux";
import App from "next/app";
import withRedux from "next-redux-wrapper";

class MyApp extends App {
    static async getInitialProps({Component, ctx}) {

        // For dispatching, we can dispatch from here(_app.js)
        // or specific page in "Page.getInitialProps" by using
        // this.props.store
        ctx.store.dispatch({type: 'FOO', payload: 'foo'});

        const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

        // Set to props
        return {pageProps};
    }

    render() {
        // ctx or context -> props
        const { Component, pageProps, store } = this.props;
        return (
            <Provider store={store}>
                <Component {...pageProps} />
            </Provider>
        );
    }
}

export default withRedux(makeStore)(MyApp);