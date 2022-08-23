import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import './App.css';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      cityData: {},
      error: false,
      errorMessage: ''
    }
  }

  handleInput = (e) => {
    let city = e.target.value;
    this.setState({
      city: city
    });
  };

  handleCitySubmit = async (e) => {
    e.preventDefault();
    let response = await axios.get(`https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.city}&format=json`);
    console.log(response.data[0]);
    // save that data in state
  }

  render (){
  return (
    <Form onSubmit={this.handleSubmit}>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Choose a city</Form.Label>
      <Form.Control aria-label="Default select example" onInput={this.handleInput}/>
    </Form.Group>
    <Button  variant="primary" type="submit">
      Submit
    </Button>
  </Form>
       );
}
}

export default App;
