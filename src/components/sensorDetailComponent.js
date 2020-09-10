
/*
  * Special thanks to Bartlomiej Mika
  * Taken from:
  *  https://github.com/nwatchcanada/nwapp-front/blob/master/src/components/members/admin/list/adminListComponent.js
*/

import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import { LinkContainer } from 'react-router-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container';
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css';
import 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min.css';
import paginationFactory from 'react-bootstrap-table2-paginator';
import filterFactory, { selectFilter } from 'react-bootstrap-table2-filter';
import ReactLoading from "react-loading";
import Button from 'react-bootstrap/Button';

const customTotal = (from, to, size) => (
    <span className="react-bootstrap-table-pagination-total">&nbsp;Showing { from } to { to } of { size } Results</span>
);

class RemoteListComponent extends Component {
    render() {
      const {
          // Pagination
          page, sizePerPage, totalSize,

          // Data
          data,

          // Everything else.
          onTableChange,
      } = this.props;
      // console.log(data)// For debugging purpose only

      const columns = [{
            dataField: 'attribute_name',
            text: ' Attribute Name',
            sort: false,
        },{
              dataField: 'creation_date',
              text: 'Creation Date',
              sort: false,
        },{
              dataField: 'value',
              text: 'Value',
              sort: false,

          }]
      const paginationOption = {
          page: page,
          sizePerPage: sizePerPage,
          totalSize: totalSize,
          sizePerPageList: [{
              text: '25', value: 25
          }, {
              text: '50', value: 50
          }, {
              text: '100', value: 100
          }, {
              text: 'All', value: totalSize
          }],
          showTotal: true,
          paginationTotalRenderer: customTotal,
          firstPageText: 'First',
          prePageText: 'Back',
          nextPageText: 'Next',
          lastPageText: 'Last',
          nextPageTitle: 'First page',
          prePageTitle: 'Pre page',
          firstPageTitle: 'Next page',
          lastPageTitle: 'Last page',
      };
        return (
          <div>
              {this.props.data !==null &&
                <BootstrapTable
                  bootstrap4
                  keyField='id'
                  data={ this.props.data }
                  columns={columns}
                  striped
                  bordered={ true }
                  noDataIndication="No Records were found!"
                  remote
                  onTableChange={ onTableChange }
                  pagination={ paginationFactory(paginationOption) }
                  wrapperClasses="table-responsive"
              />}
            </div>
        );
    }
}

export default function SensorDetailComponent(props){
    const{  name,
            token,
            data,
            message,
            searchTerm,
            onBackClick,
            onSearchChange,page,sizePerPage,
            totalSize,
            onTableChange,
            isLoading,
          } = props;
    return(
      <Container fluid>

        <Navbar style={{backgroundColor:"black"}} className="nav-bar" fixed="top">
            <LinkContainer  style={{color:"red",textShadow: "0 0 10px rgba(0,0,0,1.5)"}} to="/"><Navbar.Brand><b>BioDB</b></Navbar.Brand>
            </LinkContainer>
            <Nav className="ml-auto">
              <LinkContainer className="nav" style={{fontFamily:"verdana",color:"white",textShadow: "0 0 10px rgba(0,0,0,1.5)"}} to="/sensor-list"><Nav.Link>Dashboard</Nav.Link>
              </LinkContainer>
              <LinkContainer className="nav" style={{fontFamily:"verdana",color:"white",textShadow: "0 0 10px rgba(0,0,0,1.5)"}} to="/user-profile"><Nav.Link>Profile</Nav.Link>
              </LinkContainer>
              <LinkContainer className="nav" style={{fontFamily:"verdana",color:"white",textShadow: "0 0 10px rgba(0,0,0,1.5)"}} to="/settings"><Nav.Link>Settings</Nav.Link>
              </LinkContainer>
            </Nav>
        </Navbar>
      {isLoading ? (
        <div >
                <center>
                    <ReactLoading className="mt-5 pt-5" type={"bars"} color={"black"} />
                </center>
        </div>
        ) : (
        <div>
            <Row className="mt-5 ml-1">
              {name === "HKQuantityTypeIdentifierStepCount" &&
              <h4 className="mt-5 text-center mw-75" style={{color:"black",}}>Here's your tabulated data of the latest Step Counts data from the system</h4>}
              {name === "HKQuantityTypeIdentifierDistanceWalkingRunning" &&
              <h4 className="mt-5 text-center mw-75" style={{color:"black",}}>Here's your tabulated data of the latest Walking and Running data from the system</h4>}
              {name === "HKQuantityTypeIdentifierHeartRate" &&
              <h4 className="mt-5 text-center mw-75" style={{color:"black",}}>Here's your tabulated data of the latest Heart Rate data from the system</h4>}
              {name === "HKQuantityTypeIdentifierBasalEnergyBurned" &&
              <h4 className="mt-5 text-center mw-75" style={{color:"black",}}>Here's your tabulated data of the latest Energy Burned data from the system</h4>}
            </Row>

            {message != "" &&
            <div className="mt-4 w-75">
            <Alert variant="danger" >
                {message}
            </Alert>
            </div>}
            <br />
            {/*<center>                      # Search field for phase 2
                <input
                  style={{width:"40%"}}
                  text="text"
                  placeholder="Search your data here..."
                  value={searchTerm}
                  onChange={event => onSearchChange(event)}
                />
            </center>*/}
            <br />
            <RemoteListComponent
                  page={page}
                  sizePerPage={sizePerPage}
                  totalSize={totalSize}
                  data={data}
                  onTableChange={onTableChange}
            />
            <Button
                className="mt-5 mb-5"
                onClick={event => onBackClick(event)}>
                Back
            </Button>
        </div>)}
      </Container>
        );
    }
