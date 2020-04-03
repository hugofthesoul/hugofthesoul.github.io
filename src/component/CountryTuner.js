import React from 'react';

import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';

import boFlag from '../image/bolivia_640.png';
import deFlag from '../image/germany_640.png';
import inFlag from '../image/india_640.png';
import gbFlag from '../image/united_kingdom_640.png';
import usFlag from '../image/united_states_of_america_640.png';

class CountryTuner extends React.Component {
  render(){
    return (
      <Card>
        <Card.Body>
          <ToggleButtonGroup name="country" type="radio" onChange={this.props.onSelectedCountryChange}
                             defaultValue = "us">
            <ToggleButton value="bo"><Image src={boFlag} height="20" /></ToggleButton>
            <ToggleButton value="de"><Image src={deFlag} height="20" /></ToggleButton>
            <ToggleButton value="in"><Image src={inFlag} height="20" /></ToggleButton>
            <ToggleButton value="gb"><Image src={gbFlag} height="20" /></ToggleButton>
            <ToggleButton value="us"><Image src={usFlag} height="20" /></ToggleButton>
          </ToggleButtonGroup>
        </Card.Body>
      </Card>
    );
  }
}

export default CountryTuner;
