import React from 'react';

import Card from 'react-bootstrap/Card';

class Screen extends React.Component {
  render(){
    console.log(this.props.embedUrl);

    return (
      <div>
      <Card>
        <Card.Body>
          <Card.Title>Hope TV</Card.Title>
          <iframe width="100%" height="315" frameBorder="0"
                  title="Hope TV"
                  src={this.props.embedUrl}
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen>
          </iframe>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Card.Text>
            To see your video here upload to YouTube with hashtag ...
          </Card.Text>
        </Card.Body>
      </Card>
      </div>
    );
  }
}

export default Screen;
