import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';


import { LinkContainer } from 'react-router-bootstrap';

import img8 from '../img/img8.jpg'


export default function LoginComponent(props){

    const {username,
           password,
           response,
           message,
           onUsernameChange,
           onPasswordChange,
           onLoginClick,
           onRegisterClick,
           setShow,onCloseClick} = props;


    return(
      <Container style={{backgroundImage : `url(${img8})`,backgroundSize:"cover",height : "45rem" }} fluid>
            <Row>
                  <Navbar fixed="top" expand="sm" >
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
            </Row>
            <center>
                <Row className="mt-5">
                      <Col>
                      </Col>
                      <Col className="mt-5">
                            <div className="mt-5">
                                  {message !== "" &&
                                        <Alert variant="danger">
                                              <b>Username</b> or <b>Password</b> is incorrect.&nbsp;
                                              Please try again!
                                        </Alert>
                                    }
                            </div>
                            <br />
                            <br />
                            <Form>
                                <Form.Group as={Col} md="9" controlId="formBasicUsername">
                                      <Form.Control
                                          style={{color:"rgba(148, 161, 124,0.8)"}}
                                          className="input"
                                          type="text"
                                          placeholder="Username"
                                          value={username}
                                          onChange={ (event)=>{onUsernameChange(event)}}
                                       />
                                 </Form.Group>
                                <Form.Group as={Col} md="9" controlId="formBasicPassword">
                                  <Form.Control
                                      style={{color:"rgba(148, 161, 124, 0.8)"}}
                                      className="input"
                                      type="password"
                                      placeholder="Password"
                                      value={password}
                                      onChange={ (event)=>{onPasswordChange(event)}}
                                   />
                                </Form.Group>
                                <br />
                                <Col>
                                  <Button
                                        className="ml-3"
                                        type="submit"
                                        onClick={(event)=>onLoginClick(event)}>
                                    Login
                                  </Button>
                                  <br />
                                  <Button
                                        className="ml-3 mt-3"
                                        type="submit"
                                        onClick={(event)=>onRegisterClick(event)}>
                                    Register
                                  </Button>
          </Col>

      </Form>
                      </Col>
                      <Col>
                      </Col>
                </Row>
            </center>
      </Container>
    );
}
