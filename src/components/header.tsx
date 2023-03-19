import React, { Key, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';

function Header() {
  let [page, setPage] = useState('Main Page');
  page = localStorage.getItem("curr-page") || 'Main Page'
  return (
    <header className="header">
      <div className="header__container">
        <nav className="header__navigation">
          <ul className="navigation__list">
            <li className="navigation__item">
              <NavLink
                onClick={() => {
                  setPage((page = 'Main Page'));
                  localStorage.setItem("curr-page", "Main Page")
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
                  setPage((page = 'About Us'));
                  localStorage.setItem("curr-page", "About Us")
                }}
                className="navigation__link about"
                id="about"
                to={'/about'}
              >
                About Us
              </NavLink>
            </li>
          </ul>
        </nav>
        <p className="header__curr-page">{page}</p>
      </div>
    </header>
  );
}

export default Header;
