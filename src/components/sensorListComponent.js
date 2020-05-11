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
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner'

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
          onLogoutClick,file,onFileChange } = props;
    return(
            <Container style={{backgroundColor:"white"}} fluid>
                        <Navbar style={{backgroundColor:"black"}} className="nav-bar" fixed="top">
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
                  <Row className="mt-5 ml-3">

                  {message !== "" &&
                  <div className="mt-4 w-75">

                  <Alert variant="danger" >
                      {message}
                  </Alert>
                  </div>
                  }

                  </Row>
                  <Row>
                      <br />
                      <p className="ml-3 mt-4">Welcome <strong>{welcomeName.charAt(0).toUpperCase().concat(welcomeName.slice(1))}</strong>,</p>
                      <br />
                  </Row>
                  <br />
                  <br />
                  <br />


                  <Row className="ml-5 mr-5">
                        <CardDeck>
                          <Row>
                            <Col className="mt-3">
                                <Card style={{ backgroundColor:"lightblue", height:"20rem",width: '18rem' }}>
                                      <span style={{ fontSize:"6.5em",}}><center><i className="fas fa-shoe-prints"></i></center></span>
                                      <Card.Body>
                                          <Card.Title>StepCount</Card.Title>
                                          <Card.Text>
                                                Check your Step Count Statistics
                                          </Card.Text>
                                          <br />
                                          <center>
                                              <Button
                                                    onClick={(event)=>onStepSensorClick(event)}>
                                                  StepCount
                                              </Button>
                                          </center>
                                      </Card.Body>
                                </Card>
                            </Col>
                            <Col className="mt-3">
                              <Card style={{  backgroundColor:"lightblue",height:"20rem",width: '18rem' }}>
                                  <span style={{fontSize:"6.5em",}}><center><i className="fas fa-running"></i></center></span>
                                  <Card.Body>
                                      <Card.Title>Walking and Running</Card.Title>
                                      <Card.Text>
                                          Check your Walking and Running Statistics
                                      </Card.Text>
                                      <center>
                                          <Button
                                              onClick={(event)=>onWalkingandRunningSensorClick(event)}>
                                              Walking and Running
                                          </Button>
                                      </center>
                                  </Card.Body>
                                </Card>
                            </Col>
                            <Col className="mt-3">
                                <Card style={{ backgroundColor:"lightblue",height:"20rem",width: '18rem' }}>
                                    <span style={{ fontSize:"6.5em",}}><center><i className="fas fa-heartbeat"></i></center></span>
                                      <Card.Body>
                                          <Card.Title>Heart Rate</Card.Title>
                                          <Card.Text>
                                            Check your Heart Rate Statistics
                                          </Card.Text>
                                          <br />
                                          <center>
                                              <Button
                                                  onClick={(event)=>onHeartRateSensorClick(event)}>
                                                  Heart Rate
                                              </Button>
                                          </center>
                                      </Card.Body>
                                </Card>
                            </Col>
                            <Col className="mt-3">
                                <Card style={{ backgroundColor:"lightblue",height:"20rem",width: '18rem' }}>
                                    <span style={{ fontSize:"6.5em",}}><center><i className="fas fa-fire"></i></center></span>

                                    <Card.Body>
                                      <Card.Title>Energy Burned</Card.Title>
                                      <Card.Text>
                                        Check your Energy Burned Statistics
                                      </Card.Text>
                                      <center>
                                          <Button
                                              onClick={(event)=>onEnergyBurnedSensorClick(event)}>
                                              Energy Burned
                                          </Button>
                                      </center>
                                  </Card.Body>
                                </Card>
                            </Col>
                            </Row>
                      </CardDeck>
                </Row>
                <br />
                <br />
                <Row className="ml-5 mr-5">
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
                <Row className="mt-5 ml-5">
                    <input
                        type="file"
                        placeholder="Upload your file"
                        value={file}
                        onChange={event=>onFileChange(event)}
                    />
                </Row>
                <br />
                <br />
            </Container>
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
              <td><Button
                      onClick={(event,name) => onViewClick(event,"HKQuantityTypeIdentifierStepCount")}>
                      View
                  </Button>
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
              <td><Button
                      onClick={(event,name) => onViewClick(event,"HKQuantityTypeIdentifierDistanceWalkingRunning")}>
                      View
                  </Button>
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
              <td><Button
                      onClick={(event,name) => onViewClick(event,"HKQuantityTypeIdentifierBasalEnergyBurned")}>
                      View
                  </Button>
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
              <td><Button
                      onClick={(event,name) => onViewClick(event,"HKQuantityTypeIdentifierHeartRate")}>
                      View
                  </Button>
              </td>

            </tr>
          }
          </tbody>
        </Table>
    );
}
