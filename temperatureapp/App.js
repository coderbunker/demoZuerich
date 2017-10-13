import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

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
  /*
  startInterval()
  {
    this.xInterval = setInterval(() => {
      this.render();
    }, 1000);
  }
  */

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
      try {
        console.log("received data: " + response);
        var film = response.movies[0].title
        this.setState ({
          isLoading: false,
          display: response.movies[0].title
        })
      }
      catch {
        this.setState ({
          isLoading: false,
          display: "Didn't find selected film"
        })
      }
    }, (error) => {
      console.error(error);
    });
    console.log(this.state.isLoading)
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

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Temperature></Temperature>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  stretch: {
    width: 200,
    height: 100,
    
  }
});
