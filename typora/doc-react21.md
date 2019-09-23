---
id: doc-react21
title: LAB#1 - React JS / 21. Refactoring Functional Components
sidebar_label: 21. Refactoring Functional Components
---

## Refactoring Funcational Components


![alt text](.\assets\React_Imagem21_1.jpg)


---
## class App extends Component 

> index.js

~~~
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
const API_KEY='AIzaSyAuJOy9V3-Bu7tcSgc6sYZG91UMaOeav0Y';

YTSearch({key: API_KEY, term: 'surfboards'}, function(data) {
  console.log(data);
});

class App extends Component {
  render(){
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container') );



~~~

![alt text](.\assets\React_Imagem21_2.jpg)



![alt text](.\assets\React_Imagem21_3.jpg)


---

## Update index.js

~~~
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
const API_KEY='AIzaSyAuJOy9V3-Bu7tcSgc6sYZG91UMaOeav0Y';



class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };

    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) =>  {
      this.setState({ videos: videos });
    });

  }

  render(){
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container') );


~~~

