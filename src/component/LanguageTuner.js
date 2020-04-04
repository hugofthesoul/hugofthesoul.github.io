import React from 'react';

import Dropdown from 'react-bootstrap/Dropdown';
import Image from 'react-bootstrap/Image';

import enFlag from '../image/england_640.png';
import deFlag from '../image/germany_640.png';
import esFlag from '../image/spain_640.png';

class LanguageTuner extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      selectedLanguage: "en"
    };
  }

  onSelectedLanguageChange = (item) => {
    this.setState({ selectedLanguage: item },
                  () => this.props.onSelectedLanguageChange(item));
  }

  render(){
    return (
      <div>
        <Dropdown onSelect={this.onSelectedLanguageChange}>
          <Dropdown.Toggle>
            {this.state.selectedLanguage}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item eventKey="en"><Image src={enFlag} height="20" /></Dropdown.Item>
            <Dropdown.Item eventKey="de"><Image src={deFlag} height="20" /></Dropdown.Item>
            <Dropdown.Item eventKey="es"><Image src={esFlag} height="20" /></Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    );
  }
}

export default LanguageTuner;
