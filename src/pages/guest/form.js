import React, { Component } from 'react';

class Form extends Component {
  
  render() {
    return (
        <div className="form-group">
            <label htmlFor="name">Name *</label>
            <input type="text" id="name" name="name" className="form-control" placeholder="Enter your name" required/>

            <label htmlFor="lastName">Last name *</label>
            <input type="text" id="lastName" name="lastName" className="form-control" placeholder="Enter your last name" required/>
          
            <label htmlFor="email">Email *</label>
            <input type="text" id="contactEmail" name="contactEmail" className="form-control" placeholder="Enter your email" required/>
          
            <label htmlFor="phone">Phone</label>
            <input type="phone" id="phone" name="phone" className="form-control" placeholder="Enter your phone"/>
        </div>  
    );
  }
}

export default Form;