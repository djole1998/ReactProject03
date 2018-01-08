import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Project03 from './Project03';

class App extends Component {
    constructor(){
        super();
        this.state = {
            ime: 'Djordje',
            prezime: 'Zivkovic',
            godina_rodjenja: 1998,
            zanimanje: 'FrontDev'
        };
    }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
          <Project03
              ime={this.state.ime}
              prezime={this.state.prezime}
              godina_rodjenja={this.state.godina_rodjenja}
              zanimanje={this.state.zanimanje}
          />
      </div>
    );
  }
}

export default App;