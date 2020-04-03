import React from 'react';

import Card from 'react-bootstrap/Card';

class CountryPicker extends React.Component {
  render(){
    return (
      <Card>
        <Card.Body>
          <Card.Text>
            Country
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default CountryPicker;
