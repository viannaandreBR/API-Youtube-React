---
id: doc-react17
title: LAB#1 - React JS / 17. State Continued
sidebar_label: 17. State Continued
---

## State Continued


![alt text](.\assets\React_Imagem16_1.jpg)


---
## this.setState

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
        <input onChange={event => this.setState({ term: event.target.value })} />
        Value of the input: {this.state.term}
      </div>
    );
  }
}

export default SearchBar;



~~~


![alt text](.\assets\React_Imagem17_1.jpg)



![alt text](.\assets\React_Imagem17_2.jpg)

