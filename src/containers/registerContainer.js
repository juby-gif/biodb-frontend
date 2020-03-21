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
        error:"",
        responseRegister:{}
      }
      this.onUsernameChange = this.onUsernameChange.bind(this);
      this.onPasswordChange = this.onPasswordChange.bind(this);
      this.onFirstNameChange = this.onFirstNameChange.bind(this);
      this.onLastNameChange = this.onLastNameChange.bind(this);
      this.onEmailChange = this.onEmailChange.bind(this);
      this.onRegisterClick = this.onRegisterClick.bind(this);
      this.onLoginClick = this.onLoginClick.bind(this);
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
        this.setState({
            responseRegister : JSON.parse(response.request.response)
        });
        alert("Successfully Registered");
        console.log(this.state.responseRegister) //For Debugging Purpose Only
        this.props.history.push("/login");

      })

      .catch(error => {
        this.setState({
            error :error.toString(),
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
      })
    }

    onLastNameChange(event){
      this.setState({
        message:"",
      })
      this.setState({
        lastName:event.target.value,
      })
    }

    onEmailChange(event){
      this.setState({
        message:"",
      })
      this.setState({
        email:event.target.value,
      })
    }

  onUsernameChange(event){
      this.setState({
        message:"",
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
        this.props.history.push("/login");
      }

  onRegisterClick(event){
    const { username,
            password,
            firstName,
            lastName,
            email,
            message,
            user } = this.state;
    this.getResponseFromAPI(firstName,lastName,email,username,password);
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
              error,
              responseRegister,
            } = this.state;
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
                    lastName={lastName}
                    email={email}
                    username={username}
                    password={password}
                    message={message}
                    error={error}
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
