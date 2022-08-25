import React from "react";
import axios from 'axios';
import Main from './Main.js'
import './App.css';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      cityData: {},
      showMap: true,
      weatherData: {},
      showForeCast: true,
      error: false,
      errorMessage: '',
      map: '',
    }
  }

  handleInput = (e) => {
    let city = e.target.value;
    this.setState({
      city: city
    });
  };

//  urlWeather = `${process.env.REACT_APP_SERVER}/weather?city_name=${this.state.input}&format=json`;


  handleSubmit = (e) => {
    e.preventDefault();
    this.helpMap();
    this.helpWeather();
  };


  helpMap = async () => {
    try {
      let response = await axios.get(
        `https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.city}&format=json`
      );

      this.setState({
        error: false,
        showMap: false,
        cityData: response.data[0],
        map: `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${response.data[0].lat},${response.data[0].lon}&zoom=20`,
      });
    } catch (error) {
      this.setState({
        error: true,
        errorMessage: `An Error Occurred: ${error.response.status}`,
      });
      console.log(error);
      console.log(error.response.status)
    }
  }

  helpWeather =async () => {
    try {
       let urlWeather = `${process.env.REACT_APP_SERVER}/weather?city_name=${this.state.city}&format=json`;
      //  console.log(this.state);
       console.log(urlWeather);
      let response = await axios.get(urlWeather
      );
      console.log(response);

      this.setState({
        error: false,
        showForecast: false,
        weatherData: response.data[0],
      });
    } catch (error) {
      this.setState({
        error: true,
        errorMessage: `An Error Occurred: ${error.response.status}`,
      });
      console.log(error);
      console.log(error.response.status)
    }

  }


  render() {
    return (

        <Main
        handleInput = {this.handleInput}
        handleSubmit = {this.handleSubmit}
        city = {this.state.city}
        cityData = {this.state.cityData}
        showMap = {this.state.showMap}
        error = {this.state.error}
        errorMessage = {this.state.errorMessage}
        map = {this.state.map}
        weatherData = {this.state.weatherData}
        showForecast = {this.state.showForeCast}
        />
             
        
    );
  
}
}

export default App;
