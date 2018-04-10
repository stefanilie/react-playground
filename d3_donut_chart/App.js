import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  TouchableWithoutFeedback,
  View,
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

  render() {
    const height = 200;
    const width = 500;

    return (
      <ScrollView>
        <View style={styles.container} >
          <Text style={styles.chart_title}>Distribution of spending this month</Text>
          <Pie
            pieWidth={150}
            pieHeight={150}
            onItemSelected={this._onPieItemSelected}
            colors={Theme.colors}
            width={width}
            height={height}
            data={data.spendingsLastMonth} />
          <Text style={styles.chart_title}>Spending per year in {data.spendingsLastMonth[this.state.activeIndex].name}</Text>
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
  }
}
