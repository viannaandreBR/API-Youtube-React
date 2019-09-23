---
id: doc-react19
title: LAB#1 - React JS / 19. Breather and Review
sidebar_label: Breather and Review
---

## index.js

~~~
import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';


const API_KEY='AIzaSyAuJOy9V3-Bu7tcSgc6sYZG91UMaOeav0Y';

// Create a new component. This component should produce
// some HTML

const App = () =>  {
  return (
    <div>

      <SearchBar />

    </div>
  );

};

// Take this compoment´s generate HTML and pu it
// on the page (in the DOM)
//React.render(App);
ReactDOM.render(<App />, document.querySelector('.container') );


~~~


![alt text](.\assets\React_Imagem19_1.jpg)


---
