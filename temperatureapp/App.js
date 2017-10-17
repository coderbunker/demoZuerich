import React from 'react';
import { Text, View } from 'react-native';
import Temperature from './src/components/Temperature';
import Header from './src/components/Header';
import containers from './src/style/containers';
import fonts from './src/style/fonts';
import * as GLOBAL from './src/utils/globals';

export default class App extends React.Component {

  constructor(props) {
    super(props)
    
    
    // initial state
    this.state = {
      page: "number"  
    }
  }

  _onPress(value){
    console.log(value)
    this.setState({
      page: value
    })
  }

  render() {
    if(this.state.page=='number')
    {
      return (
        <View style={containers.main}>
          <Header
            eventListener={this._onPress.bind(this)}
          />
          <View style={containers.content}>
            <View style={containers.circle}>
              <Temperature />
            </View>
          </View>
        </View>
      );
    }
    else if(this.state.page=='graph') {
      return (
        <View style={containers.main}>
          <Header
            eventListener={this._onPress.bind(this)}
          />
          <View style={containers.content}>
            <Text>Graph</Text>
          </View>
        </View>
      );
    }
  }
}


