import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Temperature from './src/components/Temperature';
import containers from './src/style/containers';
import fonts from './src/style/fonts';


export default class App extends React.Component {
  render() {
    return (
      <View style={containers.main}>
        <View style={containers.header}>
          <Text style={fonts.title}>Temperature App!</Text>
        </View>
        <View style={containers.content}>
          <View style={containers.circle}>
            <Temperature></Temperature>
          </View>
        </View>
      </View>
    );
  }
}


