import React from 'react';
import Card from 'react-bootstrap/Card';

import './Hospital.scss'

class Hospital extends React.Component {
  render(){
    return (
      <div className="hospital">
        <h2 className="title">@Hospital</h2>
        <Card>
          <Card.Text>Let me know what you want me to put for you.</Card.Text>
          <Card.Subtitle><i>- Jay</i></Card.Subtitle>
        </Card>
        <Card>
          <Card.Text>Let me know what you want me to put for you.</Card.Text>
          <Card.Subtitle><i>- Jermaine</i></Card.Subtitle>
        </Card>
        <Card>
          <Card.Text>Let me know what you want me to put for you.</Card.Text>
          <Card.Subtitle><i>- Kersing</i></Card.Subtitle>
        </Card>
        <Card>
          <Card.Text>Let me know what you want me to put for you. In German?</Card.Text>
          <Card.Subtitle><i>- Mattias</i></Card.Subtitle>
        </Card>
        <Card>
          <Card.Text>We give hope because we have hope.</Card.Text>
          <Card.Subtitle><i>- Peter</i></Card.Subtitle>
        </Card>
        <Card>
          <Card.Text>Let me know what you want me to put for you.</Card.Text>
          <Card.Subtitle><i>- Pratyoosh</i></Card.Subtitle>
        </Card>
        <Card>
          <Card.Text>Let me know what you want me to put for you. In spanish?</Card.Text>
          <Card.Subtitle><i>- Rommy</i></Card.Subtitle>
        </Card>
      </div>
    );
  }
}

export default Hospital;
