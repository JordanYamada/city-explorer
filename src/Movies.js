import React from "react";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';


class Movies extends React.Component {



  render() {
    return (
<>
{
this.props.error
              ?
              <p>{this.props.errorMessage}</p>
              :
              <Col>
            <Card className="h-100" style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>Title: {this.props.movieData.title}</Card.Title>
                <Card.Img variant="top" src={this.props.movieData.img} alt={this.props.movieData.title}/>
                <Card.Text>{`Overview: ${this.props.movieData.overview}`}</Card.Text>
              </Card.Body>
            </Card>
            </Col>
  }
</>

    )
  };

}






export default Movies;