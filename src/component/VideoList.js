import React from 'react';

class VideoList extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      videos: props.videos
    };
  }

  render(){

    const videoItems = this.state.videos.map((item,key) => 
      <div className="video" key={item.id.videoId}>
        <div className="video-title">{item.title}</div>
      </div>
    );

    return (
      <div className="video-list">
        <div>{this.state.videos.length} videos</div>
        {videoItems}
      </div>
    );
  }

}

export default VideoList;