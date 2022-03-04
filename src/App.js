import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Control from './component/Control';
import HowToHug from './component/HowToHug';
import Playlist from './component/Playlist';
import Screen from './component/Screen';
import NewsMarquee from './component/NewsMarquee';

import './App.scss'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      videos: [],
      selectedVideo: 0,
      totalRecovered: 0
    };
  }

  onPlaylistChange = (results) => {
    this.setState({ videos: results });
  }

  onVideoChange = (results) => {
    this.setState({ selectedVideo: results });
  }

  onStatisticsChange = (totalRecovered) => {
    this.setState({ totalRecovered: totalRecovered });
  }

  render(){
    return (
      <React.Fragment>
        <Container className="App">
          <Row className="row justify-content-sm-center">
            <Col xs={12} md={8} className="mb-4">
              {this.state.videos.length > 0 &&
                <Screen embedUrl={`https://www.youtube.com/embed/${this.state.videos[this.state.selectedVideo].snippet.resourceId.videoId}`} />}
              <NewsMarquee totalRecovered={this.state.totalRecovered} />
              <Playlist videos={this.state.videos} onVideoChange={this.onVideoChange}/>
            </Col>
            <Col xs={12} md={4} className="mb-4">
              <Control onPlaylistChange={this.onPlaylistChange}
                      onStatisticsChange={this.onStatisticsChange} />
              <HowToHug />
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default App;
