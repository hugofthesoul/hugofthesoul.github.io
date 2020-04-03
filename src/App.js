import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Control from './component/Control';
import CountryPicker from './component/CountryPicker';
import DatePicker from './component/DatePicker';
import HowToHug from './component/HowToHug';
import LanguagePicker from './component/LanguagePicker';
import Playlist from './component/Playlist';
import Screen from './component/Screen';
import Statistics from './component/Statistics';
import Tuner from './component/Tuner';

import './App.scss';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      embedUrl : "",
      statistics: 0,
      searchResults: { 
        videos: [] 
      }
    };

    this.onVideoChange = this.onVideoChange.bind(this);
    this.onStatisticsChange = this.onStatisticsChange.bind(this);
    this.onSearchResultsChange = this.onSearchResultsChange.bind(this);
  }

  onVideoChange(results){
    this.setState({ embedUrl: results })
  }

  onStatisticsChange(results){
    this.setState({ statistics: results })
  }

  onSearchResultsChange(results){
    this.setState({ searchResults: results })
  }

  render(){
    return (
      <Container className="App">
        <Row className="row justify-content-sm-center">
          <Col md={8} lg={8}>
            <Screen embedUrl={this.state.embedUrl} />
            <Statistics statistics={this.state.statistics} />
            <Playlist />
          </Col>
          <Col md={4} lg={4}>
            <Control onVideoChange={this.onVideoChange}
                     onStatisticsChange={this.onStatisticsChange} />
            <Row>
              <Col>
                <Tuner />
                <CountryPicker />
              </Col>
              <Col>
                <DatePicker />
                <LanguagePicker />
              </Col>
            </Row>
            <HowToHug />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
