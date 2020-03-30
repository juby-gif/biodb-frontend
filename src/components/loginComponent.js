import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap';

import img7 from '../img/img7.jpg'


export default function LoginComponent(props){

    const {username,
           password,
           response,
           message,
           onUsernameChange,
           onPasswordChange,
           onLoginClick,
           onRegisterClick} = props;

    return(
      <div>
      <Navbar fixed="top" expand="sm" >
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
          <center className="login">
            <h1>Login</h1>
            <br />
            <p style={{ color : 'red'}}>{message}</p>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={ (event)=>{onUsernameChange(event)}}
            />
            <br />
            <br />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={ (event)=>{onPasswordChange(event)}}
            />
            <br />
            <br />
            <button
                style={{marginLeft:"1%"}}
                className="btn btn-primary btn-block btn-large"
                onClick={(event)=>onLoginClick(event)}>
                Log-in
            </button>
            <br />
            <br />
            <span style={{color:"blue"}}>New User ? Click Here to &nbsp;
              <a
                style={{color:"navyblue"}}
                href="/login"
                onClick={event => onRegisterClick(event)}
              >
                Register
              </a>
            </span>
          </center>
        </div>
    );
}
