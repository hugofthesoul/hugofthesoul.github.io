import React from 'react';
import Card from 'react-bootstrap/Card';

import DatePicker from 'react-date-picker';

class DateTuner extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      selectedDate: new Date()
    };
  }

  onSelectedDateChange = (item) => {
    this.setState({ selectedDate: item },
                  () => this.props.onSelectedDateChange(item));
  }

  render(){
    return (
      <Card>
        <Card.Body>
          <DatePicker value={this.state.selectedDate} onChange={this.onSelectedDateChange} />
        </Card.Body>
      </Card>
    );
  }
}

export default DateTuner;
