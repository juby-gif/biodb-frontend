import React, { Component } from 'react';

import SensorDetailComponent from '../components/sensorDetailComponent';
import { BIODB_TOKEN } from '../constants';


export default class SensorDetailContainer extends Component{

    /*   *
         *  Initializer
         *------------------------------------------------------------
    */
    constructor(props){
      super(props);
      const name  = this.props.match.params.name;
      this.state={
        name:name,
        token: localStorage.getItem(BIODB_TOKEN),
        message:"",
        searchTerm:"",

        // Pagination
        page: 1,
        sizePerPage: 25,
        totalSize: 0,
        isLoading:true,

        //List
        data:null,
        }
      this.onBackClick = this.onBackClick.bind(this);
      this.onSearchChange = this.onSearchChange.bind(this);
      this.onTableChange = this.onTableChange.bind(this);
      this.onSensorDetailLoad = this.onSensorDetailLoad.bind(this);
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
      const name = this.props.match.params.name;
      let page = this.state.page
      this.onSensorDetailLoad(name,page);
      // console.log(this.state.data)// For debugging purpose only
    }

    /* *
        *  API callback functions
        *------------------------------------------------------------
    */
    async onSensorDetailLoad(name,page,sizePerPage){
        // console.log(name,page)// For debugging purpose only
        
        setTimeout(() => { //Set delay of 1500 for loading state
        const axios = require('axios').default;
        const token = localStorage.getItem(BIODB_TOKEN);
        let URL = "http://127.0.0.1:8000/api/tsd-by-attribute-name?attribute_name=" + name + "&page="+page + "&page_size=" + sizePerPage;
        axios.get(URL, {
          headers: {
            'Authorization': 'Token '+ token
          }
          })

          .then(response => {
            // console.log(response); // For debugging purposes only.
            let totalSize = response.data.count;
            let results = response.data.results;
            // console.log(response.data.results); //For debugging purpose only
            this.setState({
              data:results,
              totalSize:totalSize,
              page:page,
              isLoading:false,
              sizePerPage:sizePerPage,
            });
          })

          .catch(error => {
            this.setState({
                message : error.toString(),
                isLoading:false,
            });
            console.log(error);
          })
          },1500);
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

      async onTableChange(type,event) {
          if(type === "pagination"){
            const { page,sizePerPage } = event;
            const { name } = this.state;
            // console.log("On Table Change ",event); // For debugging purposes only.
            //   console.log("On Table Change  " + type ); // For debugging purposes only.
              console.log("Event ", event.page);

              this.setState(
                  {
                    page: page,
                    isLoading: true,
                    sizePerPage:sizePerPage,
                  },
                  ()=>{
                      this.onSensorDetailLoad(name,page,sizePerPage);
                  }
              );
    }
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
                page,
                sizePerPage,
                totalSize,
                isLoading,
              } = this.state;

              // console.log(name); // For debugging purposes only.
              // console.log(totalSize) // For debugging purposes only.

        const { onBackClick,
                onSearchChange,
                 onTableChange,
              } = this;

        return(
          <div>
              <SensorDetailComponent
                      name={name}
                      token={token}
                      message={message}
                      searchTerm={searchTerm}
                      onBackClick={onBackClick}
                      onSearchChange={onSearchChange}
                      page={page}
                      sizePerPage={sizePerPage}
                      totalSize={totalSize}
                      data={data}
                      isLoading={isLoading}
                      onTableChange={onTableChange}
              />
          </div>
        );
      }
  }
