import React from 'react';
import '../style/containers.css'

export default class Temperature extends React.Component {
    constructor(props) {
      super(props);
      console.log("App starts here")
      var xInterval = null;
      this.state = {
        isLoading: true,
        display: "",
        count: 1
      }
      setInterval(() => {
        console.log("interval")
      }, 1000);
    }

    async getDataFromJSON() {
      try {
        let response = await fetch('http://localhost:8080/temperature.json'); // path to json-file
        let responseJson = await response.json();
        return responseJson.data.allArduinos.edges[0].node.temperature;       // path to temperature value
      } catch(error) {
        console.error(error);
        return "😢";
      }
    }

    render()
    {
      this.getDataFromJSON().then((response) => {
        var data = response;
        this.setState ({
          isLoading: false,
          display: data,
          count: this.state.count
        })
      }, (error) => {
        console.error(error);
      });
      if(this.state.isLoading)
      {
        return (
            <div>Loading...</div>
        )
      }
      var display = this.state.display;
      return (
        <div className="value">{display}°C</div>
      )
    }
}