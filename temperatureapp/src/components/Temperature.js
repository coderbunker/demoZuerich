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
    }
  
    async getMoviesFromApi() {
      try {
        let response = await fetch('https://facebook.github.io/react-native/movies.json');
        let responseJson = await response.json();
        return responseJson;
      } catch(error) {
        console.error(error);
        return "error";
      }
    }
    
    render()
    {
      this.getMoviesFromApi().then((response) => {
        var film = response.movies[0].title
        console.log("received data: " + film);
        this.setState ({
          isLoading: false,
          display: film
        })
      }, (error) => {
        console.error(error);
      });
      if(this.state.isLoading)
      {
        return <Text>Loading...</Text>
      }
      var display = this.state.display;
      console.log(display);
      return (
        <Text>{display}</Text>
      )
    }
  }

  module.exports = Temperature;