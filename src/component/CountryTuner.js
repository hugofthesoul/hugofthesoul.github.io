import React from 'react';

import Card from 'react-bootstrap/Card';
import Dropdown from 'react-bootstrap/Dropdown';
import Image from 'react-bootstrap/Image';

import boFlag from '../image/bolivia_640.png';
import deFlag from '../image/germany_640.png';
import inFlag from '../image/india_640.png';
import gbFlag from '../image/united_kingdom_640.png';
import usFlag from '../image/united_states_of_america_640.png';

class CountryTuner extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      selectedCountry: "us"
    };
  }

  onSelectedCountryChange = (item) => {
    this.setState({ selectedCountry: item },
                  () => this.props.onSelectedCountryChange(item));
  }

  render(){
    return (
      <Card>
        <Card.Body>
          <Dropdown onSelect={this.onSelectedCountryChange}>
            <Dropdown.Toggle>
              {this.state.selectedCountry}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item eventKey="bo"><Image src={boFlag} height="20" /></Dropdown.Item>
              <Dropdown.Item eventKey="de"><Image src={deFlag} height="20" /></Dropdown.Item>
              <Dropdown.Item eventKey="in"><Image src={inFlag} height="20" /></Dropdown.Item>
              <Dropdown.Item eventKey="gb"><Image src={gbFlag} height="20" /></Dropdown.Item>
              <Dropdown.Item eventKey="us"><Image src={usFlag} height="20" /></Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Card.Body>
      </Card>
    );
  }
}

export default CountryTuner;