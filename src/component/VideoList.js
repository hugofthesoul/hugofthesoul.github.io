import React from 'react';

class VideoList extends React.Component {
  render(){
    console.log(this.props.videos);

    const videoItems = this.props.videos.map((item) =>
      <div className="card my-5" key={item.id.videoId}>
        <h2 className="h3 py-3">{item.snippet.title}</h2>
        <iframe width="100%" height="315" src={`https://www.youtube.com/embed/${item.id.videoId}`} frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                title={item.snippet.title + " video"}
                allowfullscreen>
        </iframe>
      </div>
    );

    return (
      <div className="video-list">
        <div>{this.props.videos.length} videos</div>
        {videoItems}
      </div>
    );
  }
}

export default VideoList;
