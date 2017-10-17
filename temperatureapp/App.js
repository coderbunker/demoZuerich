import React from 'react';
import { Text, View } from 'react-native';
import Temperature from './src/components/Temperature';
import Header from './src/components/Header';
import containers from './src/style/containers';
import fonts from './src/style/fonts';
import * as GLOBAL from './src/utils/globals';

export default class App extends React.Component {
  render() {
    console.log("hello: " + GLOBAL.ACT_SIZE);
    if(GLOBAL.ACT_SIZE == 'number')
    {
      return (
        <View style={containers.main}>
          <Header />
          <View style={containers.content}>
            <View style={containers.circle}>
              <Temperature />
            </View>
          </View>
        </View>
      );
    }
    else {
      return (
        <View style={containers.main}>
          <Header />
          <View style={containers.content}>
            <Text>Graph</Text>
          </View>
        </View>
      );
    }
  }
}


