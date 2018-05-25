import React, { Component } from 'react';
import Form from './form';
import Header from '../../components/header';
import FormWithMessage from '../../components/formWithMessage';

const urlForm = '/api/upsertAgency',
messagge = {
    title: 'thank you!',
    subtitle: 'Shortly we will be in contact'
};

class Agency extends Component {
  
  render() {
    return (
      <div className="App">
        <Header title="travel agency" hasBack/>
        <FormWithMessage form={Form} url={urlForm} messageSuccess={messagge}/>
      </div>
    );
  }
}

export default Agency;