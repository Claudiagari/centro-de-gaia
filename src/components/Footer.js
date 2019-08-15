import React, { Component } from 'react';
import { GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import logo from '../assets/images/logo-gaia.png';
import MapContainer from './Map'

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="container-fluid content-footer">
          <div className="row">
            <div className="col">
              <ul className="fa-ul">
                <li className="d-flex align-items-center" ><span className=" fa-stack fa-2x">
                  <i className="fa fa-circle fa-stack-2x icon-background"></i>
                  <i className="fa fa-map-marker-alt fa-stack-1x"></i></span> <p className="margin-footer">Cantuarias 140 Tda. 228 - Miraflores <br /> <b> Lima, Perú</b> </p> </li>
                <li className="d-flex align-items-center" ><span className=" fa-stack fa-2x">
                  <i className="fa fa-circle fa-stack-2x icon-background"></i>
                  <i className="fa fa-mobile-alt fa-stack-1x"></i></span><p className="margin-footer">+51 956 715 507</p>  </li>
                <li className="d-flex align-items-center" ><span className=" fa-stack fa-2x">
                  <i className="fa fa-circle fa-stack-2x icon-background"></i>
                  <i className="fa fa-envelope fa-stack-1x"></i></span> <p className="margin-footer">elcentrodegaia@gmail.com</p> </li>
              </ul>
            </div>
            <div className="col">
              <MapContainer />
            </div>
            <div className="col text-center">
              <h5>Síguenos en:</h5>
              <div>
                <span> <i className=" redes fab fa-facebook-f fa-2x"></i></span>
                <span> <i className=" redes  fab fa-instagram fa-2x"></i></span>
                <span> <i className="redes fab fa-twitter fa-2x"></i></span>
                <span> <i className="redes fab fa-google-plus  fa-2x"></i></span>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid copyright">
          <div className="">
            <div className=" col text-center">
              <h5>Copyright &copy; Centro de Gaia 2019</h5>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
export default Footer;

