import React from 'react';

import Card from 'react-bootstrap/Card';

class Statistics extends React.Component {
  render(){
    return (
      <Card>
        <Card.Body>
          <Card.Title>Good News</Card.Title>
          <Card.Text>
            {this.props.statistics} recovered
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default Statistics;