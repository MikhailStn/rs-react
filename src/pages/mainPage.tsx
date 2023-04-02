import React from 'react';
import './mainPage.css';
import Cards from '../components/cards';
import SearchBar from '../components/searchBar';
import { items } from '../data/games';

function MainPage() {
  function ShowSearch() {
    const [searchBar, setSearchBar] = React.useState(false);
    React.useEffect(() => {
      setSearchBar(true);
    }, []);
    return (
      <div className="main-page__section-wrapper">
        {searchBar && <SearchBar />}
      </div>
    );
  }

  function ShowCards() {
    const [cards, setCards] = React.useState(false);
    React.useEffect(() => {
      setCards(true);
    }, []);
    return (
      <div className="main-page__section-wrapper">
        {cards && <Cards cards={items} />}
      </div>
    );
  }

  return (
    <main className="main-page">
      <div className="main-page__container">
        <section className="main-page__section search-bar__section">
          {ShowSearch()}
        </section>
        <section className="main-page__section cards__section">
          {ShowCards()}
        </section>
      </div>
    </main>
  );
}

export default MainPage;
