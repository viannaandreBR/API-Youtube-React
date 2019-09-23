---
id: doc-react8
title: LAB#1 - React JS / 8. ReactDOM vs React
sidebar_label: 8. ReactDOM vs React
---

## DOM - Document Object Model


![alt text](.\assets\React_Imagem8_1.jpg)


---



![alt text](.\assets\React_Imagem8_1.png)


---



![alt text](.\assets\React_Imagem8_2.png)


---

## ReactDOM vs React


![alt text](.\assets\React_Imagem8_2.jpg)


---

![alt text](.\assets\React_Imagem8_3.jpg)


---



![alt text](.\assets\React_Imagem8_4.jpg)



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
ReactDOM.render(App);

~~~