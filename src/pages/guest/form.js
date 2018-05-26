import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <div className="form-group">
        <label htmlFor="name">Name *</label>
        <input
          type="text"
          id="name"
          name="name"
          autoComplete="name"
          className="form-control"
          placeholder="Enter your name"
          required
        />

        <label htmlFor="lastName">Last name *</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          autoComplete="family-name"
          className="form-control"
          placeholder="Enter your last name"
          required
        />

        <label htmlFor="email">Email *</label>
        <input
          type="email"
          id="contactEmail"
          name="contactEmail"
          autoComplete="email"
          className="form-control"
          placeholder="Enter your email"
          required
        />

        <label htmlFor="phone">Phone</label>
        <input
          type="phone"
          id="phone"
          name="phone"
          autoComplete="tel-national"
          className="form-control"
          placeholder="Enter your phone"
        />
      </div>
    );
  }
}

export default Form;
