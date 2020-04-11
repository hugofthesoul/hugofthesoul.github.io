import React from 'react';

import "./NewsMarquee.scss";

class NewsMarquee extends React.Component {

  render(){
    // This can be zero if the API source is mid update
    const newsText = `Flash News!!! ${this.props.totalRecovered} recovered from COVID-19`;

    return (
      <div className="marquee">         
        <div>
          {this.props.totalRecovered > 0 &&
            <span>{newsText}</span>
          }
          {this.props.totalRecovered > 0 &&
            <span>{newsText}</span>
          }
        </div>
      </div>
    );
  }
}

export default NewsMarquee;
