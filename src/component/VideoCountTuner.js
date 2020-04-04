import React from 'react';

import './VideoCountTuner.scss'

class VideoCountTuner extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      selectedVideoCount: 10
    };
  }

  onSelectedVideoCountChange = (item) => {
    this.setState({ selectedVideoCount: item },
                  () => this.props.onSelectedVideoCountChange(item));
  }

  render(){
    return (
      <div className="video-count-tuner">
        <label for="VideoCountRange"># of Videos</label>
        <input type="range" min="1" max="20" step="1"
              id="VideoCountRange"
               value={this.state.selectedVideoCount}
               onChange={changeEvent => this.onSelectedVideoCountChange(changeEvent.target.value)}
               />
      </div>
    );
  }
}

export default VideoCountTuner;
