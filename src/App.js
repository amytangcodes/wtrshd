import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Map from './components/Map';
import Search from './components/Search';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Watershed App</h2>
        </div>
        <p className="App-intro">
          <div className="row">
            <div className="col-md-9">
              <Map />
            </div>
            <div className="col-md-3">
              <Search />
            </div>
          </div>
        </p>
      </div>
    );
  }
}

export default App;
