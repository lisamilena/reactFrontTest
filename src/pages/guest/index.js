import React, { Component } from 'react';
import Form from './form';
import Header from '../../components/header';
import FormWithMessage from '../../components/formWithMessage';

// styles
import styles from './style.css';
const urlForm = '/api/upsertGuest',
messagge = {
    title: 'thank you!',
    subtitle: 'Shortly we will be in contact'
};

class Guest extends Component {

    activeUser = id => {
        this.formActive = id;
        this.forceUpdate();
    // TODO
    };

    render() {
        return ( 
            <div>
                <Header title="hotel guest" hasBack/>
                <FormWithMessage form={Form} url={urlForm} messageSuccess={messagge}/>
            </div>
        );
    }
}

export default Guest;
