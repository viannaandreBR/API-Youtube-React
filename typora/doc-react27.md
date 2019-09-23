---
id: doc-react27
title: LAB#1 - React JS / 27. Handling Null Props
sidebar_label: 27. Handling Null Props
---

## video_detail.js

~~~
import React from 'react';

const VideoDetail = ({video}) => {
  if (!video){
    return <div>Loading...</div>;
  }

  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return(
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url}></iframe>
      </div>
      <div className="details">
        <div>{video.snippet.title} </div>
        <div>{video.snippet.description} </div>
      </div>
    </div>
  )

};

export default VideoDetail;


~~~






![alt text](.\assets\React_Imagem27_1.jpg)

