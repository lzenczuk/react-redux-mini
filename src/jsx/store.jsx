import { createStore } from 'redux'
import canvasApp from './reducers'

export let store = createStore(canvasApp);
