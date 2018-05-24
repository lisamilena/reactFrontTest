import React, { Component } from 'react';
import Form from './form';
import Header from '../../components/header';
import FormWithMessage from '../../components/formWithMessage';

class AboutPage extends Component {
  
  render() {
    return (
      <div className="App">
        <Header title="travel agency" hasBack/>
        <FormWithMessage form={Form}/>
      </div>
    );
  }
}

export default AboutPage;