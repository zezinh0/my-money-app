import React from "react";
import ReactDOM from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'

import promise from 'redux-promise'

import App from './main/app'
import reducers from './main/Reducers'


// Enable Redux DevTools if available, otherwise use Redux compose
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Create the Redux store with middleware and DevTools support
const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(promise))
);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>

, document.getElementById('app')) 