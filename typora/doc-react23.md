---
id: doc-react23
title: LAB#1 - React JS / 23. Building List with Map
sidebar_label: 23. Building List with Map
---

## Building List with Map

![alt text](.\assets\React_Imagem23_2.jpg)


![alt text](.\assets\React_Imagem23_1.jpg)


---
## video_list_item.js

~~~
import React from 'react';


const VideoListItem = (props) => {
  return <li>Video</li>

};

export default VideoListItem;


~~~

![alt text](.\assets\React_Imagem23_3.jpg)



---
## video_list.js

~~~
import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
  const videoItems = props.videos.map((video)=> {
    return <VideoListItem video={video} />
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


![alt text](.\assets\React_Imagem23_4.jpg)



---
## video_list.js

~~~
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
const API_KEY='AIzaSyAuJOy9V3-Bu7tcSgc6sYZG91UMaOeav0Y';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };

    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) =>  {
      this.setState({ videos });
    });

  }
  render(){
    
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos}/>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.querySelector('.container') );

~~~

![alt text](.\assets\React_Imagem23_5.jpg)
