import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Control from './component/Control';
import HowToHug from './component/HowToHug';
import Playlist from './component/Playlist';
import Screen from './component/Screen';
import Statistics from './component/Statistics';

import './App.scss'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      videos: [],
      selectedVideo: 0,
      statistics: 0
    };
  }

  onPlaylistChange = (results) => {
    this.setState({ videos: results })
  }

  onStatisticsChange = (results) => {
    this.setState({ statistics: results })
  }

  render(){
    return (
      <Container className="App">
        <Row className="row justify-content-sm-center">
          <Col md={8} lg={8}>
            {this.state.videos.length > 0 &&
              <Screen embedUrl={`https://www.youtube.com/embed/${this.state.videos[this.state.selectedVideo].snippet.resourceId.videoId}`} />}
            <Statistics statistics={this.state.statistics} />
            <Playlist />
          </Col>
          <Col md={4} lg={4}>
            <Control onPlaylistChange={this.onPlaylistChange}
                     onStatisticsChange={this.onStatisticsChange} />
            <HowToHug />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
