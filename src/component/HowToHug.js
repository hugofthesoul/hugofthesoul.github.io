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
          <Modal.Body>
            <ol>
              <li>
                Upload your video to YouTube
              </li>
              <li>
                Send us the link: <a href="mailto:hugofthesoul@gmail.com">hugofthesoul@gmail.com</a>
              </li>
              <li>
                If doctors like your video then it will appear soon
              </li>
            </ol>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default HowToHug;
