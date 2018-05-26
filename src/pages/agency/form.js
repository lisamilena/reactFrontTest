import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <div className="form-group">
        <label htmlFor="name">Agency name *</label>
        <input
          type="text"
          id="name"
          name="name"
          className="form-control"
          placeholder="Enter your agency name"
          required
        />

        <label htmlFor="contactName">Contact name *</label>
        <input
          type="text"
          id="contactName"
          name="contactName"
          className="form-control"
          placeholder="Enter your contact name"
          required
        />

        <label htmlFor="contactEmail">Contact email *</label>
        <input
          type="email"
          id="contactEmail"
          name="contactEmail"
          className="form-control"
          placeholder="Enter your contact email"
          required
        />

        <label htmlFor="agencyCode">Agency id code</label>
        <input
          type="text"
          id="agencyCode"
          name="agencyCode"
          className="form-control"
          placeholder="Enter gency id code"
        />
      </div>
    );
  }
}

export default Form;
