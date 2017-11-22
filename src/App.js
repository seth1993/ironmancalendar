import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu'; 
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu>
          <a id="home" className="menu-item">Home</a>
          <a id="about" className="menu-item">About</a>
        </Menu>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
