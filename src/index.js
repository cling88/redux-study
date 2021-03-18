
/*
INSTALL

REDUX : yarn add redux react-redux redux-actions
Middleware: yarn add redux-thunk
API: yarn add axios
*/

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// redux
import { applyMiddleware, createStore } from 'redux' // applyMiddleware => middleware
import { Provider } from 'react-redux'
import rootReducer from './redux'

// redux-thunk
import ReduxThunk from 'redux-thunk'

const store = createStore(rootReducer, applyMiddleware(ReduxThunk))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
