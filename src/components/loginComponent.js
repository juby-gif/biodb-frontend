import React, { Component } from 'react';


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
        <center className="login">
          <h1>Login</h1>
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
          <span style={{color:"beige"}}>New User ? Click Here to &nbsp;
            <a
              style={{color:"#00FFFF"}}
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
