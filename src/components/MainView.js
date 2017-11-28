import React, { Component } from "react";
import DayData from './DayData'
class MainView extends Component {
  render() {
    return (
      <div className="main-view-component">
        {this.props.data.map(function(dayData, i) {
          return <DayData dayData={dayData} key={i} />;
        })}
      </div>
    );
  }
}

export default MainView;
