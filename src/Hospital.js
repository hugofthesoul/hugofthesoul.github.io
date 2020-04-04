import React from 'react';
import Card from 'react-bootstrap/Card';

class Hospital extends React.Component {
  render(){
    return (
      <div>
        <h2>@Hospital</h2>
        <Card>
          <Card.Text>We care for you and we are praying for you</Card.Text>
          <Card.Subtitle><i>- Rommy</i></Card.Subtitle>
        </Card>
        <Card>
          <Card.Text>We can give hope because we have hope</Card.Text>
          <Card.Subtitle><i>- Peter</i></Card.Subtitle>
        </Card>
      </div>
    );
  }
}

export default Hospital;
