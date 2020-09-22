import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home'
import About from './components/About'
import Product from './components/Product'
import Navbar from './components/Navbar'
import ProductDetail from './ProductDetail'

function App() {
  return (
    <Router>
    <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route exact path='/product' component={Product} />
        <Route exact path='/product/:id' component={ProductDetail} />
        
      </Switch>
    </Router>
  );
}

export default App;
