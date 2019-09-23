---
id: doc-react16
title: LAB#1 - React JS / 16. Introduction to State
sidebar_label: 16. Introduction to State
---

## Introduction to State


![alt text](.\assets\React_Imagem16_1.jpg)



---
## search_bar.js


~~~

import React, { Component } from 'react';

//const Component = React.Component;

class SearchBar extends Component {
  constructor(props){
    super(props);

    this.state = { term: ''};
    
  }
  render() {
    return <input onChange={(event) => console.log(event.target.value) } />;
  }



}


export default SearchBar;

~~~


![alt text](.\assets\React_Imagem16_2.jpg)
