import React, { Component } from 'react';
import { AxiosProvider, Request, Get, Delete, Head, Post, Put, Patch, withAxios } from 'react-axios';

import '../App.css';


export default function SensorListComponent(props){

    const { welcomeName,
            message,
            token,
            name,
            mean,
            mode,
            median,
            maximum,
            minimum,
            onStepSensorClick,
            onWalkingandRunningSensorClick,
            onViewClick,
            onUserProfileRetrieveClick,
            onEnergyBurnedSensorClick,
            onHeartRateSensorClick } = props;
    return(
        <div>
            <p className = "validation-error">{message}</p>
            <br />
            <p>Welcome <strong>{welcomeName.charAt(0).toUpperCase().concat(welcomeName.slice(1))}</strong>,</p>
            <h1 style={{textAlign:"center"}}>{name}</h1>
            <br />
            <button
                style={{marginLeft:"3%"}}
                onClick={(event)=>onStepSensorClick(event)}>
                StepCount
            </button>
            <br />
            <br />
            <button
                style={{marginLeft:"3%"}}
                onClick={(event)=>onWalkingandRunningSensorClick(event)}>
                Walking and Running
            </button>
            <br />
            <br />
            <button
                style={{marginLeft:"3%"}}
                onClick={(event)=>onHeartRateSensorClick(event)}>
                Heart Rate
            </button>
            <br />
            <br />
            <button
                style={{marginLeft:"3%"}}
                onClick={(event)=>onEnergyBurnedSensorClick(event)}>
                Energy Burned
            </button>
            <br />
            <br />
            <br />
            <SensorTable
                name={name}
                mean={mean}
                mode={mode}
                median={median}
                maximum={maximum}
                minimum={minimum}
                onViewClick = {onViewClick}
            />
            <button
                style= {{marginLeft:"2%",marginTop:"30%"}}
                onClick={event => onUserProfileRetrieveClick(event)}>
                Profile
            </button>
            <br />
        </div>
      );
  }

  function SensorTable(props){
      const {
              name,
              mean,
              mode,
              median,
              maximum,
              minimum,
              onViewClick } = props;

      return(
        <table>
          <thead className="table-header">
            <tr>
              <th>Name</th>
              <th>Mean</th>
              <th>Mode</th>
              <th>Median</th>
              <th>Maximum</th>
              <th>Minimum</th>
              <th>View Records</th>
            </tr>
          </thead>
          <tbody className="table-content">

            {name === "HKQuantityTypeIdentifierStepCount" &&
              <tr key={name}>
                <td>{name}</td>
                <td>{mean}{" count"}</td>
                <td>{mode}{" count"}</td>
                <td>{median}{" count"}</td>
                <td>{maximum}{" count"}</td>
                <td>{minimum}{" count"}</td>
                <td><button
                        onClick={(event,name) => onViewClick(event,"HKQuantityTypeIdentifierStepCount")}>
                        View
                    </button>
                </td>

              </tr>
            }
            {name === "HKQuantityTypeIdentifierDistanceWalkingRunning" &&
              <tr>
                <td>{name}</td>
                <td>{mean}{" km"}</td>
                <td>{mode}{" km"}</td>
                <td>{median}{" km"}</td>
                <td>{maximum}{" km"}</td>
                <td>{minimum}{" km"}</td>
                <td><button
                        onClick={(event,name) => onViewClick(event,"HKQuantityTypeIdentifierDistanceWalkingRunning")}>
                        View
                    </button>
                </td>
              </tr>
            }
            {name === "HKQuantityTypeIdentifierBasalEnergyBurned" &&
              <tr key={name}>
                <td>{name}</td>
                <td>{mean}{" kcal"}</td>
                <td>{mode}{" kcal"}</td>
                <td>{median}{" kcal"}</td>
                <td>{maximum}{" kcal"}</td>
                <td>{minimum}{" kcal"}</td>
                <td><button
                        onClick={(event,name) => onViewClick(event,"HKQuantityTypeIdentifierBasalEnergyBurned")}>
                        View
                    </button>
                </td>

              </tr>
            }
            {name === "HKQuantityTypeIdentifierHeartRate" &&
              <tr key={name}>
                <td>{name}</td>
                <td>{mean}{" count/min"}</td>
                <td>{mode}{" count/min"}</td>
                <td>{median}{" count/min"}</td>
                <td>{maximum}{" count/min"}</td>
                <td>{minimum}{" count/min"}</td>
                <td><button
                        onClick={(event,name) => onViewClick(event,"HKQuantityTypeIdentifierHeartRate")}>
                        View
                    </button>
                </td>

              </tr>
            }
          </tbody>
        </table>
      );
}
