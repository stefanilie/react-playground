import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation'

import HomeScreen from './HomeScreen';

export default class App extends React.Component {
  render() {
    return <RootStack />
  }
}

const RootStack = StackNavigator({
  Home: {
    screen: HomeScreen,
  },
});
