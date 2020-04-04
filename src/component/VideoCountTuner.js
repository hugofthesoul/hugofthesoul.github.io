import React from 'react';
import Card from 'react-bootstrap/Card';

class VideoCountTuner extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      selectedVideoCount: 5
    };
  }

  onSelectedVideoCountChange = (item) => {
    this.setState({ selectedVideoCount: item },
                  () => this.props.onSelectedVideoCountChange(item));
  }

  render(){
    return (
      <Card>
        <Card.Body>
          <label>{this.state.selectedVideoCount}</label>
          <input type="range" min="1" max="20" step="1"
                 value={this.state.selectedVideoCount}
                 onChange={changeEvent => this.onSelectedVideoCountChange(changeEvent.target.value)} />
        </Card.Body>
      </Card>
    );
  }
}

export default VideoCountTuner;
