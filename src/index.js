import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Home from './pages/home';
import Form from './pages/form';
import AboutPage from './pages/about';
import NoMatch from './pages/noMatch';

import registerServiceWorker from './registerServiceWorker';

class Index {
    renderPage(element) {
        if (!element) throw new Error('App.renderToDOM: element is required!');
        
        const locations = {
            '/': <Home />,
            '/form': <Form />,
            '/about': <AboutPage />,
            '/notFound': <NoMatch />
        };

        try {
            ReactDOM.render(locations[window.location.pathname], element);
            registerServiceWorker();
        } catch(e) {
           // window.location.pathname = '/notFound';
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