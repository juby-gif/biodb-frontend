import React, { Component } from 'react';

import UserProfileUpdateComponent from '../components/userProfileUpdateComponent'
import { BIODB_TOKEN,BIODB_USER_DETAIL } from '../constants';


export default class UserProfileRetrieveContainer extends Component{

  /*   *
       *  Initializer
       *------------------------------------------------------------
  */
    constructor(props){
        super(props);
        let userObj = JSON.parse(localStorage.getItem(BIODB_USER_DETAIL))
        this.state={
          firstName:userObj.firstName,
          lastName:userObj.lastName,
          username:userObj.username,
          email:userObj.email,
          token: localStorage.getItem(BIODB_TOKEN),
          response:"",
          message:"",
      };
      this.onFirstNameChange = this.onFirstNameChange.bind(this);
      this.onLastNameChange = this.onLastNameChange.bind(this);
      this.onUserProfileSaveClick = this.onUserProfileSaveClick.bind(this);
      this.onBackClick = this.onBackClick.bind(this);
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
    onLoadUserUpdateData(firstName,lastName,email,username,token){
      const axios = require('axios').default;
      axios.put('http://127.0.0.1:8000/api/user-profile/update', {

          first_name: firstName,
          last_name: lastName,
          username: username,
          email:email,


        },{headers:{'Authorization': 'Token '+ token}})
      .then(response => {
        this.setState({
            response : JSON.parse(response.request.response),
        });
        this.setState({
            message : "Profile was updated successfully",
        });

        this.props.history.push("/user-profile");
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
    onUserProfileSaveClick = (event) => {
      event.preventDefault();
      const { firstName,lastName,email,username,token } =this.state;
      this.onLoadUserUpdateData(firstName,lastName,email,username,token);
    }

    onFirstNameChange = (event) => {
      this.setState({
        firstName:event.target.value
      })
    }

    onLastNameChange = (event) => {
      this.setState({
        lastName:event.target.value
      })
    }

    onBackClick = (event) => {
     event.preventDefault();
    this.props.history.push("/user-profile");
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
                message } = this.state;
        const { onFirstNameChange,
                onLastNameChange,
                onUserProfileSaveClick,
                onBackClick} = this;
        return(
          <div>
              <UserProfileUpdateComponent
                  onFirstNameChange={onFirstNameChange}
                  onLastNameChange={onLastNameChange}
                  firstName={firstName}
                  lastName={lastName}
                  username={username}
                  email={email}
                  message={message}

                  onBackClick={onBackClick}
                  onUserProfileSaveClick={onUserProfileSaveClick}
              />
          </div>
        );
      }
}
