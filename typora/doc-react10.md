---
id: doc-react10
title: LAB#1 - React JS / 10. Render Targets
sidebar_label: 10. Render Targets
---

## Render Targets

> index.html

~~~

<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="/style/style.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.2/css/bootstrap.min.css">
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAq06l5RUVfib62IYRQacLc-KAy0XIWAVs"></script>
  </head>
  <body>
    <div class="container"></div>
  </body>
  <script src="/bundle.js"></script>
</html>

~~~
---

> /src/index.js

~~~

import React from 'react';
import ReactDOM from 'react-dom';

// Create a new component. This component should produce
// some HTML
const App = function() {
  return <div> hi!</div>;
};

// Take this compoment´s generate HTML and pu it
// on the page (in the DOM)
//React.render(App);
ReactDOM.render(<App />, document.querySelector('.container') );


~~~




![alt text](.\assets\React_Imagem10_1.jpg)

---


> /src/index.js (with Arrow Function)



~~~
import React from 'react';
import ReactDOM from 'react-dom';

// Create a new component. This component should produce
// some HTML
const App = () =>  {
  return <div> hi!</div>;
};

// Take this compoment´s generate HTML and pu it
// on the page (in the DOM)
//React.render(App);
ReactDOM.render(<App />, document.querySelector('.container') );

~~~