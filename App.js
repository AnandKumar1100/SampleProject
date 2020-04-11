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


const sagaMiddleware = createSagaMiddleware();
let middlewares = compose(applyMiddleware(sagaMiddleware));
let store = createStore(allReducers(), middlewares);

export default class App extends React.Component {
  render() {
    return (<Provider store={store}>
      <AppNavigator/>
    </Provider>);
  }
};

sagaMiddleware.run(rootSaga);