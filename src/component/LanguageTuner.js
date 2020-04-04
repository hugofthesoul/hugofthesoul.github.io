import React from 'react';

import Dropdown from 'react-bootstrap/Dropdown';

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
            <Dropdown.Item eventKey="en">English</Dropdown.Item>
            <Dropdown.Item eventKey="de">Deutsch</Dropdown.Item>
            <Dropdown.Item eventKey="es">Español</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    );
  }
}

export default LanguageTuner;
