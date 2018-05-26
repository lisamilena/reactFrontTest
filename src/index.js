import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../node_modules/material-design-icons/iconfont/material-icons.css';

import Signup from './pages/signup';
import Guest from './pages/guest';
import Agency from './pages/agency';
import Company from './pages/company';
import NoMatch from './pages/noMatch';
import Signin from './pages/signin';

import registerServiceWorker from './registerServiceWorker';

class Index {
    renderPage(element) {
        if (!element) throw new Error('App.renderToDOM: element is required!');
        
        const locations = {
            '/': <Signup />,
            '/guest': <Guest />,
            '/agency': <Agency />,
            '/company': <Company />,
            '/notFound': <NoMatch />,
            '/signin': <Signin />
        };

        try {
            ReactDOM.render(locations[window.location.pathname], element);
            registerServiceWorker();
        } catch(e) {
            window.location.pathname = '/notFound';
           console.log(e)
        }
    }
}
export default Index;

const main = () => {
    const index = new Index();
    index.renderPage(document.getElementById('root'));
};

main();