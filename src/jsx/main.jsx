import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import attachFastClick from 'fastclick';

import { createStore } from 'redux';
import canvasApp from './reducers';

//import store from './store';

import App from './component/app';

import BusinessCanvas from './component/business-canvas';
import NewEntryEditor from './component/new-entry';

attachFastClick(document.body);

let store = createStore(canvasApp);

ReactDOM.render(
    <Provider store={store}>
        <div>
            <BusinessCanvas />
            <NewEntryEditor />
        </div>
    </Provider>,
    document.getElementById("app")
);

