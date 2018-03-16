import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, TextInput, Button, Alert, ScrollView, DatePickerIOS } from 'react-native';
import DatePocker from './DatePicker';

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

  _onButtonClick() {
    this.setState({
      showComponent: true,
    });
  }

  render() {
    return(
      <View style={{flex: 1, flexDirection: 'column'}}>
        <View style={styles.flexBlue}>
        {/* add here after on click button, to change the state and display the 'translation' */}
          <Blick proptext={this.state.text.split(' ').map((word)=>word && '🍕').join(' ')} styleProp={styles.emoji}/>
        </View>
        <View style={styles.flexNavy}>
          <Blick proptext={this.state.text.split(' ').map((word)=>word && '🍕').join(' ')} styleProp={styles.emoji}/>
        </View>
        <View style={styles.flexSteel}>
          <View>
            <TextInput style={styles.emoji} placeholder="Type here to translate!" onChangeText={(text)=>this.setState({text})} />
          </View>
          <View style= {{flexDirection: 'row', justifyContent: "space-between"}}>
            <Button onPress={()=> {
              Alert.alert('Translation made!');

            }}
            title="change state"
            color="red"
            />
            <Button onPress={() =>{
              Alert.alert("Deleted translation!")
            }}
            title="delete state"
            color="gray"
            />
          </View>
          <View>
            <Button onPress={() =>{
              this._onButtonClick
            }}
            title="open date picker"
            color="gray"
            />
            {
              this.state.showComponent ?
                <DatePicker /> : null
            }
          </View>
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
  flexSteel: {
    flex: 3,
    backgroundColor: 'steelblue',
    justifyContent: 'center',
    alignItems: 'center',
  },

});




export default class BlinkApp extends Component {
  render(){
    return (
        <PizzaTranslator/>
    )
  }
}
