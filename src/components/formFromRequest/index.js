import React, { Component } from 'react';

class FormFromRequest extends Component {
  constructor() {
    super();

    fetch('/dataForms.json', {
      method: 'GET',
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({ content: data[this.props.type].content, title: data[this.props.type].title });
      });
  }

  hasItems () {
    return this.state && this.state.content.length;
  }

  render() {
    return (
      this.hasItems() ? this.state.content.map((item, index) => (
        <div className="form-group" key={index}>
          <label htmlFor={item.id}>{item.label}{item.required ? ' *' : null}</label>
          {item.required ? <input
            type={item.type}
            id={item.id}
            name={item.id}
            autoComplete={item.autocomplete ? item.autocomplete : 'off'}
            className="form-control"
            placeholder={item.placeholder}
            required
          /> : <input
            type={item.type}
            id={item.id}
            name={item.id}
            autoComplete={item.autocomplete ? item.autocomplete : 'off'}
            className="form-control"
            placeholder={item.placeholder}
        />}
        </div>
      )) : <p className="text-center">Loading</p>
    );
  }
}
export default FormFromRequest;
