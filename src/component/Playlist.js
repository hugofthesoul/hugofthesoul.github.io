import React from 'react';

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Playlist extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      start: 0
    };
  }

  render(){
    return (
      <Container>
        <Row>
          <Col width="20%">
            <Card>
                {this.props.videos.length - this.state.start > 0 &&
                  <img alt={this.props.videos[this.state.start].snippet.title}
                       src={this.props.videos[this.state.start].snippet.thumbnails.default.url}
                       width="100%" height="100%"
                       onClick={() => this.props.onVideoChange(this.state.start)} />}
            </Card>
          </Col>
          <Col width="20%">
            <Card>
                {this.props.videos.length - this.state.start > 1 &&
                  <img alt={this.props.videos[this.state.start + 1].snippet.title}
                       src={this.props.videos[this.state.start + 1].snippet.thumbnails.default.url}
                       width="100%" height="100%"
                       onClick={() => this.props.onVideoChange(this.state.start + 1)} />}
            </Card>
          </Col>
          <Col width="20%">
            <Card>
                {this.props.videos.length - this.state.start > 2 &&
                  <img alt={this.props.videos[this.state.start + 2].snippet.title}
                       src={this.props.videos[this.state.start + 2].snippet.thumbnails.default.url}
                       width="100%" height="100%"
                       onClick={() => this.props.onVideoChange(this.state.start + 2)} />}
            </Card>
          </Col>
          <Col width="20%">
            <Card>
                {this.props.videos.length - this.state.start > 3 &&
                  <img alt={this.props.videos[this.state.start + 3].snippet.title}
                       src={this.props.videos[this.state.start + 3].snippet.thumbnails.default.url}
                       width="100%" height="100%"
                       onClick={() => this.props.onVideoChange(this.state.start + 3)} />}
            </Card>
          </Col>
          <Col width="20%">
            <Card>
                {this.props.videos.length - this.state.start > 4 &&
                  <img alt={this.props.videos[this.state.start + 4].snippet.title}
                       src={this.props.videos[this.state.start + 4].snippet.thumbnails.default.url}
                       width="100%" height="100%"
                       onClick={() => this.props.onVideoChange(this.state.start + 4)} />}
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Playlist;
