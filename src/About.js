import React from 'react';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

class About extends React.Component {

  render(){
    return (
      <Container>
        <Row>
          <Col>
            <h2>About</h2>
            <p>Explain what this app does</p>
          </Col>
        </Row>
      </Container>
    );
  }

}

export default About;