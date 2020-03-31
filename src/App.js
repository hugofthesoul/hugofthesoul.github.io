import React from 'react';

import FilterBar from './component/FilterBar';
import Statistics from './component/Statistics';
import VideoList from './component/VideoList';

import './App.scss';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      statisticsResults: {
        TotalRecovered: 0
      },
      searchResults: { 
        videos: [] 
      }
    };

    this.onStatisticsResultsChange = this.onStatisticsResultsChange.bind(this);
    this.onSearchResultsChange = this.onSearchResultsChange.bind(this);
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
