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

    this.state = {
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
    if (this.state.start < this.props.videos.length - 5){
      this.setState({ start: this.state.start + 1 });
    }
  }

  render(){
    return (
      <Container>
        <Row>
          <Col md={1} onClick={this.scrollLeft} className="hos-playlist-btn">
            <FontAwesomeIcon icon={faArrowCircleLeft} size="2x" fixedWidth />
          </Col>
          <Col md={2}>
            <Card>
                {this.props.videos.length - this.state.start > 0 &&
                  <img alt={this.props.videos[this.state.start].snippet.title}
                       src={this.props.videos[this.state.start].snippet.thumbnails.default.url}
                       width="100%" height="100%"
                       onClick={() => this.props.onVideoChange(this.state.start)} />}
            </Card>
          </Col>
          <Col md={2}>
            <Card>
                {this.props.videos.length - this.state.start > 1 &&
                  <img alt={this.props.videos[this.state.start + 1].snippet.title}
                       src={this.props.videos[this.state.start + 1].snippet.thumbnails.default.url}
                       width="100%" height="100%"
                       onClick={() => this.props.onVideoChange(this.state.start + 1)} />}
            </Card>
          </Col>
          <Col md={2}>
            <Card>
                {this.props.videos.length - this.state.start > 2 &&
                  <img alt={this.props.videos[this.state.start + 2].snippet.title}
                       src={this.props.videos[this.state.start + 2].snippet.thumbnails.default.url}
                       width="100%" height="100%"
                       onClick={() => this.props.onVideoChange(this.state.start + 2)} />}
            </Card>
          </Col>
          <Col md={2}>
            <Card>
                {this.props.videos.length - this.state.start > 3 &&
                  <img alt={this.props.videos[this.state.start + 3].snippet.title}
                       src={this.props.videos[this.state.start + 3].snippet.thumbnails.default.url}
                       width="100%" height="100%"
                       onClick={() => this.props.onVideoChange(this.state.start + 3)} />}
            </Card>
          </Col>
          <Col md={2}>
            <Card>
                {this.props.videos.length - this.state.start > 4 &&
                  <img alt={this.props.videos[this.state.start + 4].snippet.title}
                       src={this.props.videos[this.state.start + 4].snippet.thumbnails.default.url}
                       width="100%" height="100%"
                       onClick={() => this.props.onVideoChange(this.state.start + 4)} />}
            </Card>
          </Col>
          <Col md={1} onClick={this.scrollRight} className="hos-playlist-btn">
            <FontAwesomeIcon icon={faArrowCircleRight} size="2x" fixedWidth />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Playlist;
