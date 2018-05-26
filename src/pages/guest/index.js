import React, { Component } from 'react';
import Form from './form';
import Header from '../../components/header';
import FormWithMessage from '../../components/formWithMessage';

const urlForm = '/api/upsertGuest';

class Guest extends Component {
  render() {
    return (
      <div>
        <Header title="hotel guest" hasBack />
        <FormWithMessage form={Form} url={urlForm} />
      </div>
    );
  }
}

export default Guest;
