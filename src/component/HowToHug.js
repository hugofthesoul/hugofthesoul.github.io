import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';

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
      <div>
        <Container>
          <Row>
            <Col md={6}>
              <Card>
                <Card.Text>Wanna see your video here? Learn how to do it.</Card.Text>
              </Card>
            </Col>
            <Col md={6}>
              <Button onClick={handleShow}>HOW TO HUG</Button>
            </Col>
          </Row>
        </Container>

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
