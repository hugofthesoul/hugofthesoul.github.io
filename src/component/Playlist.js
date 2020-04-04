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
              <Card.Body>
                <img />
              </Card.Body>
            </Card>
          </Col>
          <Col width="20%">
            <Card>
              <Card.Body>
                <img />
              </Card.Body>
            </Card>
          </Col>
          <Col width="20%">
            <Card>
              <Card.Body>
                <img />
              </Card.Body>
            </Card>
          </Col>
          <Col width="20%">
            <Card>
              <Card.Body>
                <img />
              </Card.Body>
            </Card>
          </Col>
          <Col width="20%">
            <Card>
              <Card.Body>
                <img />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Playlist;
