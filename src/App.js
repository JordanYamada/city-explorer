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

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let response = await axios.get(
        `https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.city}&format=json`
      );

      this.setState({
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
  };

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
        />
             
        
    );
  
}
}

export default App;
