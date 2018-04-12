
import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View
} from 'react-native'

import SortableGrid from 'react-native-sortable-grid'

export default class BasicExample extends Component {

  constructor() {
    super()
  }

  getColor() {
    let r = this.randomRGB()
    let g = this.randomRGB()
    let b = this.randomRGB()
    return 'rgb(' + r + ', ' + g + ', ' + b + ')'
  }
  randomRGB = () => 160 + Math.random()*85

  render() {
    return (
      <SortableGrid
        blockTransitionDuration      = { 500 }
        activeBlockCenteringDuration = { 200 }
        itemsPerRow                  = { 4 }
        dragActivationTreshold       = { 200 }
        onDragRelease                = { (itemOrder) => console.log("Drag was released, the blocks are in the following order: ", itemOrder) }
        onDragStart                  = { ()          => console.log("Some block is being dragged now!") }
      >
        <View key={1} style={[styles.block, { backgroundColor: this.getColor() }]}>
          <Text style={{color: 'white', fontSize: 50}}>A</Text>
        </View>
        <View key={2} style={[styles.block, { backgroundColor: this.getColor() }]}>
          <Text style={{color: 'white', fontSize: 50}}>B</Text>
        </View>
        <View key={3} style={[styles.block, { backgroundColor: this.getColor() }]}>
          <Text style={{color: 'white', fontSize: 50}}>C</Text>
        </View>
      </SortableGrid>
    )
  }

}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    margin: 8,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
