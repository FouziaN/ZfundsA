import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigatior from './src/navigator/RootNavigatior';

const App = () => {
  return (
    <NavigationContainer>
      <RootNavigatior />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
