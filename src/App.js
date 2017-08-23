import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Regex from './components/Regex.jsx'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <img src="https://avatars3.githubusercontent.com/u/31234025?v=4&s=400"
            className="App-logo" alt="logo" />
          {/* <h2>Regex Expression Generator</h2> */}
          <h2>正規表現つくりまっせ！</h2>
        </div>
        <Regex />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
