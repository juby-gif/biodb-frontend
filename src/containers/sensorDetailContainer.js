import React, { Component } from 'react';
import { AxiosProvider, Request, Get, Delete, Head, Post, Put, Patch, withAxios } from 'react-axios';

import SensorDetailComponent from '../components/sensorDetailComponent';
import { BIODB_TOKEN } from '../constants';


export default class SensorDetailContainer extends Component{

    /*   *
         *  Initializer
         *------------------------------------------------------------
    */
    constructor(props){
      super(props);

      const { nameURLParam } = this.props.match.params
      const name = props.name;
      this.state={
        name:name,
        token: localStorage.getItem(BIODB_TOKEN),
        data:null,
        message:"",
        searchTerm:"",
        nameURLParam:nameURLParam,
      }
      this.onBackClick = this.onBackClick.bind(this);
      this.onSearchChange = this.onSearchChange.bind(this);
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
      const { name } = this.props.match.params;
      this.onSensorDetailLoad(name);
    }

    /* *
        *  API callback functions
        *------------------------------------------------------------
    */
    onSensorDetailLoad(name){
      const axios = require('axios').default;
      const token = this.state.token;

      axios.get('http://127.0.0.1:8000/api/tsd-by-attribute-name?attribute_name=' + name, {
        headers: {
          'Authorization': 'Token '+ token
        }
        })

        .then(response => {
          this.setState({
            data:response.data,
          });
        })

        .catch(error => {
          this.setState({
              message : error.toString()
          });
          console.log(error);
        })
    }

    /* *
       *  Event handling functions
       *------------------------------------------------------------
    */
    onSearchChange = (event) => {
      event.preventDefault();
      this.setState({
        searchTerm:event.target.value,
      })
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
      const { name,
              token,
              data,
              message,
              searchTerm,
              nameURLParam,
            } = this.state;
      const { onBackClick,
              onSearchChange } = this;
      return(
        <div>
            <SensorDetailComponent
                    name={name}
                    token={token}
                    data={data}
                    message={message}
                    searchTerm={searchTerm}
                    nameURLParam={nameURLParam}
                    onBackClick={onBackClick}
                    onSearchChange={onSearchChange}
            />
        </div>
      );
    }
}
