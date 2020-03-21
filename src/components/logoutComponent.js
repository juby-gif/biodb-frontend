import React, { Component } from 'react';

import '../App.css'


export default function LogoutComponent(props){

    const { onLogoutClick } = props;
    return(
      <div>
          <button
              style= {{marginLeft:"2%",marginTop:"30%"}}
              onClick={event => onLogoutClick(event)}>
              Logout
          </button>
      </div>
    );
}
