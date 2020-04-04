import React from 'react';

import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import './ChannelTuner.scss'

class ChannelTuner extends React.Component {
  handleToggle = (evt) => {
    this.props.onSelectedChannelChange(evt.currentTarget.value)
  }

  render(){
    return (
      <Accordion bsPrefix="channel-tuner-accordion" defaultActiveKey="0">
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} value="gratitude" onClick={this.handleToggle} variant="link" eventKey="0">
              Channel
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>This is a description of the channel. This is a description of the channel. This is a description of the channel.</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} value="kindness" onClick={this.handleToggle} variant="link" eventKey="1">
              Kindness
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>This is a description of the channel. This is a description of the channel. This is a description of the channel.</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} value="miracle" onClick={this.handleToggle} variant="link" eventKey="2">
              Miracle
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="2">
            <Card.Body>This is a description of the channel. This is a description of the channel. This is a description of the channel.</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} value="doctors" onClick={this.handleToggle} variant="link" eventKey="3">
              Doctors
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="3">
            <Card.Body>This is a description of the channel. This is a description of the channel. This is a description of the channel.</Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    );
  }
}

export default ChannelTuner;
