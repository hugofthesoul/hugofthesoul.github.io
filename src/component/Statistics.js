import React from 'react';

class Statistics extends React.Component {
  render(){
    console.log(this.props.statistics);

    return (
      <div className="statistics">
        <div>{this.props.statistics.TotalRecovered} recovered</div>
      </div>
    );
  }
}

export default Statistics;
