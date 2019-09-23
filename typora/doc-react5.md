---
id: doc-react5
title: LAB#1 - React JS / 5. JSX
sidebar_label: 5. JSX
---


## Project Setup


![alt text](.\assets\React_Imagem5_1.png)

---

## Webpack


![alt text](.\assets\React_Imagem5_3.png)


![alt text](.\assets\React_Imagem5_1.jpg)


![alt text](.\assets\React_Imagem5_2.png)


---

## Redux

![alt text](.\assets\React_Imagem5_2.jpg)

---


## React Technology Stack


![alt text](.\assets\React_Imagem5_3.jpg)

---

## index.html

~~~
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="/style/style.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.2/css/bootstrap.min.css">
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAq06l5RUVfib62IYRQacLc-KAy0XIWAVs"></script>
  </head>
  <body>

    Random Content !!!

    <div class="container"></div>
  </body>
  <script src="/bundle.js"></script>
</html>

~~~

![alt text](.\assets\React_Imagem5_4.jpg)


---

## app.js

~~~
import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div>Hello There !</div>
    );
  }
}
~~~


![alt text](.\assets\React_Imagem5_5.jpg)
