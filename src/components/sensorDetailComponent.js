import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import { LinkContainer } from 'react-router-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


export default function SensorDetailComponent(props){
    const{  name,
            token,
            data,
            message,
            searchTerm,
            onBackClick,
            onSearchChange,
            nameURLParam,} = props;
    return(
      <div>
        <h1 style={{textAlign:"center"}}>{name}</h1>
        <Navbar className="nav-bar" fixed="top" expand="sm" >
            <LinkContainer  style={{color:"red",textShadow: "0 0 10px rgba(0,0,0,1.5)"}} to="/"><Navbar.Brand><b>BioDB</b></Navbar.Brand>
            </LinkContainer>
            <Nav className="ml-auto">
              <LinkContainer className="nav" style={{fontFamily:"verdana",color:"white",textShadow: "0 0 10px rgba(0,0,0,1.5)"}} to="/sensor-list"><Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer className="nav" style={{fontFamily:"verdana",color:"white",textShadow: "0 0 10px rgba(0,0,0,1.5)"}} to="/user-profile"><Nav.Link>Profile</Nav.Link>
              </LinkContainer>
              <LinkContainer className="nav" style={{fontFamily:"verdana",color:"white",textShadow: "0 0 10px rgba(0,0,0,1.5)"}} to="/settings"><Nav.Link>Settings</Nav.Link>
              </LinkContainer>

            </Nav>
        </Navbar>
        <p className = "validation-error">{message}</p>
        <br />
        <center>
          <input
            style={{width:"40%"}}
            text="text"
            placeholder="Search your data here..."
            value={searchTerm}
            onChange={event => onSearchChange(event)}
          />
        </center>
        <br />
        <TableView data={data} searchTerm={searchTerm} />
        <br />
        <br />
        <br />
        <button
            style={{marginLeft:"15%",marginRight:"60%",marginTop:"2%",marginBottom:"2%"}}
            onClick={event => onBackClick(event)}>
            Back
        </button>
      </div>
    );
    }

  function TableView(props){
  const data = props.data;
  const searchTerm = props.searchTerm;
  console.log(props.data) // For Debugging Purpose only
  if(data != undefined && data != null){
    const filteredData = data.results.filter(
        (datum)=>
              datum.creation_date.toLowerCase().includes( searchTerm.toLowerCase() )
      )

  var tableElement = filteredData.map(
    (datum) =>
    <tr>
      <td style={{color:"black"}}>{datum.attribute_name}</td>
      <td style={{color:"black"}}>{datum.creation_date}</td>
      {datum.attribute_name === "HKQuantityTypeIdentifierStepCount" &&
      <td style={{color:"black"}}>{datum.value}{" count"}</td>
      }
      {datum.attribute_name === "HKQuantityTypeIdentifierDistanceWalkingRunning" &&
      <td style={{color:"black"}}>{datum.value}{" km"}</td>
      }
      {datum.attribute_name === "HKQuantityTypeIdentifierHeartRate" &&
      <td style={{color:"black"}}>{datum.value}{" count/min"}</td>
      }
      {datum.attribute_name === "HKQuantityTypeIdentifierBasalEnergyBurned" &&
      <td style={{color:"black"}}>{datum.value}{" kcal"}</td>
      }
    </tr>
  )
  }
    return(

      <Table responsive="sm">
        <thead className="table-header">
          <tr>
            <th>Attribute Name</th>
            <th>Creation Date</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody className="table-content">
                {tableElement}
        </tbody>
    </Table>
    );
}
