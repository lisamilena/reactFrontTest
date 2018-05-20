import React, { Component } from 'react';

// styles
import styles from './style.css';
import icons from 'glyphicons'

class IndexPage extends Component {
    constructor() {
        super();

        this.state = {
            usersTypes: {
                title: 'Tipos de perfiles',
                users: [{
                    title: 'Particulares',
                    icon: icons.groom,
                    link: '/about',
                    id: 1
                }, {
                    title: 'Agencias',
                    icon: icons.home,
                    link: '/form',
                    id: 2
                }, {
                    title: 'Empresas',
                    icon: icons.office,
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
                <h3 className="title">{this.state.usersTypes.title}</h3>
                <ul className="userTypes">
                    {
                        this.state.usersTypes.users.map((user, index) => (
                            <li key={index} onClick={()=>this.activeUser(user.id)}>
                                {user.icon}
                                <p>{user.title}</p>
                            </li>
                        ))
                    }
                </ul>
                <div>
                    {this.formActive}
                </div>
            </div>
        );
    }
}

export default IndexPage;
