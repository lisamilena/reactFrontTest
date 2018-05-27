import React, { Component } from 'react';
import dataResponse from './data.json';
import FormFromRequest from '../formFromRequest';
import './style.css';

class FormWithMessage extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    let itemToSend = {};
    event.target.childNodes.forEach(item => {
      item.childNodes.forEach(element => {
        if (element.value) itemToSend[element.id] = element.value;
      });
    });

    fetch(this.props.customerType.upsertLink, {
      method: 'POST',
      body: itemToSend,
    }).then(() => {
      const response = dataResponse[this.props.customerType.upsertLink];
      this.data = {
        name: itemToSend.name,
        title: response.title,
        message: response.message,
      };
      this.setState({ active: true });
    });
  }

  render() {
    return (
      <div className="form-with-message content">
        {!this.data ? (
          <form onSubmit={this.handleSubmit}>
            <FormFromRequest type={this.props.customerType.id} />
            <p className="legend">* required fields</p>
            <div className="text-center float-content">
              <button type="submit" className="btn">
                Send
              </button>
            </div>
          </form>
        ) : (
          <div>
            <h3>{this.data.title}</h3>
            <h3>{this.data.name}</h3>
            <div className="material-icons success">check</div>
            <h4>{this.data.message.title}</h4>
            {this.data.message.content ? (
              <ul>
                {this.data.message.content.map((item, index) => (
                  <li key={index}>
                    <div className="material-icons">check_circle</div> {item}
                  </li>
                ))}
              </ul>
            ) : null}
            <div className="text-center float-content">
              <a className="btn" href="/signin">
                Continue
              </a>
            </div>
          </div>
        )}
      </div>
    );
  }
}
export default FormWithMessage;
