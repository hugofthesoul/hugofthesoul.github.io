import React from 'react';

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowCircleRight,
  faArrowCircleLeft
} from '@fortawesome/free-solid-svg-icons'

import './Playlist.scss';

class Playlist extends React.Component {
  constructor(props){
    super(props);

    var xs = window.innerWidth < 768;
    this.state = {
      size: xs ? 3 : 5,
      small: xs,
      start: 0
    };
  }

  scrollLeft = () =>
  {
    if (this.state.start > 0){
      this.setState({ start: this.state.start - 1 });
    }
  }

  scrollRight = () =>
  {
    if (this.state.start < this.props.videos.length - this.state.size){
      this.setState({ start: this.state.start + 1 });
    }
  }

  render(){
    var vids = []
    for (var i = this.state.start; i < this.state.start + this.state.size; i++)
    {
      vids.push(i);
    }

    var playlist = [];
    for (const vid in vids)
    {
      playlist.push(
      <Col xs={3} sm={2}>
        <Card>
            {this.props.videos.length > vids[vid] &&
              <img alt={this.props.videos[vids[vid]].snippet.title}
                  src={this.props.videos[vids[vid]].snippet.thumbnails.default.url}
                  width="100%" height="100%"
                  onClick={() => this.props.onVideoChange(vids[vid])} />}
        </Card>
      </Col>);
    }

    return (
      <Container>
        <Row>
          <Col xs={1} onClick={this.scrollLeft} className="hos-playlist-btn">
            <FontAwesomeIcon icon={faArrowCircleLeft} size={this.state.small ? "1x" : "2x"} fixedWidth />
          </Col>
          {playlist}
          <Col xs={1} onClick={this.scrollRight} className="hos-playlist-btn">
            <FontAwesomeIcon icon={faArrowCircleRight} size={this.state.small ? "1x" : "2x"} fixedWidth />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Playlist;
