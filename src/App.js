import React, { Component } from 'react';
import './App.css';

import MainView from './components/MainView';
import {data} from './mocks/data';

class App extends Component {
  render() {
    return (
      <div className="App">
      Hello, I am app component
        <MainView data={data}/>
      </div>
    );
  }
}

export default App;
