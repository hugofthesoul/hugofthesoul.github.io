import React from 'react';

import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';

import enFlag from '../image/england_640.png';
import deFlag from '../image/germany_640.png';
import esFlag from '../image/spain_640.png';

class LanguageTuner extends React.Component {
  render(){
    return (
      <Card>
        <Card.Body>
          <ToggleButtonGroup name="language" type="radio" onChange={this.props.onSelectedLanguageChange}
                             defaultValue="en">
            <ToggleButton value="en"><Image src={enFlag} height="20" /></ToggleButton>
            <ToggleButton value="de"><Image src={deFlag} height="20" /></ToggleButton>
            <ToggleButton value="es"><Image src={esFlag} height="20" /></ToggleButton>
          </ToggleButtonGroup>
        </Card.Body>
      </Card>
    );
  }
}

export default LanguageTuner;
