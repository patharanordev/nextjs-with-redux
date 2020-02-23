import { applyMiddleware, createStore, compose } from "redux";

// Activate logger when it is in development environment
const middlewares = [];
console.log('process.env.NODE_ENV:', process.env.NODE_ENV);
if (process.env.NODE_ENV == 'development') {
    const { logger } = require(`redux-logger`);
  
    middlewares.push(logger);
}

/**
 * Reducer
 * 
 * storage handler/manager
 * @param {*} state state holder or storage
 * @param {*} action new data object which was sent by client to set into current state
 */
const reducer = (state = {foo: ''}, action) => {
    switch (action.type) {
        case 'FOO':
            // In this case, if type of data is "FOO" then 
            // adding data to attribute "foo" into current state.
            // If state didn't declare, set it with {foo: ''}
            return {...state, foo: action.payload};

        case 'CHANGE_STORE_VALUE':
            return {...state, foo: action.storeValue};
        default:
            return state
    }
};

/**
 * makeStore
 * 
 * create new store
 * @param {object} initialState The store's initial state (on the client side, the state of the server-side store is passed here)
 * @param {boolean} options.isServer Indicates whether makeStore is executed on the server or the client side
 * @param {Request} options.req Node.js `Request` object (only set before `getInitialProps` on the server side)
 * @param {Response} options.res Node.js `Response` object (only set before `getInitialProps` on the server side)
 * @param {boolean} options.debug User-defined debug flag
 * @param {string} options.storeKey The key that will be used to persist the store in the browser's `window` object for safe HMR
*/
const makeStore = (initialState, options) => {
    // return compose(applyMiddleware(...middlewares))(createStore)(reducer, initialState);
    return createStore(reducer, initialState, applyMiddleware(...middlewares));
};

export { makeStore };