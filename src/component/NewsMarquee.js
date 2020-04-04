import React from 'react';

import "./NewsMarquee.scss";

class NewsMarquee extends React.Component {

  render(){

    const newsText = `Flash News!!! ${this.props.totalRecovered} recovered from COVID-19`;

    return (
      <div className="marquee">         
        <div>
          <span>{newsText}</span>
          <span>{newsText}</span>
        </div>
      </div>
    );
  }
}

export default NewsMarquee;