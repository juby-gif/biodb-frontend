import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { LinkContainer } from 'react-router-bootstrap';

import img1 from "../img/img1.jpg";
import img2 from "../img/img2.jpg";
import img3 from "../img/img3.jpg";


export default function LandingPageComponent(props){
  const { handleSelect,index } = props
  return(
    <Container fluid>
        <Row>
          <Navbar  fixed="top" expand="sm" >
              <LinkContainer style={{color:"red",textShadow: "0 0 10px rgba(0,0,0,1.5)"}} to="/"><Navbar.Brand><b>BioDB</b></Navbar.Brand>
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
          <Carousel fade={true} activeIndex={index} onSelect={event => handleSelect(event)}>
              <Carousel.Item>
                    <img
                    fluid
                      className="d-block w-100"
                      src={img2}
                      alt="First slide"
                      width="100vw" height="800vh"
                      style={{opacity: "0.8"}}
                    />
                    <Carousel.Caption style={{transform: "translateY(-190%)"}}>
                        <h3 className="h3-responsive"  style={{fontFamily:"Robot",fontSize: "6vh"}}>Monitor your Health Data</h3>
                        <p style={{fontFamily:"Robot",fontSize: "4vh"}}>Track your data with BioDB</p>
                    </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                    <img
                    fluid
                      className="d-block w-100"
                      src={img3}
                      alt="Second slide"
                      style={{opacity: "0.9"}}
                      width="800" height="850"
                    />
                    <Carousel.Caption style={{transform: "translateY(-230%)"}}>
                        <h3 className="h3-responsive" style={{fontFamily:"Robot",fontSize: "6vh"}}>Export your data</h3>
                        <p style={{fontFamily:"Robot",fontSize: "4vh"}}>Get your Apple HealthKit Data from Apple device</p>
                    </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                  <img
                  fluid
                    className="d-block w-100"
                    src={img1}
                    alt="Third slide"
                    style={{opacity: "0.6"}}
                    width="800" height="850"
                  />
                  <Carousel.Caption style={{transform: "translateX(-28%) translateY(-200%)"}}>
                        <h3 className="h3-responsive" style={{fontFamily:"Robot",fontSize: "6vh"}}>Save to BioDB</h3>
                        <p style={{fontFamily:"Robot",fontSize: "4vh"}}>Permanently Save your Health data</p>
                  </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Row>
    </Container>
);
}
