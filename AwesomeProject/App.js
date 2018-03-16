import React, { Component } from 'react';
<<<<<<< HEAD
import { AppRegistry, Text, View, StyleSheet, TextInput, Button, Alert, ScrollView, DatePickerIOS } from 'react-native';
import DatePicker from './DatePicker';
import ExpandableCell from './ExpandableCell'
=======
import { AppRegistry, Text, View, StyleSheet, TextInput } from 'react-native';
>>>>>>> c00cdc8f32f8c4300085e0e7e4773e7173065d01

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
<<<<<<< HEAD

  _onButtonClick() {
    this.setState({
      showComponent: true,
    });
  }

=======
>>>>>>> c00cdc8f32f8c4300085e0e7e4773e7173065d01
  render() {
    return(
      <View style={{flex: 1, flexDirection: 'column'}}>
        <View style={styles.flexBlue}>
<<<<<<< HEAD
        {/* add here after on click button, to change the state and display the 'translation' */}
=======
>>>>>>> c00cdc8f32f8c4300085e0e7e4773e7173065d01
          <Blick proptext={this.state.text.split(' ').map((word)=>word && '🍕').join(' ')} styleProp={styles.emoji}/>
        </View>
        <View style={styles.flexNavy}>
          <Blick proptext={this.state.text.split(' ').map((word)=>word && '🍕').join(' ')} styleProp={styles.emoji}/>
        </View>
        <View style={styles.flexSteel}>
<<<<<<< HEAD
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
           <ExpandableCell style={styles.flexPicker}>
            <DatePicker/>
           </ExpandableCell>
          {/*   <Button onPress={() =>{
              this._onButtonClick
            }}
            title="open date picker"
            color="gray"
            />
            {
              this.state.showComponent ?
                <DatePicker /> : null
            }          */}
          </View>
=======
          <TextInput style={styles.emoji} placeholder="Type here to translate!" onChangeText={(text)=>this.setState({text})} />
>>>>>>> c00cdc8f32f8c4300085e0e7e4773e7173065d01
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
<<<<<<< HEAD
  flexSteel: {
=======
  flexSteel :{
>>>>>>> c00cdc8f32f8c4300085e0e7e4773e7173065d01
    flex: 3,
    backgroundColor: 'steelblue',
    justifyContent: 'center',
    alignItems: 'center',
<<<<<<< HEAD
  },
  flexPicker: {
    flex: 4
  }

=======
  }
>>>>>>> c00cdc8f32f8c4300085e0e7e4773e7173065d01
});




export default class BlinkApp extends Component {
  render(){
    return (
        <PizzaTranslator/>
    )
  }
}
