import React, { Component } from 'react';
import './style.css';

class NoMatch extends Component {
  
  render() {
    return (
      <div className="content not-found text-center">
        <h2>404</h2>
        <div className="material-icons">warning</div>
        <p>Page not found</p>
        <div className="float-content-top">
          <a className="material-icons" href="/">home</a>
        </div>
      </div>
    );
  }
}

export default NoMatch;