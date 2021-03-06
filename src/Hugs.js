import React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faPeopleCarry,
  faPray
} from '@fortawesome/free-solid-svg-icons'

import {
  faWhatsapp
} from '@fortawesome/free-brands-svg-icons'

import './Hugs.scss';

class Hugs extends React.Component {
  render(){
    return (
      <Container className="hugs">
        <Row>
          <Col xs={12} sm={8}>
            <h1 className="title">Supporters</h1>
          </Col>
          <Col xs={0} sm={4}>
            <h2>&nbsp;</h2>
          </Col>
        </Row>
        <Row className="mb-4">
          <Col xs={12} sm={8}>
            <h2 className="title"><FontAwesomeIcon icon={faPray} fixedWidth /> Roger</h2>
            <p className="text-orange">
              Happy for you to call me and I'll pray for you.
            </p>
            <Button><FontAwesomeIcon icon={faWhatsapp} fixedWidth /> Connect</Button>
          </Col>
          <Col xs={0} sm={4}>
            <h2>&nbsp;</h2>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={8}>
            <h2 className="title"><FontAwesomeIcon icon={faPeopleCarry} fixedWidth /> Rommy</h2>
            <p className="text-orange">
              I'd love to hear about your day. Keep going!
            </p>
            <Button><FontAwesomeIcon icon={faWhatsapp} fixedWidth /> Connect</Button>
          </Col>
          <Col xs={0} sm={4}>
            <h2>&nbsp;</h2>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Hugs;
