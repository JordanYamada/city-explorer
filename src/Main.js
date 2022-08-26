import React from "react";
import Weather from './Weather.js';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';



class Main extends React.Component {



  render() {

    let weatherArr = this.props.weatherData.map((weather, idx) => {
      return (<Weather
        key={idx}
        showForecast = {this.props.showForeCast}
        error = {this.props.error}
        errorMessage = {this.props.errorMessage}
        handleSubmit = {this.props.handleSubmit}
        weatherData={weather}
      />);
    });

    return (
      <>
        <Form onSubmit={this.props.handleSubmit}>
          <Form.Group className="mb-3" controlId="city">
            <Form.Label>Choose a city</Form.Label>
            <Form.Control
              aria-label="Default select example"
              type="text"
              name="city"
              onInput={this.props.handleInput} />
          </Form.Group>
          <Button
            variant="primary"
            type="submit">
            Explore!
          </Button>
        </Form>
        
        {
          this.props.showMap
            ?
            <p>{'Give it a try!'}</p>

            :

            this.props.error
              ?
              <p>{this.props.errorMessage}</p>
              :
            <Card>
              <Card.Body>
                <Card.Title>Location: {this.props.cityData.display_name}</Card.Title>
                <Card.Img src={this.props.map} />
                <Card.Text>{`Latitude: ${this.props.cityData.lat}`}</Card.Text>
                <Card.Text>{`Longitude: ${this.props.cityData.lon}`}</Card.Text>
              </Card.Body>
            </Card>


        }
        {weatherArr}
      </>
    )
  }
}

export default Main;