import React, { Component } from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_kelly from "@amcharts/amcharts4/themes/kelly";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

import SensorDetailComponent from '../components/sensorDetailComponent';
import { BIODB_TOKEN } from '../constants';
import '../App.css'


am4core.useTheme(am4themes_kelly);
am4core.useTheme(am4themes_animated);
export default class SensorDetailContainer extends Component{

    /*   *
         *  Initializer
         *------------------------------------------------------------
    */
    constructor(props){
      super(props);
      const name  = this.props.match.params.name;
      this.state={
        name:name,
        token: localStorage.getItem(BIODB_TOKEN),
        message:"",
        searchTerm:"",

        // Pagination
        page: 1,
        sizePerPage: 25,
        totalSize: 0,
        isLoading:true,

        //List
        data:null,
        }
      this.onChartPlotter = this.onChartPlotter.bind(this);
      this.onBackClick = this.onBackClick.bind(this);
      this.onSearchChange = this.onSearchChange.bind(this);
      this.onTableChange = this.onTableChange.bind(this);
      this.onSensorDetailLoad = this.onSensorDetailLoad.bind(this);
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
    componentDidMount(){
      const name = this.props.match.params.name;
      let { chartData,totalSize,page } = this.state;
      this.onSensorDetailLoad(name,page);
      this.onChartPlotter();
      window.scrollTo(0, 0);      
      }

    componentWillUnmount() {
        if (this.chart) {
          this.chart.dispose();
        }
      }

    /* *
        *  API callback functions
        *------------------------------------------------------------
    */
    async onSensorDetailLoad(name,page,sizePerPage){
        // console.log(name,page)// For debugging purpose only

        setTimeout(() => { //Set delay of 1500 for loading state
        const axios = require('axios').default;
        const token = localStorage.getItem(BIODB_TOKEN);
        let URL = "http://127.0.0.1:8000/api/tsd-by-attribute-name?attribute_name=" + name + "&page="+page + "&page_size=" + sizePerPage;
        axios.get(URL, {
          headers: {
            'Authorization': 'Token '+ token
          }
          })

          .then(response => {
            // console.log(response); // For debugging purposes only.
            let totalSize = response.data.count;
            let results = response.data.results;
            // console.log(response.data.results); //For debugging purpose only
            this.setState({
              data:results,
              totalSize:totalSize,
              page:page,
              isLoading:false,
              sizePerPage:sizePerPage,
            });
          })

          .catch(error => {
            this.setState({
                message : error.toString(),
                isLoading:false,
            });
            console.log(error);
          })
          },1500);
        }

      /* *
         *  Event handling functions
         *------------------------------------------------------------
      */
      onSearchChange = (event) => {
        event.preventDefault();
        this.setState({
          searchTerm:event.target.value,
        })
      }

      onBackClick = (event) => {
        event.preventDefault();
      this.props.history.push("/sensor-list")
      }

      async onTableChange(type,event) {
          if(type === "pagination"){
            const { page,sizePerPage } = event;
            const { name } = this.state;
            // console.log("On Table Change ",event); // For debugging purposes only.
            //   console.log("On Table Change  " + type ); // For debugging purposes only.
              console.log("Event ", event.page);

              this.setState(
                  {
                    page: page,
                    isLoading: true,
                    sizePerPage:sizePerPage,
                  },
                  ()=>{
                      this.onSensorDetailLoad(name,page,sizePerPage);
                  }
              );
    }
    }

    onChartPlotter = () => {
      let chart = am4core.create("chart-plot", am4charts.XYChart);
      chart.paddingRight = 20;

  // Chart generation
    const { data } = this.state;
    if(data !== null && data !== "undefined" ) {
      console.log(data)
      let dataArr = [],i;
      if (data.length > 0){
        for (i=0;i<data.length;i++){
          dataArr.push({ date: data[i].creation_date, value: data[i].value });  
        }
      }
    // console.log(dataArr) //For debugging purpose only

    // Create chart instance
    let chart = am4core.create("chart-plot", am4charts.XYChart);

    // Add data
    chart.data = dataArr;

    // Create axes
    let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.minGridDistance = 50;
    // valueAxis.title.text = "Counts";

    // Create series
    let series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.valueY = "value";
    series.dataFields.dateX = "date";
    series.strokeWidth = 2;
    series.minBulletDistance = 10;
    series.tooltipText = "{valueY}";
    series.tooltip.pointerOrientation = "vertical";
    series.tooltip.background.cornerRadius = 20;
    series.tooltip.background.fillOpacity = 0.5;
    series.tooltip.label.padding(12,12,12,12)

    // Add scrollbar
    chart.scrollbarX = new am4charts.XYChartScrollbar();
    chart.scrollbarX.series.push(series);

    // Add cursor
    chart.cursor = new am4charts.XYCursor();
    chart.cursor.xAxis = dateAxis;
    chart.cursor.snapToSeries = series;
    }

  }

  /* *
      *  Main render function
      *------------------------------------------------------------
  */
    render(){
            
        const { name,
                token,
                data,
                message,
                searchTerm,
                page,
                sizePerPage,
                totalSize,
                isLoading,chartData
              } = this.state;

        const { onBackClick,
                onSearchChange,
                 onTableChange,
              } = this;
              
                this.onChartPlotter();
              
        return(
          <div style={{backgroundColor:"#ffff"}}>
              <br /><br /><br /><br />
              <div id="chart-plot"></div>
              <SensorDetailComponent
                      name={name}
                      token={token}
                      message={message}
                      searchTerm={searchTerm}
                      onBackClick={onBackClick}
                      onSearchChange={onSearchChange}
                      page={page}
                      sizePerPage={sizePerPage}
                      totalSize={totalSize}
                      data={data}
                      isLoading={isLoading}
                      onTableChange={onTableChange}
              />
          </div>
        );
    }
}