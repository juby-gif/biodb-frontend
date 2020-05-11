import React, { Component } from 'react';

import RegisterComponent from '../components/registerComponent';
import '../App.css';


export default class RegisterContainer extends Component{

    /*   *
         *  Initializer
         *------------------------------------------------------------
    */
    constructor(props){
      super(props);
      this.state={
        firstName:"",
        lastName:"",
        email:"",
        username:"",
        password:"",
        message : "",
        status: "",
        validated: false,
        responseRegister:{}
      }
      this.onUsernameChange = this.onUsernameChange.bind(this);
      this.onPasswordChange = this.onPasswordChange.bind(this);
      this.onFirstNameChange = this.onFirstNameChange.bind(this);
      this.onLastNameChange = this.onLastNameChange.bind(this);
      this.onEmailChange = this.onEmailChange.bind(this);
      this.onRegisterClick = this.onRegisterClick.bind(this);
      this.onLoginClick = this.onLoginClick.bind(this);
      this.onResponseProcessFromAPI = this.onResponseProcessFromAPI.bind(this);
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
    getResponseFromAPI(firstName,lastName,email,username,password){
      const axios = require('axios').default;
      axios.post('http://127.0.0.1:8000/api/register', {
        first_name:firstName,
        last_name:lastName,
        email:email,
        username:username,
        password:password

        })

      .then(response => {
        this.setState({ //Not working correctly...Need to be fixed later
            responseRegister : JSON.parse(response.request.response),
            message : "Success! You are registered as a BioDB user",
            status:"success",
        });
        this.props.history.push("/login")
      })

      .catch(error => {
        this.setState({
            message :error.toString(),
            status : "failure",
        });
        });
    }

    /* *
       *  Event handling functions
       *------------------------------------------------------------
    */
    onFirstNameChange(event){
      this.setState({
        message:"",
      })
      this.setState({
        firstName:event.target.value,
        validated:true,
      })
    }

    onLastNameChange(event){
      this.setState({
        message:"",
      })
      this.setState({
        lastName:event.target.value,
        validated:true,
      })
    }

    onEmailChange(event){
      this.setState({
        message:"",
      })
      this.setState({
        email:event.target.value,
        validated:true,
      })
    }

  onUsernameChange(event){
      this.setState({
        message:"",
      })
      this.setState({
        username:event.target.value,
        validated:true,
      })
    }

  onPasswordChange(event){
    this.setState({
      message:"",
    })
    this.setState({
      password:event.target.value,
      validated:true,
    })
  }

  onLoginClick(event){
        event.preventDefault();
        this.props.history.push("/login");
      }

  onRegisterClick(event){ // Need to fix the register issue
    const { username,
            password,
            firstName,
            lastName,
            email,} = this.state;
            console.log(firstName,lastName,email,username,password);
            this.onResponseProcessFromAPI(firstName,lastName,email,username,password);
  }

  onResponseProcessFromAPI(firstName,lastName,email,username,password){
    const { status,} = this.state;
    this.getResponseFromAPI(firstName,lastName,email,username,password);
    if(status === "success"){
      this.props.history.push("/login");
    }
  }

  /* *
     *  Main render function
     *------------------------------------------------------------
  */
  render(){
      const { firstName,
              lastName,
              email,
              username,
              password,
              message,
              responseRegister,
              status,
              validated } = this.state;
      const { onUsernameChange,
              onPasswordChange,
              onFirstNameChange,
              onLastNameChange,
              onEmailChange,
              onRegisterClick,
              onLoginClick, } = this;
      return(
        <div>
            <RegisterComponent
                    firstName={firstName}
                    status={status}
                    lastName={lastName}
                    email={email}
                    username={username}
                    password={password}
                    message={message}
                    validated={validated}
                    responseRegister={responseRegister}
                    onUsernameChange={onUsernameChange}
                    onPasswordChange={onPasswordChange}
                    onFirstNameChange={onFirstNameChange}
                    onLastNameChange={onLastNameChange}
                    onEmailChange={onEmailChange}
                    onRegisterClick={onRegisterClick}
                    onLoginClick={onLoginClick}
            />
        </div>
      );
    }
}
