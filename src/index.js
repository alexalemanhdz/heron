import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import appReducer from './containers/App/reducers';
import appSaga from './containers/App/sagas';
import App from './containers/App';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(appReducer, composeWithDevTools(
  applyMiddleware(sagaMiddleware),
));
const rootElement = document.getElementById('root');

sagaMiddleware.run(appSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement,
);
