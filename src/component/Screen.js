import React from 'react';

import './Screen.scss';

class Screen extends React.Component {
  render() {
    console.log(this.props.embedUrl);

    return (
      <div className="screen-section">
        <iframe width="100%"
                height="315"
                frameBorder="0"
                title="Hope TV"
                src={this.props.embedUrl}
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen>
        </iframe>
      </div>
    );
  }
}

export default Screen;
