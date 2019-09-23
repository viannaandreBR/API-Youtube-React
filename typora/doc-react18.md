---
id: doc-react18
title: LAB#1 - React JS / 18. Controlled Components
sidebar_label: 18. Controlled Components
---

## Controlled Components


![alt text](.\assets\React_Imagem18_0.jpg)


![alt text](.\assets\React_Imagem18_1.jpg)

![alt text](.\assets\React_Imagem18_2.jpg)


---
## Starting Value


![alt text](.\assets\React_Imagem18_3.jpg)

~~~
import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: 'Starting Value'};
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


