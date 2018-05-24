import React, { Component } from 'react';

class Form extends Component {
  
  render() {
    return (
        <div className="form-group">
            <label htmlFor="companyName">Company name *</label>
            <input type="text" id="companyName" className="form-control" placeholder="Enter your company name" required/>
          
            <label htmlFor="contactEmail">Contact email *</label>
            <input type="email" id="contactEmail" className="form-control" placeholder="Enter your contact email" required/>

            <label htmlFor="phone">Phone *</label>
            <input type="phone" id="phone" className="form-control" placeholder="Enter your phone" required/>
          
            <label htmlFor="comments">Comments</label>
            <input type="text" id="comments" className="form-control" placeholder="Enter your comments"/>
        </div>  
    );
  }
}

export default Form;