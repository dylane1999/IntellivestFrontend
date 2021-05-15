/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import WelcomePage from './src/pages/WelcomePage';
import {NativeRouter, Route, Link} from 'react-router-native';
import {Provider,} from 'react-redux';
import store, {RootState} from './src/store';
import App from './App';


const AppRoot = () => {

  return (
    <Provider store={store}>
      <NativeRouter>
        <App />
      </NativeRouter>
    </Provider>
  );
};

export default AppRoot;
