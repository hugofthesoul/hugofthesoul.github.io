import React from 'react';

import FilterBar from './component/FilterBar';
import VideoList from './component/VideoList';

import './App.scss';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      searchResults: { 
        videos: [] 
      }
    };

    this.onSearchResultsChange = this.onSearchResultsChange.bind(this);
  }

  onSearchResultsChange(results){
    this.setState({ searchResults: results })
  }

  render(){
    return (
      <div className="App">
        <FilterBar onSearchResultsChange={this.onSearchResultsChange} />
        <VideoList videos={this.state.searchResults.videos} />
      </div>
    );
  }

}

export default App;
