import React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';

import './HowToHug.scss';

class HowToHug extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      show: false
    };
  }

  setShow = (item) => {
    this.setState({ show: item });
  }

  render(){
    const handleClose = () => this.setShow(false);
    const handleShow = () => this.setShow(true);

    return (
      <div className="hug-howto-section">
        <Row>
          <Col md={5}>
            <p className="lead">
              Wanna see your video here? Learn how to do it.
            </p>
          </Col>
          <Col md={7}>
            <Button variant="default" onClick={handleShow}>HOW TO HUG</Button>
          </Col>
        </Row>

        <Modal show={this.state.show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>How to Hug</Modal.Title>
          </Modal.Header>
          <Modal.Body>1. Upload your video to YouTube
                 <br/>2. Send us the link: hugofthesoul@gmail.com
                 <br/>3. If doctors like your video it will appear
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default HowToHug;
