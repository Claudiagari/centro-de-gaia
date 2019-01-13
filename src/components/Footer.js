import React, { Component } from 'react'
import logo from '../assets/images/logo-gaia.png'

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="container">
          <div className="row">
            <div className="col">
              <ul className="fa-ul">
              <li><span className="fa-li" ><i class="fas fa-map-marker-alt fa-2x"></i></span> <span>Cantuarias 140 Int. 241 - Miraflores </span> <br/> <p><b> Lima, Perú</b></p> </li>
              <li><span className="fa-li"><i class="fas fa-mobile-alt fa-2x"></i></span>   <p>+51 956 715 507</p>  </li> 
              <li><span className="fa-li"><i class="fas fa-envelope fa-2x"></i></span> <p>elcentrodegaia@gmail.com</p> </li>
              </ul>
            </div>
            <div className="col">
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
export default Footer;

