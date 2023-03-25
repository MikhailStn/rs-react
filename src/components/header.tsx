import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';

let currPage = '';

class Header extends Component {
  clickHandler = (path: string) => {
    if (path == '/') {
      currPage = 'Main Page';
    } else if (path == '/about') {
      currPage = 'About Us';
    } else if (path == '/add-card') {
      currPage = 'Add Card';
    } else {
      currPage = '404';
    }
    this.setState({ page: currPage });
    return currPage;
  };
  state = {
    page: this.clickHandler(window.location.pathname),
  };

  render() {
    return (
      <header className="header">
        <div className="header__container">
          <nav className="header__navigation">
            <ul className="navigation__list">
              <li className="navigation__item">
                <NavLink
                  onClick={() => {
                    this.clickHandler('/');
                  }}
                  className="navigation__link main"
                  id="main"
                  to={'/'}
                >
                  Main
                </NavLink>
              </li>
              <li className="navigation__item">
                <NavLink
                  onClick={() => {
                    this.clickHandler('/about');
                  }}
                  className="navigation__link about"
                  id="about"
                  to={'/about'}
                >
                  About Us
                </NavLink>
              </li>
              <li className="navigation__item">
                <NavLink
                  onClick={() => {
                    this.clickHandler('/add-card');
                  }}
                  className="navigation__link add-card"
                  id="add-card"
                  to={'/add-card'}
                >
                  Add Card
                </NavLink>
              </li>
            </ul>
          </nav>
          <p className="header__curr-page">{this.state.page}</p>
        </div>
      </header>
    );
  }
}

export default Header;
