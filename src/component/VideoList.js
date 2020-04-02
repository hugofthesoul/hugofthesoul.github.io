import React from 'react';

class VideoList extends React.Component {
  render(){
    console.log(this.props.videos);

    const videoItems = this.props.videos.map((item) =>
      <div className="card my-5" key={item.id.videoId}>
        <h2 className="h3 py-3">{item.id.videoId}</h2>
        <iframe width="100%" height="315" frameBorder="0"
                title={item.id.videoId + " video"}
                src={`https://www.youtube.com/embed/${item.id.videoId}`}
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen>
        </iframe>
      </div>
    );

    return (
      <div className="video-list">
        {videoItems}
      </div>
    );
  }
}

export default VideoList;
