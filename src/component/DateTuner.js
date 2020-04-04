import React from 'react';

import DatePicker from 'react-date-picker';

class DateTuner extends React.Component {
  constructor(props){
    super(props);

    var today = new Date();
    var lastWeek = new Date();
    lastWeek.setDate(today.getDate() - 7);

    this.state = {
      minDate: lastWeek,
      selectedDate: today,
      maxDate: today
    };
  }

  onSelectedDateChange = (item) => {
    this.setState({ selectedDate: item },
                  () => this.props.onSelectedDateChange(item));
  }

  render(){
    return (
      <div>
        <DatePicker minDate={this.state.minDate} maxDate={this.state.maxDate}
                    value={this.state.selectedDate}
                    onChange={this.onSelectedDateChange} />
      </div>
    );
  }
}

export default DateTuner;
