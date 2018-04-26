import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native';

const StyledText = styled.Text`
  color: palevioletred;
`

const StyledView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background: papayawhip;
`

export default class App extends React.Component {
  render() {
    return (
      <StyledView>
        <StyledText>
          Hello world, this is my first styled component!
        </StyledText>
      </StyledView>
    );
  }
}
