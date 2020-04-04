import axios from 'axios';

import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
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
      selectedVideoCount: 5,
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
      url: 'http://hugsoulbackend-env.eba-hbpvup7p.us-east-2.elasticbeanstalk.com/videos',
      responseType: 'json',
      params: {
        category: this.state.selectedChannel,
        regionCode: this.state.selectedCountry,
        languageCode: this.state.selectedLanguage,
        publishedDate: this.state.selectedDate,
        maxResults: this.state.selectedVideoCount
      }
    }).then(function (response) {
      // handle success
      console.log(response);
      component.onPlaylistChange(`https://www.youtube.com/embed/${response.data.items[0].id.videoId}`);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
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
        <Container>
          <Row>
            <Col>
              <VideoCountTuner onSelectedVideoCountChange={this.onSelectedVideoCountChange} />
              <CountryTuner onSelectedCountryChange={this.onSelectedCountryChange} />
            </Col>
            <Col>
              <DateTuner onSelectedDateChange={this.onSelectedDateChange} />
              <LanguageTuner onSelectedLanguageChange={this.onSelectedLanguageChange} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Control;
