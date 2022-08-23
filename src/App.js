import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import './App.css';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      cityData: {},
      showMap: true,
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
        error: false,
        errorMessage: `An Error Occurred: ${error.response.status}`,
      });
      console.log(error);
    }
  };

  render() {
    return (
      <>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group className="mb-3" controlId="city">
            <Form.Label>Choose a city</Form.Label>
            <Form.Control
              aria-label="Default select example"
              type="text"
              name="city"
              onInput={this.handleInput} />
          </Form.Group>
          <Button
            variant="primary"
            type="submit">
            Explore!
          </Button>
        </Form>
        {
          this.state.showMap 
          ?
          <p>{'Give it a try!'}</p>
        
          :   
           
          this.state.error
            ?
            <p>{this.state.errorMessage}</p>
            :
            <Card>
              <Card.Body>
                <Card.Title>{this.state.cityData.display_name}</Card.Title>
                <Card.Img src={this.state.map} />
                <Card.Text>{`Latitude: ${this.state.cityData.lat}`}</Card.Text>
                <Card.Text>{`Longitude: ${this.state.cityData.lon}`}</Card.Text>
              </Card.Body>
            </Card>
             
        }
      </>
    );
  }
}

export default App;
