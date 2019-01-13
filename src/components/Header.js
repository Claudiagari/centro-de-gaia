import React, { Component } from 'react'
import logo from '../assets/images/logo-gaia.png'

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand title" href="#">
          <img src={logo}  className="d-inline-block align-top logo" alt="logo"/>
          Centro de Gaia
        </a>

        <span className="span-header"><span id="green">PAX</span><strong>·</strong><span id="yellow">LUX</span><strong>·</strong><span id="pink">AMOR</span></span>
      </nav>
    );
  }
}
export default Header;
