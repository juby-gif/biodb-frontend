import React, { Component } from 'react';

import UserProfileRetrieveComponent from '../components/userProfileRetrieveComponent'
import { BIODB_TOKEN,BIODB_USER_DETAIL } from '../constants';


export default class UserProfileRetrieveContainer extends Component{

    /* *
       *  Initializer
       *------------------------------------------------------------
   */
    constructor(props){
        super(props);
        this.state={
          firstName:"",
          lastName:"",
          username:"",
          email:"",
          token: localStorage.getItem(BIODB_TOKEN),
          message:"",
      };
      this.onUserProfileUpdateClick = this.onUserProfileUpdateClick.bind(this);
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
   componentDidMount(){
     this.getResponseFromAPI();
   }

   /* *
      *  API callback functions
      *------------------------------------------------------------
  */
   getResponseFromAPI(){
     const axios = require('axios').default;
     const token = this.state.token

     axios.get('http://127.0.0.1:8000/api/user-profile/retrieve', {
       headers: {
         'Authorization': 'Token '+ token
       }
     })

       .then(response => {
         console.log(response.data)
         this.setState({
             firstName : response.data.first_name,
             lastName : response.data.last_name,
             username : response.data.username,
             email : response.data.email,
             message:"",
         });
         const userObj = {
           firstName:this.state.firstName,
           lastName:this.state.lastName,
           email:this.state.email,
           username:this.state.username,
         }
         localStorage.setItem(BIODB_USER_DETAIL,JSON.stringify(userObj));
       })

       .catch(error => {
         this.setState({
             message : error.toString()
         });
       })
   }

  /* *
     *  Event handling functions
     *------------------------------------------------------------
  */
   onUserProfileUpdateClick = (event) =>{
     event.preventDefault();
     this.props.history.push("/user-profile-update");
   }

   onBackClick = (event) => {
     event.preventDefault();
   this.props.history.push("/sensor-list")
   }

  /* *
     *  Main render function
     *------------------------------------------------------------
  */
  render(){
      const { firstName,
              lastName,
              username,
              email,
              message} = this.state;
      const { onUserProfileUpdateClick,
              onBackClick } = this;
      return(
        <div>
            <UserProfileRetrieveComponent

                firstName={firstName}
                lastName={lastName}
                username={username}
                email={email}
                message={message}
                onBackClick={onBackClick}
                onUserProfileUpdateClick={onUserProfileUpdateClick}
            />
        </div>
      );
    }
}
