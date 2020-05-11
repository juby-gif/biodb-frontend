import React, { Component } from 'react';

import SensorListComponent from '../components/sensorListComponent';
import UserProfileRetrieveComponent from '../components/userProfileRetrieveComponent'
import { BIODB_TOKEN,BIODB_USER_DETAIL,BIODB_LOGGED_IN_USER } from '../constants';


export default class SensorListContainer extends Component{

    /*   *
         *  Initializer
         *------------------------------------------------------------
    */
    constructor(props){
        super(props);
        this.state={
          welcomeName: "",
          message: "",
          token: localStorage.getItem(BIODB_TOKEN),
          name:"",
          mean : "",
          mode : "",
          median : "",
          maximum : "",
          minimum : "",
          file:"",
          errorStatus:"",

        };
        this.onStepSensorClick = this.onStepSensorClick.bind(this);
        this.onWalkingandRunningSensorClick = this.onWalkingandRunningSensorClick.bind(this);
        this.onViewClick = this.onViewClick.bind(this);
        this.onLogoutClick = this.onLogoutClick.bind(this);
        this.onUserProfileRetrieveClick = this.onUserProfileRetrieveClick.bind(this);
        this.onHeartRateSensorClick = this.onHeartRateSensorClick.bind(this);
        this.onEnergyBurnedSensorClick = this.onEnergyBurnedSensorClick.bind(this);
        this.onFileChange = this.onFileChange.bind(this);
        this.onLogoutProcessAPI = this.onLogoutProcessAPI.bind(this);
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
      const user = JSON.parse(localStorage.getItem(BIODB_LOGGED_IN_USER));
      this.setState({
        welcomeName : user.username,
      })
    }

    /* *
        *  API callback functions
        *------------------------------------------------------------
    */
    onSensorStatisticsDataLoad(name){
      const axios = require('axios').default;
      const token = this.state.token;
      this.setState({
        message:"",
      })

      axios.get('http://127.0.0.1:8000/api/tsd?attribute_name=' + name, {
        headers: {
          'Authorization': 'Token '+ token
        }
      })

        .then(response => {
          console.log(response.data)
          if(response.data.Error == undefined){
            this.setState({
                name : response.data.name,
                mean : response.data.mean,
                median : response.data.median,
                mode : response.data.mode,
                maximum : response.data.maximum,
                minimum : response.data.minimum,
            });

          }
          else{
            this.setState({
                message : "Sorry No Records were found!",
            });
          }
        })

        .catch(error => {
          this.setState({
              message : error.toString(),
              errorStatus:"error",
          });
        })
    }

    onLogoutProcessAPI(){
      setTimeout(()=>{
        const axios = require('axios').default;
        const token = this.state.token;
        this.setState({
          message:"",
        })

        axios.post('http://127.0.0.1:8000/api/logout')

          .then(response => {
            console.log(response.data)
            this.props.history.push("/");
          })

          .catch(error => {
            this.setState({
                message : error.toString(),
                errorStatus:"error",
            });
          })
      },1500);
    }

    /* *
       *  Event handling functions
       *------------------------------------------------------------
    */
    onLogoutClick = (event) => {
    event.preventDefault();
    this.setState({
      message:"Logging out......Please wait!",
      errorStatus:"no-error",
    })
    localStorage.removeItem(BIODB_TOKEN);
    localStorage.removeItem(BIODB_USER_DETAIL);
    localStorage.removeItem(BIODB_LOGGED_IN_USER);
    this.onLogoutProcessAPI();
    }

    onUserProfileRetrieveClick = (event) => {
      event.preventDefault();
      this.props.history.push("/user-profile");
    }

    onViewClick = (event,name) => {
      event.preventDefault();
      // console.log(name) // For debugging purpose only

      if(name === "" || name === undefined || name === null){
        this.props.history.push(`/sensor-detail/error`);
      }
      else{
      this.props.history.push(`/sensor-detail/${name}`);
      }
    }

    onStepSensorClick = (event) => {
      event.preventDefault();
      this.onSensorStatisticsDataLoad("HKQuantityTypeIdentifierStepCount");
      }

    onWalkingandRunningSensorClick = (event) => {
      event.preventDefault();
      this.onSensorStatisticsDataLoad("HKQuantityTypeIdentifierDistanceWalkingRunning");
      }

    onHeartRateSensorClick = (event) => {
      event.preventDefault();
      this.onSensorStatisticsDataLoad("HKQuantityTypeIdentifierHeartRate");
      }

    onEnergyBurnedSensorClick = (event) => {
      event.preventDefault();
      this.onSensorStatisticsDataLoad("HKQuantityTypeIdentifierBasalEnergyBurned");
      }

      onFileChange(event){
        this.setState({
          file:event.target.files[0],
        })


     // Details of the uploaded file
     console.log(this.state.file);
      }

    /* *
       *  Main render function
       *------------------------------------------------------------
    */
    render(){
        const { message,
                token,
                name,
                mean,
                mode,
                median,
                maximum,
                minimum,
                firstName,
                lastName,
                username,
                email,
                welcomeName,
                file,
                errorStatus} = this.state;
        const {
          onStepSensorClick,
          onWalkingandRunningSensorClick,
          onViewClick,
          onLogoutClick,
          onUserProfileRetrieveClick,
          onHeartRateSensorClick,
          onEnergyBurnedSensorClick,
        onFileChange} = this;
        return(
          <div>
              <SensorListComponent
                      welcomeName={welcomeName}
                      message={message}
                      token={token}
                      name={name}
                      mean={mean}
                      errorStatus={errorStatus}
                      mode={mode}
                      median={median}
                      maximum={maximum}
                      minimum={minimum}
                      file={file}
                      onStepSensorClick={onStepSensorClick}
                      onWalkingandRunningSensorClick={onWalkingandRunningSensorClick}
                      onViewClick={onViewClick}
                      onUserProfileRetrieveClick={onUserProfileRetrieveClick}
                      onHeartRateSensorClick={onHeartRateSensorClick}
                      onEnergyBurnedSensorClick={onEnergyBurnedSensorClick}
                      onLogoutClick = {onLogoutClick}
                      onFileChange={onFileChange}

              />
        </div>
      );
     }
}
