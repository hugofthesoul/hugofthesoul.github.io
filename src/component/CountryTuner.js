import React from 'react';

import Dropdown from 'react-bootstrap/Dropdown';
import Image from 'react-bootstrap/Image';

import boFlag from '../image/bolivia_640.png';
import deFlag from '../image/germany_640.png';
import inFlag from '../image/india_640.png';
import gbFlag from '../image/united_kingdom_640.png';
import usFlag from '../image/united_states_of_america_640.png';

import './DropdownToggle.scss';

import countries from '../data/countries.json';

class CountryTuner extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      selectedCountryCode: "us",
      selectedCountryName: "United States"
    };
  }

  onSelectedCountryChange = (item) => {
    var countryName = "";
    for (var i in countries){
      if (countries[i].code === item){
        countryName = countries[i].name;
      }
    }

    this.setState({ selectedCountryCode: item, selectedCountryName: countryName },
                  () => this.props.onSelectedCountryChange(item));
  }

  render(){
    return (
      <div className="hug-dropdown-toggle">
        <Dropdown onSelect={this.onSelectedCountryChange}>
          <Dropdown.Toggle variant="default">
            {this.state.selectedCountryName}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item eventKey="bo"><Image src={boFlag} height="20" /> Bolivia</Dropdown.Item>
            <Dropdown.Item eventKey="de"><Image src={deFlag} height="20" /> Germany</Dropdown.Item>
            <Dropdown.Item eventKey="in"><Image src={inFlag} height="20" /> India</Dropdown.Item>
            <Dropdown.Item eventKey="gb"><Image src={gbFlag} height="20" /> United Kingdom</Dropdown.Item>
            <Dropdown.Item eventKey="us"><Image src={usFlag} height="20" /> United States</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    );
  }
}

export default CountryTuner;
