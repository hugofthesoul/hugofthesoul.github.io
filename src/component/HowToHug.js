import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class HowToHug extends React.Component {
  render(){
    return (
      <div>
        <Container>
          <Row>
            <Col md={6}>
              <Card>
                <Card.Text>Wanna see your video here? Learn how to do it.</Card.Text>
              </Card>
            </Col>
            <Col md={6}>
              <Button>HOW TO HUG</Button>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default HowToHug;
