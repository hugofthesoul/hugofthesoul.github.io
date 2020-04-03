import axios from 'axios';

import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import ChannelTuner from './ChannelTuner';
import CountryTuner from './CountryTuner';
import DateTuner from './DateTuner';
import LanguageTuner from './LanguageTuner';
import VideoCountTuner from './VideoCountTuner';

import countries from '../data/countries.json';
import search from '../data/search.json';

class Control extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      selectedCountry: "us",
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
          <ChannelTuner onSelectedChannelChange={this.onSelectedChannelChange} />
          <Container>
            <Row>
              <Col>
                <VideoCountTuner />
                <CountryTuner onSelectedCountryChange={this.onSelectedCountryChange} />
              </Col>
              <Col>
                <DateTuner />
                <LanguageTuner onSelectedLanguageChange={this.onSelectedLanguageChange} />
              </Col>
            </Row>
          </Container>
        </Card.Body>
      </Card>
    );
  }
}

export default Control;
