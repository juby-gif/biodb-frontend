import React, { Component } from 'react';


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
    );
  }
