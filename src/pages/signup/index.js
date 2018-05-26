import React, { Component } from 'react';
import Header from '../../components/header';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import data from './data.json';

class Home extends Component {
  toggleClass(selectedItem) {

    data.items.map(item => {
      if(item.id === selectedItem && item.icon === data.activeItem) document.location.href = item.link;
      item.icon = (item.id === selectedItem ? data.activeItem : data.inactiveItem);
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
            data.items.map((item, index) => (
              <li key={index} onClick={() => {this.toggleClass(item.id)}}>
                <a href={item.link} className={(item.icon === data.activeItem ? 'selected' : '')}>
                  <span className="material-icons">{item.icon}</span> {item.title}
                </a>
              </li>
            ))
          }
          </ul>
          <p className="anontation">Enjoy a 10% discount on your reservation just for signup</p>
          <div className="float-bottom">
            <a className="app-link" href="/signin">Are you registered?</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
