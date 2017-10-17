import React from 'react';
import { View, Text, Button } from 'react-native';
import containers from '../style/containers';
import fonts from '../style/fonts';

class Header extends React.Component {
    
    constructor(props) {
      super(props);

    }

    _setActSite(origin) {
      GLOBAL.ACT_SIZE = origin;
      console.log("setter: " + GLOBAL.ACT_SIZE)
      alert("setter: " + GLOBAL.ACT_SIZE)
    }
    
    render()
    {
      return (
        <View style={containers.header}>
            <Text style={fonts.title}>Temperature App!!</Text>
            <View style={containers.navigation}>
            
            <Button title = 'Number' style={containers.navLeft}
              onPress={() => {
                console.log('number!')
                this._setActSite("number")
              }}>
            </Button>

            <Button title = 'Graph' style={containers.navRight}
              onPress={() => {
                console.log('graph!')
                this._setActSite("graph")
              }}>
            </Button>
            </View>
        </View>
      )
    }
  }

  module.exports = Header;