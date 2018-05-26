import React, { Component } from 'react';
import Header from '../../components/header';

class Signin extends Component {
  render() {
    return (
      <div>
        <Header title="Sign in" hasBack />
        <form className="content form-group">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            className="form-control"
            required
          />

          <label htmlFor="pass">Password</label>
          <input
            type="password"
            id="pass"
            name="pass"
            className="form-control"
            required
          />

          <div className="text-center float-content">
            <button type="submit" className="btn">
              Send
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Signin;
