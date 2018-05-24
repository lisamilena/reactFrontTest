import React, { Component } from 'react';
import Header from '../../components/header';

import '../../../node_modules/bootstrap/dist/css/bootstrap.css';

const activeItem = 'check_circle', inactiveItem = 'panorama_fish_eye';
let items = [{
  id: 'guest',
  title: 'a hotel guest',
  link: '/guest',
  icon: inactiveItem
}, {
  id: 'agency',
  title: 'a travel agency',
  link: '/agency',
  icon: inactiveItem
}, {
  id: 'company',
  title: 'a company',
  link: '/company',
  icon: inactiveItem
}];

class Home extends Component {
  toggleClass(selectedItem) {
    items.map(item => {
      item.icon = (item.id === selectedItem ? activeItem : inactiveItem);
      return item;
    });
    this.setState({ active: !!this.state && !this.state.active });
  };

  render() {
    return (
      <div>
        <Header title="signup"/>
        <div className="content">
          <h2 className="sub-title">
            what kind of user are you?
          </h2>
          <ul id="signup-menu">
          {
            items.map((item, index) => (
              <li key={index} onClick={() => {this.toggleClass(item.id)}}>
                <a href={item.link} className={(item.icon === activeItem ? 'selected' : '')}>
                  <span className="material-icons">{item.icon}</span> {item.title}
                </a>
              </li>
            ))
          }
          </ul>
          <p className="anontation">Enjoy a 10% discount on your reservation just for signup</p>
          <div className="float-bottom">
            <a className="app-link">Are you registered?</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
