---
id: doc-react13
title: LAB#1 - React JS / 13. Export Statements
sidebar_label: 13. Export Statements
---

## Export Statements


![alt text](.\assets\React_Imagem13_1.jpg)





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





![alt text](.\assets\React_Imagem13_2.jpg)




![alt text](.\assets\React_Imagem13_3.jpg)
