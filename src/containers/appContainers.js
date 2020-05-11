
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, withRouter, Switch, Link } from "react-router-dom";
import LoginContainer from './loginContainer';
import RegisterContainer from './registerContainer';
import SensorListContainer from './sensorListContainer';
import SensorDetailContainer from './sensorDetailContainer';
import UserProfileRetrieveContainer from './userProfileRetrieveContainer';
import UserProfileUpdateContainer from './userProfileUpdateContainer';
import LandingPageContainer from './landingPageContainer';
import AboutContainer from './aboutContainer';
import ContactContainer from './contactContainer';

class AppContainers extends Component {
  render() {
    return (
        <Router>
         <div>
           <Switch>
               <Route path="/" exact component={LandingPageContainer} />
               <Route path="/about" exact component={AboutContainer} />
               <Route path="/contact" exact component={ContactContainer} />
               <Route path="/login" exact component={LoginContainer} />
               <Route path="/register" exact component={RegisterContainer} />
               <Route path="/sensor-list" exact component={SensorListContainer} />
               <Route path="/sensor-detail/:name" exact component={SensorDetailContainer} />
               <Route path="/user-profile" exact component={UserProfileRetrieveContainer} />
               <Route path="/user-profile-update" exact component={UserProfileUpdateContainer} />
           </Switch>
         </div>
       </Router>
    );
  }
}
export default withRouter(AppContainers);
