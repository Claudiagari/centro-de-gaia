import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';

import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Home from './Home';
import About from './About';
import Products from './Products';
import Services from './Services';
import Contac from './Contac';
import logo from '../assets/images/logo-gaia.png'

const App = () => (
  <Router>
  <div>
    <Header/>
    <ul className="nav d-flex justify-content-around">
      <li><NavLink exact className="nav-item" activeStyle={{ background:'#1bc0c0'}} to="/" >INICIO</NavLink></li>
      <li><NavLink className="nav-item" activeStyle={{ background:'#1bc0c0' }} to="/About" >SOBRE CENTRO DE GAIA</NavLink></li>
      <li><NavLink className="nav-item" activeStyle={{ background:'#1bc0c0' }} to="/Products" >PRODUCTOS</NavLink></li>
      <li><NavLink className="nav-item" activeStyle={{ background:'#1bc0c0' }} to="/Services" >SERVICIOS</NavLink></li>
      <li><NavLink className="nav-item" activeStyle={{ background:'#1bc0c0' }} to="/Contac" >CONTÁCTANOS</NavLink></li>
    </ul>
    <div className="content">
      <Route exact path="/" component={Home} />
      <Route  path="/About" component={About} />
      <Route  path="/Products" component={Products} />
      <Route  path="/Services" component={Services} />
      <Route  path="/Contac" component={Contac} />
    </div>
   
    <Footer/>
    </div>
  </Router>
);


export default App;
