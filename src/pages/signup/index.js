import React, { Component } from 'react';
import Header from '../../components/header';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
//import data from './data.json';
const activeItem = 'check_circle',
  inactiveItem = 'panorama_fish_eye';
let items = [];

class Signup extends Component {
  constructor(props) {
    super(props);

    fetch('/data.json', {
      method: 'GET',
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        items = data.items;
        this.setState({ title: data.title, anontation: data.anontation });
      });
  }

  toggleClass(selectedItem) {
    items.map(item => {
      if (item.id === selectedItem && item.active)
        document.location.href = item.link;
      item.active = item.id === selectedItem;
      return item;
    });
    this.setState({ active: !!this.state && !this.state.active });
  }

  render() {
    return (
      <div>
        <Header title="signup" />
        <div className="content">
          {this.state ? (
            <h2 className="sub-title">{this.state.title}</h2>
          ) : null}
          <ul id="signup-menu">
            {items.length ? (
              items.map((item, index) => (
                <li
                  key={index}
                  onClick={() => {
                    this.toggleClass(item.id);
                  }}>
                  <a href={item.link} className={item.active ? 'selected' : ''}>
                    <span className="material-icons">
                      {item.active ? activeItem : inactiveItem}
                    </span>
                    {item.title}
                  </a>
                </li>
              ))
            ) : (
              <p className="text-center">Loading</p>
            )}
          </ul>
          {this.state ? (
            <p className="anontation">{this.state.anontation}</p>
          ) : null}
          <div className="float-bottom">
            <a className="app-link" href="/signin">
              Are you registered?
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
