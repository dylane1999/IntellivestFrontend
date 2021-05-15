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
import { Provider } from "react-redux";
import store from "./src/store"

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

const App = () => {
  return (
    <Provider store={store}> 
      <NativeRouter>
          <Route exact path="/" component={WelcomePage} />
      </NativeRouter>
      </Provider>
  );
};

export default App;
