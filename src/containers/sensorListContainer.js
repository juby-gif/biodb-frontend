import React, { Component } from 'react';
import UserProfileRetrieveComponent from '../components/userProfileRetrieveComponent'

import SensorListComponent from '../components/sensorListComponent';
import LogoutComponent from '../components/logoutComponent';
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

        };
        this.onStepSensorClick = this.onStepSensorClick.bind(this);
        this.onWalkingandRunningSensorClick = this.onWalkingandRunningSensorClick.bind(this);
        this.onViewClick = this.onViewClick.bind(this);
        this.onLogoutClick = this.onLogoutClick.bind(this);
        this.onUserProfileRetrieveClick = this.onUserProfileRetrieveClick.bind(this);
        this.onHeartRateSensorClick = this.onHeartRateSensorClick.bind(this);
        this.onEnergyBurnedSensorClick = this.onEnergyBurnedSensorClick.bind(this);
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
                message : response.data.Error.toString(),
            });
          }
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
    onLogoutClick = (event) => {
    event.preventDefault();
    localStorage.removeItem(BIODB_TOKEN);
    localStorage.removeItem(BIODB_USER_DETAIL);
    localStorage.removeItem(BIODB_LOGGED_IN_USER);
    alert("Succesfully Logged out");
    this.props.history.push("/login");
    }

    onUserProfileRetrieveClick = (event) => {
      event.preventDefault();
      this.props.history.push("/user-profile");
    }

    onViewClick = (event,name) => {
      event.preventDefault();
      alert(name)
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
                welcomeName
                 } = this.state;
        const {
          onStepSensorClick,
          onWalkingandRunningSensorClick,
          onViewClick,
          onLogoutClick,
          onUserProfileRetrieveClick,
          onHeartRateSensorClick,
          onEnergyBurnedSensorClick,} = this;
        return(
          <div>
              <SensorListComponent
                      welcomeName={welcomeName}
                      message={message}
                      token={token}
                      name={name}
                      mean={mean}
                      mode={mode}
                      median={median}
                      maximum={maximum}
                      minimum={minimum}
                      onStepSensorClick={onStepSensorClick}
                      onWalkingandRunningSensorClick={onWalkingandRunningSensorClick}
                      onViewClick={onViewClick}
                      onUserProfileRetrieveClick={onUserProfileRetrieveClick}
                      onHeartRateSensorClick={onHeartRateSensorClick}
                      onEnergyBurnedSensorClick={onEnergyBurnedSensorClick}
              />
              <LogoutComponent
                onLogoutClick = {onLogoutClick}
              />
        </div>
      );
     }
}
