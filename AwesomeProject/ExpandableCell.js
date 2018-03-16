import React, { Component, PropTypes } from 'react';
import {
  LayoutAnimation,
  Text,
  TouchableHighlight,
  View,
  StyleSheet,
  Button
} from 'react-native';

export default class ExpandableCell extends Component {

  constructor (props){
    super(props);

    this.state = {
      expanded: false
    }
  }

  componentWillUpdate(){
    LayoutAnimation.linear();
  }

  _expandCell() {
    this.setState({
      expanded: !this.state.expanded
    })
  }

  render(){
    return(
      <View style={styles.expandableCellContainer}>
        <View>
          <Button onPress={() =>{
            this._expandCell()
          }}
          title="open date picker"
          color="gray"
          />
          <View style={ [styles.hiddenContent, this.state.expanded ? {} : {maxHeight: 0}]}>
            {this.props.children}
          </View>
        </View>
      </View>
    )
  };
}

const styles = StyleSheet.create({
  hiddenContent: {
    overflow: 'hidden'
  },
  visibleContent: {
    fontSize: 24
  }
});
