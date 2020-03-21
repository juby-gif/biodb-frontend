import React, { Component } from 'react';
import { AxiosProvider, Request, Get, Delete, Head, Post, Put, Patch, withAxios } from 'react-axios';

import LoginComponent from '../components/loginComponent';
import { BIODB_TOKEN,BIODB_LOGGED_IN_USER } from '../constants';
import '../App.css'


export default class LoginContainer extends Component{

      /*   *
           *  Initializer
           *------------------------------------------------------------
      */
      constructor(props){
        super(props);
        this.state={
          username:"",
          password:"",
          response:"",
          message:"",
        }
        this.onUsernameChange = this.onUsernameChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onLoginClick = this.onLoginClick.bind(this);
        this.onRegisterClick = this.onRegisterClick.bind(this);
      }

      /* *
         *  Utility
         *------------------------------------------------------------
      */
      //Nothing

      /* *
         *  Component Life-cycle Management
         *------------------------------------------------------------
      */
      //Nothing

      /* *
         *  API callback functions
         *------------------------------------------------------------
      */
      onLoginAPIProcessCall(username,password){
        const axios = require('axios').default;
        axios.post('http://127.0.0.1:8000/api/login', {
            username: username,
            password: password
          })
        .then(response => {
          this.setState({
              response : JSON.parse(response.request.response),
              message : "Successfully Logged in"
          });
          localStorage.setItem(BIODB_LOGGED_IN_USER,JSON.stringify({username:username}));
          localStorage.setItem(BIODB_TOKEN,this.state.response.token);
          this.props.history.push("/sensor-list");
        })

        .catch(error => {
          this.setState({
              message : error.toString(),
          });
          });
      }

      /* *
         *  Event handling functions
         *------------------------------------------------------------
      */
      onUsernameChange(event){
        this.setState({
          message:""
        })
        this.setState({
          username:event.target.value,
        })
      }

      onPasswordChange(event){
        this.setState({
          message:"",
        })
        this.setState({
          password:event.target.value,
        })
      }

      onLoginClick(event){
        event.preventDefault();
        const {username,password} = this.state;
        this.onLoginAPIProcessCall(username,password);
      }

      onRegisterClick(event){
        event.preventDefault();
        this.props.history.push("/register")
      }

      /* *
         *  Main render function
         *------------------------------------------------------------
      */
      render(){
        const {username,password,response,message} = this.state;
        const {onUsernameChange,onPasswordChange,onLoginClick,onRegisterClick} = this;
        return(
          <div>
              <LoginComponent
              username={username}
              password={password}
              response={response}
              message={message}
              onUsernameChange={onUsernameChange}
              onPasswordChange={onPasswordChange}
              onLoginClick={onLoginClick}
              onRegisterClick={onRegisterClick}
              />
          </div>
        );
      }
}
