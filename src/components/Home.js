import React from 'react';
import SimpleSlider from './Slider'
import hada from '../assets/images/hada.png'
import circulo1 from '../assets/images/circulo1.png'
import circulo2 from '../assets/images/circulo2.png'
import circulo3 from '../assets/images/circulo3.png'
import mandala from '../assets/images/mandala.png'

const Home = () => (
  <div className="section-1">
    <div className="container-fluid banner">
      <div className="row d-flex justify-content-center">
        <h1>BIENVENIDOS AL CENTRO DE GAIA</h1>
        <h4>Sanación Holística, Terapias Complementarias, Orientaciones Espirituales y Productos Sanadores!</h4>
      </div>
      <div className="row d-flex justify-content-center">
        <img src={hada} className="mx-auto hada " alt="hada" />
      </div>
      <div className="row d-flex justify-content-center text-center">
        <h4>Dedicados a elaborar productos, terapias y talleres guiados por seres de luz y nuestra Madre Tierra Gaia para beneficio de la humanidad</h4>
      </div>
    </div>
    <SimpleSlider />
    <div className="container-fluid alternativa">
      <div className="row d-flex justify-content-center ">
        <div className="col text-center ">
          <img src={circulo1} className="circulo" alt="circulo" />
        </div>
        <div className="col text-center ">
          <img src={circulo2} className="circulo" alt="circulo-2" />
        </div>
        <div className="col text-center ">
          <img src={circulo3} className="circulo" alt="circulo-3" />
        </div>
      </div>
      <div className=" row d-flex justify-content-center ">
        <div className="text-center">
          <h2>¡Tu mejor alternativa del estar bien!</h2>
          <div>
          <img src={mandala} className="img-fluid" alt="mandala" />
          </div>
        </div>

      </div>
    
    </div>

  </div>




);
export default Home