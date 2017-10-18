import React from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import containers from '../style/containers';
import fonts from '../style/fonts';

class Header extends React.Component {
    
    constructor(props) {
      super(props);

    }
    
    render()
    {
      const { eventListener } = this.props
      return (
        <View style={containers.header}>
            <Text style={fonts.title}>Temperature App!!</Text>
            <View style={containers.navigation}>

            <TouchableOpacity style={containers.navLeft}
              onPress={() => {
                eventListener("number");
              }}>
              <Text style={fonts.nav}>Number</Text>
            </TouchableOpacity>
            <TouchableOpacity style={containers.navRight}
              onPress={() => {
                eventListener("graph");
              }}>
              <Text style={fonts.nav}>Graph</Text>
            </TouchableOpacity>
            </View>
        </View>
      )
    }
  }

  module.exports = Header;