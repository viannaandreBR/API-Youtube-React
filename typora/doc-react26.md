---
id: doc-react26
title: LAB#1 - React JS / 26. Detail Component
sidebar_label: 26.  Detail Component
---

## Detail Component and Template String


![alt text](.\assets\React_Imagem26_1.jpg)


---

## Youtube videoId

> Way 1

~~~
const VideoDetail = ({video}) => {
  const videoId = video.id.videoId;
  const url = 'https://www.youtube.com/embed' + videoId;

~~~

> Way 2

~~~
const VideoDetail = ({video}) => {
  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

~~~

## video_detail.js


~~~

import React from 'react';

const VideoDetail = ({video}) => {
  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return(
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item src={url}"></iframe>
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
