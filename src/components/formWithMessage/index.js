import React, { Component } from 'react';
import style from './style.css';
const image = 'src/components/formWithMessage/success.png';

class FormWithMessage extends Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();

        let itemToSend = {};
        event.target.childNodes.forEach(item =>{
            item.childNodes.forEach(element => {
            if(element.value) itemToSend[element.id] = element.value;
            });
        });

        fetch('/api/form-submit-url', {
            method: 'POST',
            body: itemToSend,
          })
          .then(response => {
            this.data = {name: itemToSend.name};
            this.setState({active: true});
          });
    }

    render() {
        return (
            <div className="form-with-messsage">
                {!this.data ? <form onSubmit={this.handleSubmit}>
                    <this.props.form/>

                    <p className="legend">* required fields</p>
                    <button type="submit" className="btn btn-block">Send</button>
                </form> : null}
                {this.data ? <div>
                    <h3>{this.props.messageSuccess.title}</h3>
                    <h3>{this.data.name}</h3>
                    <div className="material-icons success">check</div>
                    <p>{this.props.messageSuccess.subtitle}</p>
                    <button type="submit" className="btn btn-block">Continue</button>
                </div> : null}
            </div>
        );
    };
}
export default FormWithMessage;