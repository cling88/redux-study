
/*
INSTALL

REDUX : yarn add redux react-redux redux-actions
Middleware: yarn add redux-thunk
API: yarn add axios

ETC
- Debugging tools 
yarn add redux-logger 
yarn add redux-devtools-extension
*/

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// redux
import { applyMiddleware, createStore } from 'redux' // applyMiddleware => middleware
import { Provider } from 'react-redux'
import rootReducer, { rootSaga } from './redux'

// redux-thunk
import ReduxThunk from 'redux-thunk'

// saga
import createSagaMiddleware from 'redux-saga'

// debugging
import { createLogger } from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'

const logger = createLogger();
const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger, ReduxThunk, sagaMiddleware)))
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
