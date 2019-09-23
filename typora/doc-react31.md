---
id: doc-react31
title: LAB#1 - React JS / 31. Throttling Search Term Input
sidebar_label: 31. Throttling Search Term Input
---

## Throttling Search Term Input


![alt text](.\assets\React_Imagem31_1.jpg)


> https://lodash.com/

> npm install --save lodash

> index.js

>> import _ from 'lodash';

---

## Update index.js

~~~
import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY='AIzaSyAuJOy9V3-Bu7tcSgc6sYZG91UMaOeav0Y';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('surfboards');

  }

  videoSearch(term){
    YTSearch({key: API_KEY, term: term}, (videos) =>  {
      this.setState({
        videos:videos,
        selectedVideo: videos[0]
      });
    });
  }

  render(){
    const videoSearch = _.debounce((term) => { this.videoSearch(term) } , 300);


    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch}/>
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})   }
          videos={this.state.videos}/>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.querySelector('.container') );


~~~

![alt text](.\assets\React_Imagem31_2.jpg)
