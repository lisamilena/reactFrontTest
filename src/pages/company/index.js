import React from 'react';
import Form from './form';
import Header from '../../components/header';
import FormWithMessage from '../../components/formWithMessage';

const urlForm = '/api/upsertCompany',
messagge = {
    title: 'thank you!',
    subtitle: 'Shortly we will be in contact'
};

class Company extends React.Component {

    render() {
        return (
            <div>
                <Header title="company" hasBack/>
                <FormWithMessage form={Form} url={urlForm} messageSuccess={messagge}/>
            </div>
        );
    }
}

export default Company;
