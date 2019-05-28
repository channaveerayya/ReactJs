import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from "redux";
import {Provider} from 'react-redux'
import rootReducer from './reducers/rootReducer';

const store=createStore(rootReducer)//here rootReducer interact with store

ReactDOM.render(<Provider store={store}><App />
</Provider>, document.getElementById('root'));
//here we wrapping the store to app component ,providing access to the store in react app by global

serviceWorker.unregister();
