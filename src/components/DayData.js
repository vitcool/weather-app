import React, { Component } from "react";

class DayData extends Component {
  getImageSrc(weatherPhenomenon) {
    var srcResult;
    switch (weatherPhenomenon) {
      case "Cloudy": {
        srcResult = "images/cloud.png";
        break;
      }
      case "Sunny": {
        srcResult = "images/sun.png";
        break;
      }
      case "Self-Cloudy": {
        srcResult = "images/cloudSun.png";
        break;
      }
    }
    return srcResult;
  }
  render() {
    return (
      <div className="day-data-component">
        <div className="data">{this.props.dayData.data}</div>
        <div className="temperatures">
          <div className="minimal-temperature">
            {this.props.dayData.minTemperature}
          </div>
          <div className="maximal-temperature">
            {this.props.dayData.maxTemperature}
          </div>
        </div>
        <div class="natural-phenomenon">
          <img
            alt="weather"
            src={this.getImageSrc(this.props.dayData.weatherPhenomenon)}
          />
        </div>
        <br />
      </div>
    );
  }
}

export default DayData;
