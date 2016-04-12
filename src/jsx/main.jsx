import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import attachFastClick from 'fastclick';

import { createStore } from 'redux';
import canvasApp from './reducers';

//import store from './store';

import App from './component/app';

attachFastClick(document.body);

let store = createStore(canvasApp);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("app")
);

