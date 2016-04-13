import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import attachFastClick from 'fastclick';

import { createStore } from 'redux';
import canvasApp from './reducers';

//import store from './store';

import App from './component/app';

import CanvasContainer from './component/canvas-container';
import NewEntryEditor from './component/new-entry';

attachFastClick(document.body);

let store = createStore(canvasApp);

ReactDOM.render(
    <Provider store={store}>
        <div>
            <CanvasContainer />
            <NewEntryEditor />
        </div>
    </Provider>,
    document.getElementById("app")
);

