import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import CardDeck from 'react-bootstrap/CardDeck';
import { LinkContainer } from 'react-router-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

import img5 from '../img/img5.jpg';
import img6 from '../img/img6.jpg';


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
            onHeartRateSensorClick,
          onLogoutClick } = props;
    return(
        <div>
            <Container fluid>
                  <Row>
                    <Col>
                    <Navbar className="nav-bar" fixed="top" expand="sm" >
                        <LinkContainer  style={{color:"red",textShadow: "0 0 10px rgba(0,0,0,1.5)"}} to="/"><Navbar.Brand><b>BioDB</b></Navbar.Brand>
                        </LinkContainer>
                        <Nav className="ml-auto">
                          <LinkContainer className="nav" style={{fontFamily:"verdana",color:"white",textShadow: "0 0 10px rgba(0,0,0,1.5)"}} to="/user-profile"><Nav.Link>Profile</Nav.Link>
                          </LinkContainer>
                          <LinkContainer className="nav" style={{fontFamily:"verdana",color:"white",textShadow: "0 0 10px rgba(0,0,0,1.5)"}} to="/settings"><Nav.Link>Settings</Nav.Link>
                          </LinkContainer>
                          <LinkContainer className="nav" style={{fontFamily:"verdana",color:"white",textShadow: "0 0 10px rgba(0,0,0,1.5)"}} to="/" onClick={event=>onLogoutClick(event)}><Nav.Link>Logout</Nav.Link>
                          </LinkContainer>
                        </Nav>
                    </Navbar>
                      <br />

                    </Col>
                  </Row>

                  <br />
                  <br />
                  <br />
                  <Row>
                    {message !== "" && <p className = "validation-error">{message}</p>}
                    <br />
                    <p>Welcome <strong>{welcomeName.charAt(0).toUpperCase().concat(welcomeName.slice(1))}</strong>,</p>

                    <br />
                  </Row>
                  <Col>
                  </Col>
                  <br />
                  <br />
                  <br />
                  <Row>
                      <Col>
                        <CardDeck>
                            <Col>

                                <Card style={{ backgroundColor:"lightblue", height:"20rem",width: '18rem' }}>

                                <span style={{ fontSize:"6.5em",transform:"translateX(30%)"}}><i className="fas fa-shoe-prints"></i></span>
                                  <Card.Body>
                                    <Card.Title>StepCount</Card.Title>
                                    <Card.Text>
                                      Check your Step Count Statistics
                                    </Card.Text>
                                    <br />
                                    <button
                                        style={{marginLeft:"3%"}}
                                        onClick={(event)=>onStepSensorClick(event)}>
                                        StepCount
                                    </button>
                                  </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                              <Card style={{  backgroundColor:"lightblue",height:"20rem",width: '18rem' }}>

                                  <span style={{fontSize:"6.5em",transform:"translateX(30%)"}}><i className="fas fa-running"></i></span>
                                    <Card.Body>
                                      <Card.Title>Walking and Running</Card.Title>
                                      <Card.Text>
                                        Check your Walking and Running Statistics
                                      </Card.Text>
                                      <button
                                          style={{marginLeft:"3%"}}
                                          onClick={(event)=>onWalkingandRunningSensorClick(event)}>
                                          Walking and Running
                                      </button>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card style={{ backgroundColor:"lightblue",height:"20rem",width: '18rem' }}>
                                    <span style={{ fontSize:"6.5em",transform:"translateX(30%)"}}><i className="fas fa-heartbeat"></i></span>
                                      <Card.Body>
                                          <Card.Title>Heart Rate</Card.Title>
                                          <Card.Text>
                                            Check your Heart Rate Statistics
                                          </Card.Text>
                                          <br />
                                          <button
                                              style={{marginLeft:"3%"}}
                                              onClick={(event)=>onHeartRateSensorClick(event)}>
                                              Heart Rate
                                          </button>
                                      </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card style={{ backgroundColor:"lightblue",height:"20rem",width: '18rem' }}>
                                    <span style={{ fontSize:"6.5em",transform:"translateX(30%)"}}><i className="fas fa-fire"></i></span>

                                    <Card.Body>
                                      <Card.Title>Energy Burned</Card.Title>
                                      <Card.Text>
                                        Check your Energy Burned Statistics
                                      </Card.Text>
                                      <button
                                          style={{marginLeft:"3%"}}
                                          onClick={(event)=>onEnergyBurnedSensorClick(event)}>
                                          Energy Burned
                                      </button>
                                  </Card.Body>
                                </Card>

                            </Col>
                      </CardDeck>
                    </Col>
                </Row>
                <br />
                <br />
                <Row>
                    <SensorTable
                        name={name}
                        mean={mean}
                        mode={mode}
                        median={median}
                        maximum={maximum}
                        minimum={minimum}
                        onViewClick = {onViewClick}
                    />
                </Row>
            </Container>

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
        <Table responsive="sm">
          <thead className="table-header">
              {name !== "" && <tr>
                <th>Name</th>
                <th>Mean</th>
                <th>Mode</th>
                <th>Median</th>
                <th>Maximum</th>
                <th>Minimum</th>
                <th>View Records</th>
              </tr>}
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
        </Table>
    );
}
