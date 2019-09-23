---
id: doc-react30
title: LAB#1 - React JS / 30. Searching for Videos
sidebar_label: 30. Searching for Videos
---

## Searching for Videos


![alt text](.\assets\React_Imagem30_1.jpg)

> index.js

~~~
  videoSearch(term){
    YTSearch({key: API_KEY, term: term}, (videos) =>  {
      this.setState({
        videos:videos,
        selectedVideo: videos[0]
      });
    });
  }

~~~


---
