import React from 'react';

import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import './ChannelTuner.scss'

function HeaderToggle({ children, eventKey, value, onClick }) {

  const decoratedOnClick = useAccordionButton(eventKey, (event) =>{
    const category = event.currentTarget.value;    
    onClick(category);
  });

  return (
    <Accordion.Button 
      as={Button} 
      type="button"
      onClick={decoratedOnClick}
      variant="link"
      value={value}
    >
      {children}
    </Accordion.Button>
  );
}

class ChannelTuner extends React.Component {

  render() {
    return (
      <Accordion bsPrefix="channel-tuner-accordion" defaultActiveKey="0">
        <Card key="gratitude">
          <Card.Header>
            <HeaderToggle value="gratitude" eventKey="0" onClick={this.props.onSelectedChannelChange}>
              GRATITUDE
            </HeaderToggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <Card.Text>
                <p>A channel with the latest news about acts of gratitude towards doctors all over the world. From concerts to hand clapping, praying and sending meals or food. Lighting buildings or monuments in your honor.</p>
                <p>Doctors/Nurses: This is the place that gathers citizen’s appreciation. We cannot be with you physically but we send you hugs from the soul. Remember someone is thinking about you and cheering you on every minute.</p>
                <p>Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God. And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus. - Philippians 4:6-7</p>
              </Card.Text>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card key="kindness">
          <Card.Header>            
            <HeaderToggle value="kindness" eventKey="1"  onClick={this.props.onSelectedChannelChange}>
              KINDNESS
            </HeaderToggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              <Card.Text>
                <p>Normal news focuses in the worst side of people during crisis. We focus on heart warming acts of kindness, helping strangers, helping each other.</p>
                <p>Using creativity, talent, skills and good will to find solutions to problems. Seeing opportunities in the crisis instead of despair. From helping elders and ill people with their errands, helping the poor with food, making medical supply with local resources and so much more. Get inspired, then help others.</p>
                <p>It is more blessed to give than to receive. - Acts 20:35</p>
              </Card.Text>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card key="miracles">
          <Card.Header>
            <HeaderToggle  value="miracles" eventKey="2" onClick={this.props.onSelectedChannelChange}>
              MIRACLES
            </HeaderToggle>
          </Card.Header>
          <Accordion.Collapse eventKey="2">
            <Card.Body>
            <Card.Text>
              Miracles happen every day, every moment, only that people are too busy to notice. Let us share just a little sample of the wonders happening all over the world. People recovering against all odds, prayers answered, supplies provided super naturally, people transformed, people resilience, people changing for good.
              <p>Doctors/Nurses: rest in the fact that you did all within your strength, let God to give you peace in the storm.</p>
              <p>For nothing will be impossible with God. - Luke 1:37</p>
            </Card.Text>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card key="unity">
          <Card.Header>
            <HeaderToggle value="unity" eventKey="3" onClick={this.props.onSelectedChannelChange}>
              UNITY
            </HeaderToggle>
          </Card.Header>
          <Accordion.Collapse eventKey="3">
            <Card.Body>
              <Card.Text>
                <p>You are not alone. We fight together against COVID-19. Be encouraged and inspired by what other medical care providers are doing around the world.</p>
                <p>The Lord himself goes before you and will be with you; he will never leave you nor forsake you. Do not be afraid; do not be discouraged.” - Deuteronomy 31:8</p>
              </Card.Text>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    );
  }
}

export default ChannelTuner;
