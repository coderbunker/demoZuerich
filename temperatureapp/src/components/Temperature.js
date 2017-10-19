import React from 'react';
import { Text } from 'react-native';

class Temperature extends React.Component {
    
    constructor(props) {
      super(props);
      console.log("App starts here")
      // this.startInterval();
      var xInterval = null;
      this.state = {
        isLoading: true,
        display: ""
      }
      setInterval(() => {
        console.log("interval")
      }, 1000);
    }
  
    async getDataFromJSON() {
      try {
        let response = await fetch('http://192.168.1.27/temperature.json'); // path to json-file
        let responseJson = await response.json();
        return responseJson.data.allArduinos.edges[0].node.temperature + "°C";
      } catch(error) {
        return "😢";
      }
    }
    
    render()
    {
      this.getDataFromJSON().then((response) => {
        var temperature = response
        //console.log("received data: " + film);
        this.setState ({
          isLoading: false,
          display: temperature
        })
      }, (error) => {
        console.error(error);
      });
      if(this.state.isLoading)
      {
        return <Text>Loading...</Text>
      }
      var display = this.state.display;
      //console.log(display);
      return (
        <Text>{display}</Text>
      )
    }
  }

  module.exports = Temperature;