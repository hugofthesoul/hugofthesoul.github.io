import React from 'react';

import Card from 'react-bootstrap/Card';

class LanguagePicker extends React.Component {
  render(){
    return (
      <Card>
        <Card.Body>
          <Card.Text>
            Language
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default LanguagePicker;
