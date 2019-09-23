---
id: doc-react20
title: LAB#1 - React JS / 20. Youtube Search Response
sidebar_label: 20. Youtube Search Response
---

## Youtube Search Response


![alt text](.\assets\React_Imagem12_1.png)

> import YTSearch from 'youtube-api-search'


---

## index.js

~~~
import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: ''};
   }

  render() {
    return (
      <div>
        <input
          value={this.state.term}
          onChange={event => this.setState({ term: event.target.value })}

         />

      </div>
    );
  }
}

export default SearchBar;


~~~


![alt text](.\assets\React_Imagem20_1.jpg)





![alt text](.\assets\React_Imagem20_2.jpg)
