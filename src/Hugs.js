import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

import './Hugs.scss'

class Hugs extends React.Component {
  render(){
    return (
      <Container className="hugs">
        <h1 className="title">Supporters</h1>
        <Card>
          <Card.Text>Rommy would love to hear from you!</Card.Text>
          <Card.Subtitle><Button>Connect</Button></Card.Subtitle>
        </Card>
      </Container>
    );
  }
}

export default Hugs;
