import React from 'react';

import Dropdown from 'react-bootstrap/Dropdown';

import './DropdownToggle.scss';

import languages from '../data/languages.json';

class LanguageTuner extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      selectedLanguageCode: "en",
      selectedLanguageName: "English"
    };
  }

  onSelectedLanguageChange = (item) => {
    var languageName = "";
    for (var i in languages){
      if (languages[i].code === item){
        languageName = languages[i].name;
      }
    }

    this.setState({ selectedLanguageCode: item, selectedLanguageName: languageName },
                  () => this.props.onSelectedLanguageChange(item));
  }

  render(){
    return (
      <div className="hug-dropdown-toggle">
        <Dropdown onSelect={this.onSelectedLanguageChange}>
          <Dropdown.Toggle variant="default">
            {this.state.selectedLanguageName}
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
