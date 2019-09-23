---
id: doc-react12
title: LAB#1 - React JS / 12. Youtube Search API Signup
sidebar_label: 12. Youtube Search API Signup
---

## Youtube Search API Signup


![alt text](.\assets\React_Imagem12_1.png)


![alt text](.\assets\React_Imagem12_2.png)


---
## Install Youtube-Search-API

> npm install --save youtube-api-search


---
## package.json

~~~


  "name": "redux-simple-starter",
  "version": "1.0.0",
  "description": "Simple starter package for Redux with React and Babel support",
  "main": "index.js",
  "repository": "git@github.com:StephenGrider/ReduxSimpleStarter.git",
  "scripts": {
    "start": "node ./node_modules/webpack-dev-server/bin/webpack-dev-server.js",
    "test": "mocha --compilers js:babel-core/register --require ./test/test_helper.js --recursive ./test",
    "test:watch": "npm run test -- --watch",
    "build": "webpack -p --define process.env.NODE_ENV='\"production\"' --progress --colors"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "babel-core": "^6.2.1",
    "babel-loader": "^6.2.0",
    "babel-preset-es2015": "^6.1.18",
    "babel-preset-react": "^6.1.18",
    "webpack": "^1.12.9",
    "webpack-dev-server": "^1.14.0"
  },
  "dependencies": {
    "babel-preset-stage-1": "^6.1.18",
    "lodash": "^3.10.1",
    "react": "16.3.2",
    "react-dom": "16.3.2",
    "react-redux": "5.0.7",
    "redux": "4.0.0",
    "youtube-api-search": "0.0.5"
  }
}


~~~

