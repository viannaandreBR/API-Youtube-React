---
id: doc-react15
title: LAB#1 - React JS / 15. Handling User Events
sidebar_label: 15. Handling User Events
---

## Handling User Events


![alt text](.\assets\React_Imagem15_1.jpg)


![alt text](.\assets\React_Imagem15_1.gif)


---

## event.target.value

~~~
class SearchBar extends Component {
  render() {
    return <input onChange={this.onInputChange} />;
  }

onInputChange(event) {
  console.log(event.target.value);
}

}

~~~

![alt text](.\assets\React_Imagem15_2.jpg)




---

## event.target.value (with Arrow Function)


~~~

import React, { Component } from 'react';

//const Component = React.Component;

class SearchBar extends Component {
  render() {
    return <input onChange={(event) => console.log(event.target.value) } />;
  }



}


export default SearchBar;

~~~


![alt text](.\assets\React_Imagem15_3.jpg)
