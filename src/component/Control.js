import axios from 'axios';

import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import ChannelTuner from './ChannelTuner';
import CountryTuner from './CountryTuner';
import DateTuner from './DateTuner';
import LanguageTuner from './LanguageTuner';
import VideoCountTuner from './VideoCountTuner';

import countries from '../data/countries.json';

class Control extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      selectedChannel: "gratitude",
      selectedVideoCount: 10,
      selectedDate: new Date(),
      selectedCountry: "us",
      selectedLanguage: "en"
    };

    this.getPlaylist();
    this.getStatistics();

    this.onPlaylistChange = props.onPlaylistChange;
    this.onStatisticsChange = props.onStatisticsChange;
  }

  getPlaylist(){
    var component = this;

    axios({
      method: 'get',
      url: 'https://hug-of-soul.herokuapp.com/videos',
      responseType: 'json',
      params: {
        category: this.state.selectedChannel,
        countryCode: this.state.selectedCountry,
        languageCode: this.state.selectedLanguage,
        publishedDate: this.state.selectedDate,
        maxResults: this.state.selectedVideoCount
      }
    }).then(function (response) {
      // handle success
      console.log(response);
      component.onPlaylistChange(response.data.items);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
  }

  getStatistics(){
    var component = this;

    var countryCode = "";
    for (var i in countries){
      if (countries[i].code === component.state.selectedCountry){
        countryCode = countries[i].stat;
      }
    }

    axios({
      method: 'get',
      url: 'https://api.covid19api.com/summary',
      responseType: 'json'
    }).then(function (response) {
      // handle success
      for (var i in response.data.Countries){
        if (response.data.Countries[i].CountryCode === countryCode){
          component.onStatisticsChange(response.data.Countries[i].TotalRecovered);
        }
      }
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
  }

  onSelectedChannelChange = (item) => {
    this.setState({ selectedChannel: item },
                  () => this.getPlaylist());
  }

  onSelectedVideoCountChange = (item) => {
    this.setState({ selectedVideoCount: item });
  }

  onSelectedDateChange = (item) => {
    this.setState({ selectedDate: item });
  }

  onSelectedCountryChange = (item) => {
    this.setState({ selectedCountry: item },
                  () => {
                    this.getPlaylist();
                    this.getStatistics();
                  });
  }

  onSelectedLanguageChange = (item) => {
    this.setState({ selectedLanguage: item },
                  () => this.getPlaylist());
  }

  render(){
    return (
      <div>
        <ChannelTuner onSelectedChannelChange={this.onSelectedChannelChange} />
        <Row className="mb-3">
          <Col xs={6}>
            <VideoCountTuner onSelectedVideoCountChange={this.onSelectedVideoCountChange} />
          </Col>
          <Col xs={6}>
            <DateTuner onSelectedDateChange={this.onSelectedDateChange} />
          </Col>
        </Row>
        <Row className="mb-3">
          <Col xs={6}>
            <CountryTuner onSelectedCountryChange={this.onSelectedCountryChange} />
          </Col>
          <Col xs={6}>
            <LanguageTuner onSelectedLanguageChange={this.onSelectedLanguageChange} />
          </Col>
        </Row>
      </div>
    );
  }
}

export default Control;
