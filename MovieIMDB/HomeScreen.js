import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class HomeScreen extends Component {
  render(){
    return (
      <View style={styles.main}>
        <Text>Home Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
