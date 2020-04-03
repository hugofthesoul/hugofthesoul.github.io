import axios from 'axios';

import React from 'react';

import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';

import countries from '../data/countries.json';
import search from '../data/search.json';

import boFlag from '../image/bolivia_640.png';
import caFlag from '../image/canada_640.png';
import enFlag from '../image/england_640.png';
import deFlag from '../image/germany_640.png';
import inFlag from '../image/india_640.png';
import esFlag from '../image/spain_640.png';
import gbFlag from '../image/united_kingdom_640.png';
import usFlag from '../image/united_states_of_america_640.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faDove,
  faUserMd, 
  faHandsHelping,
  faHeart
} from '@fortawesome/free-solid-svg-icons'

class Control extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      selectedCountry: "ca",
      selectedLanguage: "en"
    };

    this.getStatistics();
    this.onStatisticsChange = props.onStatisticsChange;
    this.onVideoChange = props.onVideoChange;

    this.onSelectedChannelChange = this.onSelectedChannelChange.bind(this);
    this.onSelectedCountryChange = this.onSelectedCountryChange.bind(this);
    this.onSelectedLanguageChange = this.onSelectedLanguageChange.bind(this);
  }

  onSelectedChannelChange(item){
    var component = this;

    var searchTerm = search[this.state.selectedLanguage][item];

    axios({
      method: 'get',
      url: 'http://hugsoulbackend-env.eba-hbpvup7p.us-east-2.elasticbeanstalk.com/videos',
      responseType: 'json',
      params: {
        category: searchTerm,
        regionCode: this.state.selectedCountry,
        maxResults: 1
      }
    }).then(function (response) {
      // handle success
      console.log(response);
      component.onVideoChange(`https://www.youtube.com/embed/${response.data.items[0].id.videoId}`);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
  }

  onSelectedCountryChange(item){
    this.setState({ selectedCountry: item },
                  () => this.getStatistics());
  }

  getStatistics(){
    var component = this;

    var country = "";
    for (var i in countries){
      if (countries[i].code === component.state.selectedCountry){
        country = countries[i].name;
      }
    }

    axios({
      method: 'get',
      url: 'https://api.covid19api.com/summary',
      responseType: 'json'
    }).then(function (response) {
      // handle success
      for (var i in response.data.Countries){
        if (response.data.Countries[i].Country === country){
          component.onStatisticsChange(response.data.Countries[i].TotalRecovered);
        }
      }
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
  }

  onSelectedLanguageChange(item){
    this.setState({ selectedLanguage: item });
  }

  render(){
    return (
      <Card>
        <Card.Body>
          <Card.Title>Remote Control</Card.Title>
          <Card.Text>Try out our channels</Card.Text>
          <ToggleButtonGroup name="channel" type="radio" onChange={this.onSelectedChannelChange}>
            <ToggleButton value="gratitude" size="lg" title="Gratitude">
              <FontAwesomeIcon icon={faHandsHelping} />
            </ToggleButton>
            <ToggleButton value="kindness" size="lg" title="Kindness">
              <FontAwesomeIcon icon={faHeart} />
            </ToggleButton>
            <ToggleButton value="miracle" size="lg" title="Miracles">
              <FontAwesomeIcon icon={faDove} />
            </ToggleButton>
            <ToggleButton value="doctors" size="lg" title="Doctors">
              <FontAwesomeIcon icon={faUserMd} />
            </ToggleButton>
          </ToggleButtonGroup>

          <ToggleButtonGroup name="country" type="radio" onChange={this.onSelectedCountryChange}
                             defaultValue = "ca">
            <ToggleButton value="bo"><Image src={boFlag} height="20" /></ToggleButton>
            <ToggleButton value="ca"><Image src={caFlag} height="20" /></ToggleButton>
            <ToggleButton value="de"><Image src={deFlag} height="20" /></ToggleButton>
            <ToggleButton value="in"><Image src={inFlag} height="20" /></ToggleButton>
            <ToggleButton value="gb"><Image src={gbFlag} height="20" /></ToggleButton>
            <ToggleButton value="us"><Image src={usFlag} height="20" /></ToggleButton>
          </ToggleButtonGroup>

          <ToggleButtonGroup name="language" type="radio" onChange={this.onSelectedLanguageChange}
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

export default Control;