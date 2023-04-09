import React, { CSSProperties } from 'react';
import './mainPage.css';
import Cards from '../components/cards';
import { IPhoto } from 'interfaces/interfaces';
export let reqItems: IPhoto[] = [];

function MainPage() {
  const apiKey = '281c4097e2196ad0dc6db1c72812ab66';
  function sendReq(req: string) {
    if (req == '') {
      req = 'all';
    }
    fetch(
      `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${req}&extras=url_l&format=json&nojsoncallback=1`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        reqItems = [];
        for (let i = 0; i < data.photos.photo.length; i++) {
          if (data.photos.photo[i].url_l) {
            reqItems.push(data.photos.photo[i]);
          }
        }
        console.log(reqItems);
        setCards(cards);
      });
  }
  const [inputVal, setInputVal] = React.useState('');
  const inputRef = React.useRef(inputVal);
  React.useEffect(() => {
    inputRef.current = inputVal;
  }, [inputVal]);

  React.useEffect(() => {
    const val = localStorage.getItem('curr-search-val');
    if (val) {
      setInputVal(val);
    }
    return () => {
      localStorage.setItem('curr-search-val', inputRef.current);
    };
  }, []);

  let [cards, setCards] = React.useState(1);

  return (
    <main className="main-page">
      <div className="main-page__container">
        <section className="main-page__section search-bar__section">
          <div className="main-page__section-wrapper">
            <div className="search-bar__container">
              <div className="search-bar">
                <i className="search-bar__icon"></i>
                <input
                  className="search-bar__input"
                  placeholder="Request"
                  onChange={(e) => {
                    setInputVal(e.target.value);
                  }}
                  value={inputVal}
                ></input>
              </div>
              <button
                className="search-bar__button"
                onClick={() => {
                  sendReq(inputVal);
                  setCards(cards + 1);
                }}
              >
                search
              </button>
            </div>
          </div>
        </section>
        <section className="main-page__section cards__section">
          <div className="main-page__section-wrapper">{<Cards />}</div>
        </section>
      </div>
    </main>
  );
}

export default MainPage;
