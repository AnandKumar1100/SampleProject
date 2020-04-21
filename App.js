/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {applyMiddleware, compose, createStore} from 'redux';
import {Provider} from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import allReducers from './js/allReducers';
import rootSaga from './js/rootSaga';
import AppNavigator from "./js/routes";
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/lib/integration/react';

const sagaMiddleware = createSagaMiddleware();
let middlewares = compose(applyMiddleware(sagaMiddleware));
let store = createStore(allReducers(), middlewares);
let persistor = persistStore(store);

export default class App extends React.Component {
  render() {
    return (<Provider store={store}>
      <PersistGate persistor={persistor}>
        <AppNavigator />
      </PersistGate>
    </Provider>);
  }
};

sagaMiddleware.run(rootSaga);