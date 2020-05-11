import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import { LinkContainer } from 'react-router-bootstrap';

import img4 from '../img/img4.jpg';


export default function ContactComponent(props){
  return(
      <div>
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
                    <Card responsive className="bg-dark text-white">
                        <Card.Img src={img4} alt="Card image" width="845" height="350" />
                        <Card.ImgOverlay>
                            <Card.Title style={{transform:"translateY(490%)",marginTop:"-60px",
                                                textAlign:"center", fontFamily:"verdana",
                                                fontSize:"250%",textShadow: "0 0 10px rgba(0,0,0,1.5)"}}>
                                                Let's be Connected!
                            </Card.Title>
                        </Card.ImgOverlay>
                    </Card>
                </Row>
                <Row>
                  <Col>
                      <Form>
                        <br />
                        <br />
                            <Form.Group controlId="name">
                                <Form.Control type="text" placeholder="Your name" />
                            </Form.Group>
                            <Form.Group controlId="email">
                                <Form.Control type="email" placeholder="Email" />
                            </Form.Group>
                            <Form.Group controlId="subject">
                                <Form.Control type="text" placeholder="Subject" />
                            </Form.Group>
                            <Form.Group controlId="message">
                                <Form.Control as="textarea" rows="6" placeholder="Your message here..." />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                              Submit
                            </Button>
                      </Form>
                  </Col>
                  <Col>
                  </Col>
                  <Col>
                  </Col>
                </Row>
          </Container>
      </div>
  );
}
