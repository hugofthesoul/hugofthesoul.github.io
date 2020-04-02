import React from 'react';

import Control from './component/Control';
import FilterBar from './component/FilterBar';
import Screen from './component/Screen';
import Statistics from './component/Statistics';
import VideoList from './component/VideoList';

import './App.scss';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      embedUrl : "",
      statistics: 0,
      searchResults: { 
        videos: [] 
      }
    };

    this.onVideoChange = this.onVideoChange.bind(this);
    this.onStatisticsChange = this.onStatisticsChange.bind(this);
    this.onSearchResultsChange = this.onSearchResultsChange.bind(this);
  }

  onVideoChange(results){
    this.setState({ embedUrl: results })
  }

  onStatisticsChange(results){
    this.setState({ statistics: results })
  }

  onSearchResultsChange(results){
    this.setState({ searchResults: results })
  }

  render(){
    return (
      <div className="App">
        <div className="container">
          <div className="row justify-content-sm-center">
            <div className="col-sm-8">
              <Screen embedUrl={this.state.embedUrl} />
            </div>
            <div className="col-sm-4">
              <Control onVideoChange={this.onVideoChange}
                       onStatisticsChange={this.onStatisticsChange} />
              <Statistics statistics={this.state.statistics} />
            </div>
          </div>
        </div>

        <FilterBar onSearchResultsChange={this.onSearchResultsChange} />
        <div className="container">
          <div className="row justify-content-sm-center">
            <div className="col-sm-6">
              <VideoList videos={this.state.searchResults.videos} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
