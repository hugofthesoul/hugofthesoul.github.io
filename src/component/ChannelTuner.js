import React from 'react';

import Card from 'react-bootstrap/Card';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faDove,
  faUserMd, 
  faHandsHelping,
  faHeart
} from '@fortawesome/free-solid-svg-icons'

class ChannelTuner extends React.Component {
  render(){
    return (
      <Card>
        <Card.Body>
          <ToggleButtonGroup name="channel" type="radio" onChange={this.props.onSelectedChannelChange}>
            <ToggleButton value="gratitude" size="lg" title="Gratitude">
              <FontAwesomeIcon icon={faHandsHelping} />
            </ToggleButton>
            <ToggleButton value="kindness" size="lg" title="Kindness">
              <FontAwesomeIcon icon={faHeart} />
            </ToggleButton>
            <ToggleButton value="miracle" size="lg" title="Miracles">
              <FontAwesomeIcon icon={faDove} />
            </ToggleButton>
            <ToggleButton value="doctors" size="lg" title="Doctors">
              <FontAwesomeIcon icon={faUserMd} />
            </ToggleButton>
          </ToggleButtonGroup>
        </Card.Body>
      </Card>
    );
  }
}

export default ChannelTuner;
