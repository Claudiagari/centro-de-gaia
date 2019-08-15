import React from 'react'
import Row from 'react-bootstrap/Row'
import Tab from 'react-bootstrap/Tab'
import Nav from 'react-bootstrap/Nav'
import Col from 'react-bootstrap/Col'
import Historia from '../assets/images/historia-sonia-jorge-ok.jpg'



const About = () =>(
  <div className="container table-tabs">
<Tab.Container id="left-tabs-example" defaultActiveKey="first">
  <Row>
    <Col sm={3}>
      <Nav variant="pills" className="flex-column">
        <Nav.Item>
          <Nav.Link eventKey="first">Historia</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="second">Sonia Carbajal</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="third">Nuestro Logo</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="fourth">Angel Oliezel</Nav.Link>
        </Nav.Item>
      </Nav>
    </Col>
    <Col sm={9}>
      <Tab.Content>
        <Tab.Pane eventKey="first">
         <h1>CENTRO DE GAIA</h1>
         <p>Fue inagurada el 22 de Diciembre de 2010 con mucho amor y ayuda de nuestros Seres de Luz.</p>
         <p>Jorge Nuñez y Sonia Carbajal somos los fundadores de este sueño que teníamos guardado en nuestros corazones desde hace mucho tiempo, nos llevó a realizar todo lo que hay aquí en cuanto fue pedido ¡Lllegó como regalo!</p>
         <p>En un comienzo eran unos cuantos productos pero poco a poco Jorge en Ceremonias espirituales fue inspirado y en armonía perfecta se desarrollaron.</p>
         <p>Jorge ya no está aquí en presencia, voló hacia el Padre, pero desde ahí me guía y su esencia está en cada una de las cosas que hicimos juntos.</p>
         <div className="text-center">
         <img src={Historia} className="img-fluid" alt="historia"/>
         </div>
        
        </Tab.Pane>
        <Tab.Pane eventKey="second">
         <h1>Hola2</h1>
        </Tab.Pane>
      </Tab.Content>
    </Col>
  </Row>
</Tab.Container>
</div>
);
export default About