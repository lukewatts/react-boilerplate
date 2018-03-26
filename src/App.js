import React, { Component } from 'react';
import logo from './logo.svg';

class App extends Component {
  render() {
    return (
      <div className="text-center">
        <header className="p4 h-64 bg-black text-white">
          <img src={logo} className="app-logo h-48" alt="logo" />
          <h1 className="text-xl">Welcome to React</h1>
        </header>
        <p className="text-lg pt-6">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
