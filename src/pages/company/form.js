import React, { Component } from 'react';

class Form extends Component {
  
  render() {
    return (
        <div className="form-group">
            <label htmlFor="name">Company name *</label>
            <input type="text" id="name" name="name" className="form-control" placeholder="Enter your company name" required/>
          
            <label htmlFor="contactEmail">Contact email *</label>
            <input type="email" id="contactEmail" name="contactEmail" className="form-control" placeholder="Enter your contact email" required/>

            <label htmlFor="phone">Phone *</label>
            <input type="phone" id="phone" name="phone" className="form-control" placeholder="Enter your phone" required/>
          
            <label htmlFor="comments">Comments</label>
            <input type="text" id="comments" name="comments" className="form-control" placeholder="Enter your comments"/>
        </div>  
    );
  }
}

export default Form;