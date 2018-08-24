import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import Game from './components/Game';
import { devToolsEnhancer } from 'redux-devtools-extension';

import './index.css';

import * as reducers from './store/reducers';
const store = createStore(combineReducers(reducers), devToolsEnhancer());

ReactDOM.render(
  <Provider store={store}>
    <Game />
  </Provider>,
  document.getElementById('root')
);