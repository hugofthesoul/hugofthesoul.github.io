import React from 'react';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

class Hospital extends React.Component {
  render(){
    return (
      <Container>
        <Row>
          <Col>
            <h2>@Hospital</h2>
            <Card>
              <Card.Text>We care for you and we are praying for you</Card.Text>
              <Card.Subtitle><i>- Rommy</i></Card.Subtitle>
            </Card>
            <Card>
              <Card.Text>We can give hope because we have hope</Card.Text>
              <Card.Subtitle><i>- Peter</i></Card.Subtitle>
            </Card>
          </Col>
          <Col>
            <h2>Supporters</h2>
            <Card>
              <Card.Text>Rommy would love to hear from you!</Card.Text>
              <Card.Subtitle><Button>Connect</Button></Card.Subtitle>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Hospital;
