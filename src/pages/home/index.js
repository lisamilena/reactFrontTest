import React, { Component } from 'react';
import logo from '../../logo.svg';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';

class Home extends Component {
  
  render() {
    return (
      <div className="App">
        <header className="App-header row">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React web</h1>
        </header>
        <p className="App-title">
          Módulo de fidelización
        </p>
        <p>
          <a href="/form">Ir al formulario</a>
        </p>
      </div>
    );
  }
}

export default Home;
