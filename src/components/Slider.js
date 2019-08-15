import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import foto1 from '../assets/images/foto-1.png';
import foto2 from '../assets/images/foto-2.png';
import foto3 from '../assets/images/foto-3.png';
import foto4 from '../assets/images/foto-4.png';
import foto5 from '../assets/images/foto-5.png';
import foto6 from '../assets/images/foto-6.png';
import foto7 from '../assets/images/foto-7.png';
import foto8 from '../assets/images/foto-8.png';

export default class SimpleSlider extends Component {
  render() 
  {
    function SampleNext(props) {
  const {className, style, onClick} = props
  return (
    <div className={className }
    style={{...style,fontSize:'30px', color:'#40514e',top:'50%', zIndex:'1000'}}
    onClick={onClick}><i className="fas fa-chevron-right"></i>
    </div>
  );
}

function SamplePrevArrow(props) {
  const {className, style, onClick} = props
  return (
    <div
      className={className }
      style={{...style, fontSize:'30px', color:'#40514e',top:'50%', zIndex:'1000'}}
      onClick={onClick}
    ><i className="fas fa-chevron-left"></i></div>
  );
}
    var settings = {
      dots:true,
      infinite: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 2000,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <SampleNext />,
      prevArrow: <SamplePrevArrow />,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className="container slider text-center">
        <h2></h2>
        <Slider {...settings}>
          <div>
           <img src={foto8} className="img-fluid" alt="armonizadores"/>
          </div>
          <div>
          <img src={foto2} className="img-fluid" alt="activadores"/>
          </div>
          <div>
          <img src={foto3} className="img-fluid" alt="izipay"/>
          </div>
          <div>
          <img src={foto4} className="img-fluid" alt="elementales"/>
          </div>
          <div>
          <img src={foto5} className="img-fluid" alt="bach"/>
          </div>
          <div>
          <img src={foto6} className="img-fluid" alt="limbico"/>
          </div>
          <div>
          <img src={foto7} className="img-fluid" alt="chakras"/>
          </div>
          <div>
          <img src={foto1} className="img-fluid" alt="angelical"/>
          </div>
        </Slider>
      </div>
    );
  }
}