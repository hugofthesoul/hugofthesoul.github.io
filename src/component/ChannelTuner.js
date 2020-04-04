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
              GRATITUDE
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>A channel with the latest news about acts of gratitude towards doctors all over the world. From concerts to hand clapping, praying and sending meals or food. Lighting buildings or monuments in your honor.
                  <br/>Doctors/Nurses: This is the place that gathers citizen’s appreciation. We cannot be with you physically but we send you hugs from the soul. Remember someone is thinking about you and cheering you on every minute.
                  <br/>Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God. And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus.
                  <br/>Philippians 4:6-7</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} value="kindness" onClick={this.handleToggle} variant="link" eventKey="1">
              KINDNESS
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>Normal news focuses in the worst side of people during crisis. We focus on heart warming acts of kindness, helping strangers, helping each other.
                  <br/>Using creativity, talent, skills and good will to find solutions to problems. Seeing opportunities in the crisis instead of despair. From helping elders and ill people with their errands, helping the poor with food, making medical supply with local resources and so much more. Get inspired, then help others.
                  <br/>It is more blessed to give than to receive.
                  <br/>Acts 20:35</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} value="miracle" onClick={this.handleToggle} variant="link" eventKey="2">
              MIRACLES
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="2">
            <Card.Body>Miracles happen every day, every moment, only that people are too busy to notice. Let us share just a little sample of the wonders happening all over the world. People recovering against all odds, prayers answered, supplies provided super naturally, people transformed, people resilience, people changing for good.
                  <br/>Doctors/Nurses: rest in the fact that you did all within your strength, let God to give you peace in the storm.
                  <br/>For nothing will be impossible with God.
                  <br/>Luke 1:37</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} value="doctors" onClick={this.handleToggle} variant="link" eventKey="3">
              DOCTORS
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
