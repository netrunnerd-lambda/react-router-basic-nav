import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import { Home, About, Contact, Navigation } from './components';

const App = () => (
  <Fragment>
    <Navigation />
    <Route exact component={Home} path="/" />
    <Route component={About} path="/about" />
    <Route component={Contact} path="/contact" />
  </Fragment>
);

export default App;
