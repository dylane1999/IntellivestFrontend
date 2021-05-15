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
import {useSelector} from 'react-redux';
import store, {RootState} from './src/store';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { PrivateRoutes } from './src/routing/PrivateRoutes';
import PublicRoutes from './src/routing/PublicRoutes';

const App = () => {
  const authState = useSelector((state: RootState) => state.auth);

  return (
    < >
      {authState.token != '' ? (
        <PrivateRoutes/>
      ) : (
        <PublicRoutes/>
      )}
    </>
  );
};

export default App;
