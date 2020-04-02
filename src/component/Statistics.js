import React from 'react';

import Card from 'react-bootstrap/Card';

class Statistics extends React.Component {
  render(){
    console.log(this.props.statistics);

    return (
      <Card>
        <Card.Header>Good News</Card.Header>
        <Card.Title>{this.props.statistics} recovered</Card.Title>
      </Card>
    );
  }
}

export default Statistics;
