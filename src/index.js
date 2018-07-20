import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { createStore, applyMiddleware } from "redux";
import rootReducer from './reducers/rootReducer.js';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import './index.css';

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(composeWithDevTools)
    )
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);
