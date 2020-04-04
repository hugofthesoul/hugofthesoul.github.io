import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import './Hugs.scss'

class Hugs extends React.Component {
  render(){
    return (
      <div className="hugs">
        <h2 className="title">Supporters</h2>
        <Card>
          <Card.Text>Rommy would love to hear from you!</Card.Text>
          <Card.Subtitle><Button>Connect</Button></Card.Subtitle>
        </Card>
      </div>
    );
  }
}

export default Hugs;
