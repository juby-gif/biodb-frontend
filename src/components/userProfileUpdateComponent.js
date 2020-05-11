import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Alert from 'react-bootstrap/Alert';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

import userimg from '../img/userimg.jpg';
import '../App.css'


export default function UserProfileRetrieveComponent(props){

    const { firstName,
            lastName,
            email,
            username,
            message,
            onFirstNameChange,
            onLastNameChange,
            onUserProfileSaveClick,
            onBackClick, } = props;
    return(
      <Container style={{backgroundColor:"white"}} fluid>
            <Row>
                {message !== "" &&
                <div className="mt-4 w-75">
                    <Alert variant="danger">
                        {message}
                    </Alert>
                </div>}
            </Row>
            <Row>
                <Col>
                </Col>
                <Col>
                    <CardDeck>
                        <Card className="mt-5 m-2 shadow-lg p-3 mb-5 rounded" style={{backgroundColor:"rgba(155, 155, 155,0.6)"}}>
                              <center>
                              <Col xs={6} md={4}>
                                <Image src={userimg} roundedCircle fluid/>
                              </Col>
                              </center>
                              <Form>
                                  <Form.Group controlId="formGroupFirstName">
                                      <Form.Label>First Name</Form.Label>
                                      <Form.Control type="text" placeholder="First Name" value={firstName} onChange={ (event)=>{onFirstNameChange(event)}} />
                                  </Form.Group>
                                  <Form.Group controlId="formGroupLastName">
                                      <Form.Label>Last Name</Form.Label>
                                      <Form.Control type="text" placeholder="Last Name" value={lastName} onChange={ (event)=>{onLastNameChange(event)}}/>
                                  </Form.Group>
                                  <Form.Group controlId="formGroupEmail">
                                      <Form.Label>Email</Form.Label>
                                      <Form.Control type="email" placeholder="Email"  value={email} readOnly/>
                                  </Form.Group>
                                  <Form.Group controlId="formGroupUsername">
                                      <Form.Label>Username</Form.Label>
                                      <Form.Control type="text" placeholder="Username" value={username} readOnly/>
                                  </Form.Group>

                              </Form>
                              <Row>
                                  <Button
                                      className="mt-3 ml-5 w-25"
                                      onClick={event => onUserProfileSaveClick(event)}>
                                      Save
                                  </Button>
                                  <Button
                                  className="mt-3 ml-3 w-25"
                                      onClick={event => onBackClick(event)}>
                                      Back
                                  </Button>
                              </Row>
                        </Card>
                    </CardDeck>
                </Col>
                <Col>
                </Col>
            </Row>
      </Container>
    );
}
