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
      statisticsResults: {
        TotalRecovered: 0
      },
      searchResults: { 
        videos: [] 
      }
    };

    this.onVideoChange = this.onVideoChange.bind(this);
    this.onStatisticsResultsChange = this.onStatisticsResultsChange.bind(this);
    this.onSearchResultsChange = this.onSearchResultsChange.bind(this);
  }

  onVideoChange(results){
    this.setState({ embedUrl: results })
  }

  onStatisticsResultsChange(results){
    this.setState({ statisticsResults: results })
  }

  onSearchResultsChange(results){
    this.setState({ searchResults: results })
  }

  render(){
    return (
      <div className="App">
        <FilterBar onStatisticsResultsChange={this.onStatisticsResultsChange}
                   onSearchResultsChange={this.onSearchResultsChange} />

        <div className="container">
          <div className="row justify-content-sm-center">
            <div className="col-sm-8">
              <Screen embedUrl={this.state.embedUrl} />
            </div>
            <div className="col-sm-4">
              <Control onVideoChange={this.onVideoChange} />
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row justify-content-sm-center">
            <div className="col-sm-6">
              <Statistics statistics={this.state.statisticsResults} />
              <VideoList videos={this.state.searchResults.videos} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
