---
id: doc-react9
title: LAB#1 - React JS / 9. Component Instances
sidebar_label: 9. Component Instances
---



## Component LifeCycle


![alt text](.\assets\React_Imagem9_1.jpg)



![alt text](.\assets\React_Imagem9_1.png)



![alt text](.\assets\React_Imagem9_2.png)



![alt text](.\assets\React_Imagem9_2.jpg)




---

## Component Instances


![alt text](.\assets\React_Imagem9_3.jpg)


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
ReactDOM.render(<App /> );


~~~


![alt text](.\assets\React_Imagem9_4.jpg)




---

