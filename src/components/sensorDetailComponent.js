import React, { Component } from 'react';

export default function SensorDetailComponent(props){
    const{  name,
            token,
            data,
            message,
            searchTerm,
            onBackClick,
            onSearchChange,
            nameURLParam} = props;
    return(
      <div>
        <h1 style={{textAlign:"center"}}>{name}</h1>
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
      <td>{datum.attribute_name}</td>
      <td>{datum.creation_date}</td>
      {datum.attribute_name === "HKQuantityTypeIdentifierStepCount" &&
      <td>{datum.value}{" count"}</td>
      }
      {datum.attribute_name === "HKQuantityTypeIdentifierDistanceWalkingRunning" &&
      <td>{datum.value}{" km"}</td>
      }
    </tr>
  )
  }
    return(
      <table>
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

      </table>
    );
}
