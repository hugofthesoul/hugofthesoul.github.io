import axios from 'axios';

import React from 'react';

import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';

import search from '../data/search.json';

class Control extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      selectedCountry: "us",
      selectedLanguage: "en"
    };

    this.onVideoChange = props.onVideoChange;
    this.onSelectedChannelChange = this.onSelectedChannelChange.bind(this);
    this.onSelectedCountryChange = this.onSelectedCountryChange.bind(this);
    this.onSelectedLanguageChange = this.onSelectedLanguageChange.bind(this);
  }

  onSelectedChannelChange(item){
    var component = this;

    var searchTerm = search[this.state.selectedLanguage][item];
    console.log(searchTerm);

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
    this.setState({ selectedCountry: item });
  }

  onSelectedLanguageChange(item){
    this.setState({ selectedLanguage: item });
  }

  render(){
    return (
      <div className="control">
        <ToggleButtonGroup name="channel" type="radio" onChange={this.onSelectedChannelChange}>
          <ToggleButton value="gratitude" size="lg">Gratitude</ToggleButton>
          <ToggleButton value="kindness" size="lg">Kindness</ToggleButton>
          <br/>
          <ToggleButton value="miricle" size="lg">Miricle</ToggleButton>
          <ToggleButton value="doctors" size="lg">Doctors</ToggleButton>
          <br/>
        </ToggleButtonGroup>

        <ToggleButtonGroup name="country" type="radio" onChange={this.onSelectedCountryChange}>
          <ToggleButton value="bo">Bolivia</ToggleButton>
          <ToggleButton value="ca">Canada</ToggleButton>
          <ToggleButton value="de">Germany</ToggleButton>
          <ToggleButton value="in">India</ToggleButton>
          <ToggleButton value="gb">United Kingdom</ToggleButton>
          <ToggleButton value="us" defaultChecked>United States of America</ToggleButton>
        </ToggleButtonGroup>

        <ToggleButtonGroup name="language" type="radio" onChange={this.onSelectedLanguageChange}>
          <ToggleButton value="en" defaultChecked>English</ToggleButton>
          <ToggleButton value="de">German</ToggleButton>
          <ToggleButton value="es">Spanish</ToggleButton>
        </ToggleButtonGroup>
      </div>
    );
  }
}

export default Control;
