import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap';

import img4 from '../img/img4.jpg';


export default function AboutComponent(props){
  return(
  <div>
  <Container fluid>
  <Row>
  <Navbar  fixed="top" expand="sm" >
      <LinkContainer className="nav" style={{color:"red",textShadow: "0 0 10px rgba(0,0,0,1.5)"}} to="/"><Navbar.Brand><b>BioDB</b></Navbar.Brand>
      </LinkContainer>
      <Nav className="mr-auto">
        <LinkContainer className="nav" style={{fontFamily:"verdana",color:"white",textShadow: "0 0 10px rgba(0,0,0,1.5)"}} to="/login"><Nav.Link>Login</Nav.Link>
        </LinkContainer>
        <LinkContainer className="nav" style={{fontFamily:"verdana",color:"white",textShadow: "0 0 10px rgba(0,0,0,1.5)"}} to="/register"><Nav.Link>Register</Nav.Link>
        </LinkContainer>
        <LinkContainer className="nav" style={{fontFamily:"verdana",color:"white",textShadow: "0 0 10px rgba(0,0,0,1.5)"}} to="/about"><Nav.Link>About</Nav.Link>
        </LinkContainer>
        <LinkContainer className="nav" style={{fontFamily:"verdana",color:"white",textShadow: "0 0 10px rgba(0,0,0,1.5)"}} to="/contact"><Nav.Link>Contact</Nav.Link>
        </LinkContainer>
      </Nav>
  </Navbar>
  <Card className="bg-dark text-white">
<Card.Img src={img4} alt="Card image" width="845" height="250" />
<Card.ImgOverlay>
<Card.Title style={{transform:"translateY(390%)",marginTop:"-60px",
                    textAlign:"center", fontFamily:"verdana",
                    fontSize:"250%",textShadow: "0 0 10px rgba(0,0,0,1.5)"}}>
                    BioDB
</Card.Title>
</Card.ImgOverlay>
</Card>
      </Row>
      </Container>
  </div>
  );
}
