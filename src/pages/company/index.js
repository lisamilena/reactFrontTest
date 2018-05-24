import React from 'react';
import Form from './form';
import Header from '../../components/header';
import FormWithMessage from '../../components/formWithMessage';

class AppRoot extends React.Component {

    render() {
        return (
            <div>
                <Header title="company" hasBack/>
                <FormWithMessage form={Form}/>
            </div>
        );
    }
}

export default AppRoot;
