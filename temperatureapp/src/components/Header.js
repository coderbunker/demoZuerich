import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
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
                <TouchableOpacity onPress={this._setActSite("number")} style={containers.navLeft}>
                    <Text style={fonts.nav}>Number</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this._setActSite("graph")} style={containers.navRight}>
                    <Text style={fonts.nav}>Graph</Text>
                </TouchableOpacity>
            </View>
        </View>
      )
    }
  }

  module.exports = Header;