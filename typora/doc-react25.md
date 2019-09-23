---
id: doc-react25
title: LAB#1 - React JS / 25. Video List Items
sidebar_label: 25. Video List Items
---

## Video List Item

~~~

import React from 'react';


const VideoListItem = ({video}) => {
  // const video = props.video;

  console.log(video);

  return <li>Video</li>

};

export default VideoListItem;



~~~


![alt text](.\assets\React_Imagem25_1.jpg)



![alt text](.\assets\React_Imagem25_2.jpg)


---

## video_list_item.js

~~~
import React from 'react';


const VideoListItem = ({video}) => {
  const imageUrl = video.snippet.thumbnails.default.url;

  return (
    <li className="list-group-item">
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



![alt text](.\assets\React_Imagem25_3.jpg)



![alt text](.\assets\React_Imagem25_4.jpg)
