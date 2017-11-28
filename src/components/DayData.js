import React, { Component } from "react";

class DayData extends Component {
  render() {
    return (
      <div className="main-view-component">
        <br />
        Data - {this.props.dayData.data}
        <br />
        minTemp - {this.props.dayData.minTemperature}
        <br />
        maxTemp - {this.props.dayData.maxTemperature}
        <br />
        weatherPhenomenon - {this.props.dayData.weatherPhenomenon}
        <br />
      </div>
    );
  }
}

export default DayData;
