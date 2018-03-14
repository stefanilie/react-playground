import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, TextInput } from 'react-native';

class Blick extends Component {

  constructor(props) {
    super(props);
    this.state = {isShowingText: true};
    let proptext = " "
    let styleProp ={}

    setInterval(() => {
      this.setState(previousState => {
        return { isShowingText: !previousState.isShowingText };
      });
    }, 100);
  }
  render(){
    let display = this.state.isShowingText ? this.props.proptext : ' ';
    return (
        <Text style={this.props.styleProp}>{display}</Text>
      );
  }
}

class PizzaTranslator extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }
  render() {
    return(
      <View style={{flex: 1, flexDirection: 'column'}}>
        <View style={styles.flexBlue}>
          <Blick proptext={this.state.text.split(' ').map((word)=>word && '🍕').join(' ')} styleProp={styles.emoji}/>
        </View>
        <View style={styles.flexNavy}>
          <Blick proptext={this.state.text.split(' ').map((word)=>word && '🍕').join(' ')} styleProp={styles.emoji}/>
        </View>
        <View style={styles.flexSteel}>
          <TextInput style={styles.emoji} placeholder="Type here to translate!" onChangeText={(text)=>this.setState({text})} />
        </View>
      </View>
    )
  };
}

const styles = StyleSheet.create({
  emoji: {
    fontSize: 20,
    marginTop: "10%"
  },
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30
  },
  red: {
    color: 'red',
    fontSize: 20
  },
  flexBlue: {
    flex: 1,
    backgroundColor: 'powderblue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  flexNavy: {
    flex: 2,
    backgroundColor: 'skyblue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  flexSteel :{
    flex: 3,
    backgroundColor: 'steelblue',
    justifyContent: 'center',
    alignItems: 'center',
  }
});




export default class BlinkApp extends Component {
  render(){
    return (
        <PizzaTranslator/>
    )
  }
}
