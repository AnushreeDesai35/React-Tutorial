// ./src/index.jsx
import React, { Component } from 'react';
import { render } from 'react-dom';
import {Router, Route,hashHistory} from 'react-router';
import Home from './components/Home';
import About from './components/About';
import Car from './components/Car';

render(
  <Router history={hashHistory}>
    <Route path="/" component={Home}/>
    <Route path="/cars" component={Car}/>
    <Route path="/about" component={About}/>
  </Router>,
   document.getElementById('container'));
