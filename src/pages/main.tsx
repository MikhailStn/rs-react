import React from 'react';
import './main.css';
import Cards from '../components/cards';
import SearchBar from '../components/searchBar';

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
            <Cards />
          </div>
        </section>
      </div>
    </main>
  );
}

export default MainPage;
