import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header className="app-header">
        {this.props.hasBack ? (
          <div className="back-component">
            <a href="/" className="material-icons">
              arrow_back
            </a>
          </div>
        ) : null}
        <h1 className="app-title">{this.props.title}</h1>
        <div className="close-component">
          <span className="material-icons">clear</span>
        </div>
      </header>
    );
  }
}
export default Header;
