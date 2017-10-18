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
  
    async getMoviesFromApi() {
      try {
        let response = await fetch('http://localhost:8081/temperature.json'); // path to json-file
        let responseJson = await response.json();
        return responseJson.data.allArduinos.edges[0].node.temperature;
      } catch(error) {
        console.error(error);
        return "error";
      }
    }
    
    render()
    {
      this.getMoviesFromApi().then((response) => {
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