
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
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css';
import 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min.css';
import paginationFactory from 'react-bootstrap-table2-paginator';
import filterFactory, { selectFilter } from 'react-bootstrap-table2-filter';


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
            text: 'Name',
            sort: false,
        },{
              dataField: 'creation_date',
              text: 'Date',
              sort: false,
        },{
              dataField: 'value',
              text: 'value',
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
                  bordered={ false }
                  noDataIndication="No Records were found!"
                  remote
                  onTableChange={ onTableChange }
                  pagination={ paginationFactory(paginationOption) }
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
        {isLoading && <h1>Loading.....</h1>}
        <RemoteListComponent
              page={page}
              sizePerPage={sizePerPage}
              totalSize={totalSize}
              data={data}
              onTableChange={onTableChange}
        />
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
