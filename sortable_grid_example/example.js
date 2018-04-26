
import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native'

import SortableGrid from 'react-native-sortable-grid'
import Ciorba from './Ciorba'
const initialState = {
  mass: 0
}
const MASS_FETCH = 'MASS_FETCH'
function massFetch(){
  return {type: MASS_FETCH}
}

export default class BasicExample extends Component {

  state={
    mass: 0
  }

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


  componentDidMount(){
    fetch('https://swapi.co/api/people/1/')
    .then(result => {
      return result.json();
    }).then(data =>{
      this.setState({...this.state, mass: data.mass})
    })
  }
  render() {
    return (
      <SortableGrid
        blockTransitionDuration      = { 500 }
        activeBlockCenteringDuration = { 200 }
        itemsPerRow                  = { 4 }
        dragActivationTreshold       = { 200 }
        onDragRelease                = { (itemOrder) => console.log("Drag was released, the blocks are in the following order: ", itemOrder) }
        onDragStart                  = { ()          => console.log("Some block is being dragged now!") }
        itemWidth                    = { 90 }
        itemHeight                   = { 90 }
      >
        <Ciorba mass={this.state.mass}/>

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
    marginTop: 6,
    marginLeft: 3,
    marginRight: 3,
    borderRadius: 0,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
