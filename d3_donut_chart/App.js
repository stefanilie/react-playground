import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  TouchableWithoutFeedback,
  View,
  TouchableOpacity
} from 'react-native';

import Pie from './Pie'
import Theme from './Theme'
const data = {
  spendingsLastMonth: [
    {"number":  83, "name": 'Fun activities'},
    {"number": 7, "name": 'Dog'},
  ]
}

type State = {
  activeIndex: number,
  spendingsPerYear: any
}
export default class App extends React.Component {

state: State;

constructor(props) {
  super(props);
  this.state = {
    activeIndex: 0,
    spendingsPerYear: data.spendingsPerYear,
    pieWidth: 140,
    pieHeight: 140
  };
  this._onPieItemSelected = this._onPieItemSelected.bind(this);
  this._shuffle = this._shuffle.bind(this);
}

_onPieItemSelected(newIndex){
  this.setState({...this.state, activeIndex: newIndex, spendingsPerYear: data.spendingsLastMonth});
}

_shuffle(a) {
    for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
    return a;
}
changeSize(){
  if(this.state.pieHeight==140){
    this.setState({...this.state, pieHeight: 50, pieWidth: 50})
  } else {
    this.setState({...this.state, pieHeight: 140, pieWidth: 140})
  }

}
  render() {
    const height = 200;
    const width = 500;

    return (
      <ScrollView>
        <View style={styles.container} >
          <Text style={styles.chart_title}>Distribution of spending this month</Text>
          <Pie
            pieWidth={this.state.pieWidth}
            pieHeight={this.state.pieHeight}
            onItemSelected={this._onPieItemSelected}
            colors={Theme.colors}
            width={width}
            height={height}
            data={data.spendingsLastMonth} />
        </View>
        <View style={styles.button}>
            <TouchableOpacity onPress={()=>this.changeSize()}>
              <Text>Ceva se intampla aici</Text>
            </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const styles = {
  container: {
    backgroundColor:'whitesmoke',
    marginTop: 21,
  },
  chart_title : {
    paddingTop: 15,
    textAlign: 'center',
    paddingBottom: 5,
    paddingLeft: 5,
    fontSize: 18,
    backgroundColor:'white',
    color: 'grey',
    fontWeight:'bold',
  },
  button: {
    backgroundColor: 'red',
    marginTop:30
  }
}
