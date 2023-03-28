import React from 'react';
import './mainPage.css';
import Cards from '../components/cards';
import SearchBar from '../components/searchBar';
import { items } from '../data/games';

function MainPage() {
  return (
    <main className="main-page">
      <div className="main-page__container">
        <section className="main-page__section search-bar__section">
          <div className="main-page__section-wrapper">
            <SearchBar />
          </div>
        </section>
        <section className="main-page__section cards__section">
          <div className="main-page__section-wrapper">
            <Cards cards={items} />
          </div>
        </section>
      </div>
    </main>
  );
}

export default MainPage;
