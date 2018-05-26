import React from 'react';
import Form from './form';
import Header from '../../components/header';
import FormWithMessage from '../../components/formWithMessage';

const urlForm = '/api/upsertCompany';

class Company extends React.Component {

    render() {
        return (
            <div>
                <Header title="company" hasBack/>
                <FormWithMessage form={Form} url={urlForm}/>
            </div>
        );
    }
}

export default Company;
