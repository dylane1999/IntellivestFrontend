/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import WelcomePage from "./src/components/WelcomePage"

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
    <SafeAreaView>
      <WelcomePage/>
      <Text> jellpo</Text>
    </SafeAreaView>
  );
};


export default App;
