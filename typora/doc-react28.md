---
id: doc-react28
title: LAB#1 - React JS / 28. Video Selection
sidebar_label: 28. Video Selection
---

## Video Selection


![alt text](.\assets\React_Imagem28_1.jpg)


---

## index.js

> video_list.js

~~~
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
      selectedVideo: null };

    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) =>  {
      this.setState({
        videos:videos,
        selectedVideo: videos[0]
      });
    });

  }
  render(){

    return (
      <div>
        <SearchBar />
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

---

## video_list.js

~~~
import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
  const videoItems = props.videos.map((video)=> {
    return (

      <VideoListItem
      onVideoSelect={props.onVideoSelect}
      key={video.etag}
      video={video} />
    )
  });
  //const videos = props.videos;
  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  );
};


export default VideoList;




~~~
---

## video_list_item.js


~~~
import React from 'react';


const VideoListItem = ({video, onVideoSelect}) => {
  //const video = props.video;
  //const onVideoSlect = props.onVideoSelect;
  const imageUrl = video.snippet.thumbnails.default.url;

  return (
    <li onClick={()=> onVideoSelect(video)} className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imageUrl} />
        </div>
        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
        </div>
      </div>
    </li>
);

};

export default VideoListItem;


~~~
---


## video_detail.js

~~~

import React from 'react';


const VideoListItem = ({video, onVideoSelect}) => {
  //const video = props.video;
  //const onVideoSlect = props.onVideoSelect;
  const imageUrl = video.snippet.thumbnails.default.url;

  return (
    <li onClick={()=> onVideoSelect(video)} className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imageUrl} />
        </div>
        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
        </div>
      </div>
    </li>
);

};

export default VideoListItem;



~~~
