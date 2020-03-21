import React, { Component } from 'react';

import '../App.css'


export default function UserProfileUpdateComponent(props){

    const { onFirstNameChange,
            onLastNameChange,
            firstName,
            lastName,
            username,
            email,
            onUserProfileSaveClick,
            message,
            onBackClick } = props;
    return(
      <div>
          <p className = "validation-error">{message}</p>
          <input
            type="text"
            value={firstName}
            placeholder="First Name"
            onChange={event => onFirstNameChange(event)}
          />

          <input
            type="text"
            value={lastName}
            placeholder="Last Name"
            onChange={event => onLastNameChange(event)}
          />

          <input
            type="text"
            value={email}
            placeholder="Email"
            readOnly
          />

          <input
            type="text"
            value={username}
            placeholder="Username"
            readOnly
          />
          <br />
          <br />

          <button
              style= {{marginLeft:"2%",marginTop:"30%"}}
              onClick={event => onUserProfileSaveClick(event)}>
              Save
          </button>
          <button
              style={{marginLeft:"15%",marginRight:"60%",marginTop:"2%",marginBottom:"2%"}}
              onClick={event => onBackClick(event)}>
              Back
          </button>
      </div>
    );
}
