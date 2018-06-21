import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Calculator from './components/Calculator';
import ButtonFrame from './components/ButtonFrame';

class App extends Component {
  constructor() {
    super();
   this.state ={
     operator1 : 0,
     operator2 : 0,
   }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
        </p>
        <Calculator/>
        <ButtonFrame/>
        
      </div>
    );
  }
}

export default App;
