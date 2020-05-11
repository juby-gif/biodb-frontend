import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Alert from 'react-bootstrap/Alert';
import InputGroup from 'react-bootstrap/InputGroup';
import { LinkContainer } from 'react-router-bootstrap';

import bck1 from '../img/bck1.jpg';


export default function RegisterComponent(props){

    const { firstName,
            lastName,
            email,
            username,
            password,
            message,
            responseRegister,
            onUsernameChange,
            onPasswordChange,
            onFirstNameChange,
            onLastNameChange,
            onEmailChange,
            onRegisterClick,
            onLoginClick,
            validated,
            status,} = props;
    return(
      <Container style={{backgroundImage: `url(${bck1})`,backgroundSize:"cover",height:"45rem"}} fluid>
            <Row>
                <Navbar  fixed="top" >
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
            <Row className="mt-5">
            {status === "success" && <Alert className="mt-3 w-75" variant="success">
                {message}
            </Alert>}
            {status === "failure" && <Alert className="mt-3 w-75" variant="danger">
                {message}
            </Alert>}
            </Row>
            <Row className="mt-4">
                <Col>
                </Col>
            <Col>
                <CardDeck>
                    <Card className="mt-5 shadow-lg p-3 mb-5 rounded" style={{backgroundColor:"rgba(120, 230, 255,0.4)"}}>
                          <Form noValidate validated={validated} className="ml-5 p-4 mt-2">
                                <Form.Row>
                                    <Form.Group as={Col} md="6" lg="5" controlId="validationCustomFirstName" className="mt-3">
                                        <Form.Control
                                              type="text"
                                              placeholder="First name"
                                              value = {firstName}
                                              onChange = {event => onFirstNameChange(event)}
                                            />
                                        </Form.Group>
                                        <Form.Group as={Col}  md="6" lg="5" controlId="validationCustomLastName" className="mt-3">
                                              <Form.Control
                                                    type="text"
                                                    placeholder="Last name"
                                                    value = {lastName}
                                                    onChange = {event => onLastNameChange(event)}
                                                  />
                                        </Form.Group>
                                </Form.Row>
                                <Form.Row>
                                      <Form.Group as={Col} md="6" lg="7" controlId="validationCustomUsername" className="mt-3">
                                              <InputGroup>
                                                      <InputGroup.Prepend>
                                                          <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                                                      </InputGroup.Prepend>
                                                      <Form.Control
                                                        type="text"
                                                        placeholder="Username"
                                                        aria-describedby="inputGroupPrepend"
                                                        value = {username}
                                                        onChange = {event => onUsernameChange(event)}
                                                        required
                                                      />
                                                      <Form.Control.Feedback type="invalid">
                                                        Please choose a username.
                                                      </Form.Control.Feedback>
                                              </InputGroup>
                                      </Form.Group>
                                </Form.Row>
                                <Form.Row>
                                    <Form.Group as={Col} md="6" lg="7" controlId="validationCustomEmail" className="mt-3">
                                          <Form.Control
                                            type="email"
                                            placeholder="Email"
                                            value = {email}
                                            onChange = {event => onEmailChange(event)}
                                          />
                                          <Form.Control.Feedback type="invalid">
                                                Please choose a valid email.
                                          </Form.Control.Feedback>
                                      </Form.Group>
                                </Form.Row>
                                <Form.Row>
                                      <Form.Group as={Col} md="6" lg="7" controlId="validationCustomPassword" className="mt-3">
                                          <Form.Control
                                            type="password"
                                            placeholder="Password"
                                            value = {password}
                                            onChange = {event => onPasswordChange(event)}
                                            required
                                          />
                                          <Form.Control.Feedback type="invalid">
                                            Please choose a valid password.
                                          </Form.Control.Feedback>
                                      </Form.Group>
                              </Form.Row>
                              <center className="mt-4">
                                  <Button
                                      type="submit"
                                      onClick={(event)=>onRegisterClick(event)}>
                                      Register
                                  </Button>
                                  <br />
                                  <br />
                                  <Button
                                      type="submit"
                                      onClick={event => onLoginClick(event)}>
                                      Already Registered
                                  </Button>
                              </center>
                          </Form>
                    </Card>
                </CardDeck>
            </Col>
            <Col>
            </Col>
      </Row>
  </Container>
  );
}
