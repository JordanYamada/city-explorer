import React from "react";
import Card from 'react-bootstrap/Card';


class Weather extends React.Component {



  render() {
    return (
<>
{
this.props.error
              ?
              <p>{this.props.errorMessage}</p>
              :
            <Card>
              <Card.Body>
                <Card.Title>Date: {this.props.weatherData.date}</Card.Title>
                <Card.Text>{`High Temp: ${this.props.weatherData.description}`}</Card.Text>
                <Card.Text>{`High Temp: ${this.props.weatherData.highTemp}`}</Card.Text>
                <Card.Text>{`Low Temp: ${this.props.weatherData.lowTemp}`}</Card.Text>
              </Card.Body>
            </Card>
  }
</>

    )
  };

}






export default Weather;