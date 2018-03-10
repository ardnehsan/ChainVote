import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './App';
import reducers from './reducers';
import 'bootstrap/dist/css/bootstrap.css';

// REDUX STORE =================================================
const store = createStore(reducers, {}, applyMiddleware());

ReactDOM.render(
    // Provider TAG IS A REACT COMPONENT THAT KNOW HOW TO READ CHANGES FROM THE REDUX STORE.
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('#root')
);