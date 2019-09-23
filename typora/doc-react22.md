---
id: doc-react22
title: LAB#1 - React JS / 22. Props
sidebar_label: 22. Props
---

## Diference Props x State


![alt text](.\assets\React_Imagem22_1.png)


---
## DOM - Document Object Model


![alt text](.\assets\React_Imagem8_1.png)


---
## Component React


![alt text](.\assets\React_Imagem22_1.jpg)


---
## Component LifeCycle


![alt text](.\assets\React_Imagem22_2.jpg)


---

## BootStrap



![alt text](.\assets\React_Imagem22_2.png)



> index.htmk

>     <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.2/css/bootstrap.min.css">


~~~


<!DOCTYPE html>
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="/style/style.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.2/css/bootstrap.min.css">
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAq06l5RUVfib62IYRQacLc-KAy0XIWAVs"></script>
  </head>
  <body>
    <div class="container"></div>
  </body>
  <script src="/bundle.js"></script>
</html>


~~~



---

## BootStrap - List Groups className="col-md-4 list-group"



![alt text](.\assets\React_Imagem22_3.jpg)




![alt text](.\assets\React_Imagem22_3.png)



---

## {props.videos.length}

~~~
import React from 'react';

const VideoList = (props) => {
  //const videos = props.videos;
  return (
    <ul className="col-md-4 list-group">
      {props.videos.length}
    </ul>
  );
}


export default VideoList;

~~~


![alt text](.\assets\React_Imagem22_4.jpg)


---
## video_list.js

~~~
import React from 'react';

const VideoList = (props) => {
  //const videos = props.videos;
  return (
    <ul className="col-md-4 list-group">
      {props.videos.length}
    </ul>
  );
}


export default VideoList;

~~~


---

## index.js

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
