import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Map from './components/Map';
import Search from './components/Search';

class App extends Component {
  render() {
    const location = {
      lat: 40.7575285,
      lng: -73.9884469
    }

    const markers = [
      {
        location: {
          lat: 40.7575285,
          lng: -73.9884469
        }
      }
    ]

    return (
      <div className="App">
        <div className="App-header">
          <h2>Watershed App</h2>
        </div>
        <div className="App-intro">
          <div className="row">
            <div className="col-md-9">
              <Map center={location} markers={markers} />
            </div>
            <div className="col-md-3">
              <Search />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
