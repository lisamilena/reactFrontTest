import React, { Component } from 'react';
import Form from './form';
import Header from '../../components/header';
import FormWithMessage from '../../components/formWithMessage';

const urlForm = '/api/upsertAgency';

class Agency extends Component {
  render() {
    return (
      <div>
        <Header title="travel agency" hasBack />
        <FormWithMessage form={Form} url={urlForm} />
      </div>
    );
  }
}

export default Agency;
