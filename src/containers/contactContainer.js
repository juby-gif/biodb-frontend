import React, { Component } from 'react';

import ContactComponent from '../components/contactComponent';


export default class AboutContainer extends Component{
  /*   *
       *  Initializer
       *------------------------------------------------------------
  */
  constructor(props){
    super(props);
    this.state={

    }
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
  //Nothing

/* *
     *  Event handling functions
     *------------------------------------------------------------
  */
  //Nothing

/* *
     *  Main render function
     *------------------------------------------------------------
  */

  render(){
    return(
      <div>
          <ContactComponent />
      </div>
    );
  }
}
