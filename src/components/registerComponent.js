import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap';


export default function RegisterComponent(props){

    const { firstName,
            lastName,
            email,
            username,
            password,
            message,
            error,
            responseRegister,
            onUsernameChange,
            onPasswordChange,
            onFirstNameChange,
            onLastNameChange,
            onEmailChange,
            onRegisterClick,
            onLoginClick, } = props;
    return(
      <div>
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
      <div className="login">

        <h1>Register</h1>
        {(message)?
       <span>{message}</span> :
       <span  className = "validation-error">{error}</span>}
       <br />
        <input
        type="text"
        placeholder = "First Name"
        value = {firstName}
        onChange = {event => onFirstNameChange(event)}
        />
        <br />
        <br />
        <input
        type="text"
        placeholder = "Last Name"
        value = {lastName}
        onChange = {event => onLastNameChange(event)}
        />
        <br />
        <br />
        <input
        type="email"
        placeholder = "Email"
        value = {email}
        onChange = {event => onEmailChange(event)}
        />
        <br />
        <br />
        <input
        type="password"
        placeholder = "Password"
        value = {password}
        onChange = {event => onPasswordChange(event)}
        />
        <br />
        <br />
        <input
        type="text"
        placeholder = "Username"
        value = {username}
        onChange = {event => onUsernameChange(event)}
        />
        <br />
        <br />
        {/*<input
        type="text"
        placeholder = "bloodType"
        value = {}
        onChange = {event => this.onBloodTypeChange(event)}

        /> */}
        <button
            onClick={event => onRegisterClick(event)}>
            Register
        </button>
        <br />
        <br />
        <button
            style={{marginLeft:"23%"}}
            onClick={event => onLoginClick(event)}>
            Already Registered
        </button>
      </div>
      </div>
    );
  }
