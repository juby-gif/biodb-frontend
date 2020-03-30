import React, { Component } from 'react';

import LandingPageComponent from '../components/landingPageComponent';


export default class LandingPageContainer extends Component{
  /*   *
       *  Initializer
       *------------------------------------------------------------
  */
  constructor(props){
    super(props);
    this.state={
      index:0,
    }
    this.handleSelect=this.handleSelect.bind(this);
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
handleSelect = (event,onSelectIndex) =>{
  this.setState({
    index:onSelectIndex,
  })
}

/* *
     *  Main render function
     *------------------------------------------------------------
  */
  render(){
    const { index } =this.state;
    const { handleSelect } =this;
    return(
      <div>
          <LandingPageComponent
              handleSelect={handleSelect}
              index={index}
          />
      </div>
    );
  }
}
