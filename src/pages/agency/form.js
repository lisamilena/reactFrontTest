import React, { Component } from 'react';

class Form extends Component {
  
  render() {
    return (
        <div className="form-group">
            <label htmlFor="agencyName">Agency name *</label>
            <input type="text" id="agencyName" className="form-control" placeholder="Enter your agency name" required/>

            <label htmlFor="contactName">Contact name *</label>
            <input type="text" id="contactName" className="form-control" placeholder="Enter your contact name" required/>
          
            <label htmlFor="contactEmail">Contact email *</label>
            <input type="email" id="contactEmail" className="form-control" placeholder="Enter your contact email" required/>
          
            <label htmlFor="agencyCode">Agency id code</label>
            <input type="text" id="agencyCode" className="form-control" placeholder="Enter gency id code"/>
        </div>  
    );
  }
}

export default Form;