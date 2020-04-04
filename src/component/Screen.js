import React from 'react';

import ImgLogo from '../image/logo-transparent.png';

class Screen extends React.Component {
  render(){
    console.log(this.props.embedUrl);

    return (
      <>
        <div class="text-center mt-5">
          <img alt="Hug of the Soul logo" src={ImgLogo} width="400px" height="auto" />
        </div>

        <iframe width="100%"
                height="315"
                frameBorder="0"
                title="Hope TV"
                src={this.props.embedUrl}
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen>
        </iframe>
      </>
    );
  }
}

export default Screen;
