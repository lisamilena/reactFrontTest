import React, { Component } from 'react';
import Form from './form';
import Header from '../../components/header';
import FormWithMessage from '../../components/formWithMessage';

// styles
import styles from './style.css';

class IndexPage extends Component {
    constructor() {
        super();

        this.state = {
            usersTypes: {
                title: 'Tipos de perfiles',
                users: [{
                    title: 'Particulares',
                    icon: "icons.groom",
                    link: '/about',
                    id: 1
                }, {
                    title: 'Agencias',
                    icon: "icons.home",
                    link: '/form',
                    id: 2
                }, {
                    title: 'Empresas',
                    icon: "icons.office",
                    link: '/noMatch',
                    id: 3
                }]
            }
        };
        
        this.formActive = 1;
    };

    activeUser = id => {
        this.formActive = id;
        this.forceUpdate();
    // TODO
    };

    render() {
        return ( 
            <div>
                <Header title="hotel guest" hasBack/>
                <FormWithMessage form={Form}/>
            </div>
        );
    }
}

export default IndexPage;
