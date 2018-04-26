
import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native'


export default class Ciorba extends Component {
  constructor() {
    super()
  }

  getColor() {
    let r = this.randomRGB()
    let g = this.randomRGB()
    let b = this.randomRGB()
    return 'rgb(' + r + ', ' + g + ', ' + b + ')'
  }
    randomRGB = () => 160 + Math.random()*8
  render(){
    return(
      <View key={1} style={[styles.block, { backgroundColor: this.getColor() }]}>
        <Text style={{color: 'white', fontSize: 50}}>{this.props.mass}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    marginTop: 6,
    marginLeft: 3,
    marginRight: 3,
    borderRadius: 0,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
