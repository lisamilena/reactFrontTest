import React, { Component } from 'react';
import style from './style.css';

class FormWithMessage extends Component {

    handleSubmit(event) {
        let itemToSend = {};
        event.target.childNodes.forEach(item =>{
            item.childNodes.forEach(element => {
            if(element.value) itemToSend[element.id] = element.value;
            });
        });

        console.log(itemToSend)
        event.preventDefault();
    }

    render() {
        return (
            <div className="form-with-messsage">
                {!this.formSended ? <form onSubmit={this.handleSubmit}>
                    <this.props.form/>
                    
                    <button type="submit" className="btn btn-block">Send</button>
                </form> : null}
                {this.formSended ? <div>
                    Message
                </div> : null}
            </div>
        );
    };
}
export default FormWithMessage;