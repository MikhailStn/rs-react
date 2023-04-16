import React, { CSSProperties } from 'react';
import { IPhoto } from 'interfaces/interfaces';
import './mainPage.css';
import '../components/cards.css';
import { useDispatch, useSelector } from 'react-redux';

export let reqItems: IPhoto[] = [];

function MainPage() {
  const apiKey = '281c4097e2196ad0dc6db1c72812ab66';
  function sendReq(req: string) {
    setsplashScreen({ display: 'flex' });
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
        setsplashScreen({ display: 'none' });
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

  const [cards, setCards] = React.useState(1);

  const [popupVisibility, setPopupVisibility] = React.useState({
    display: 'none',
  });

  const [splashScreen, setsplashScreen] = React.useState({
    display: 'none',
  });

  const [popupImage, setPopupImage] = React.useState({
    backgroundImage: `url('')`,
  });

  const [title, setTitle] = React.useState('');
  const [owner, setOwner] = React.useState('');
  const [size, setSize] = React.useState('');

  function showPopup(req: string, id: string) {
    if (req == '') {
      req = 'all';
    }
    setsplashScreen({ display: 'flex' });
    fetch(
      `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${req}&extras=url_l&format=json&nojsoncallback=1`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let res;
        for (let i = 0; i < data.photos.photo.length; i++) {
          if (data.photos.photo[i].id == id) {
            res = data.photos.photo[i];
          }
        }
        return res;
      })
      .then((res) => {
        setPopupVisibility({ display: 'flex' });
        setsplashScreen({ display: 'none' });
        setPopupImage({ backgroundImage: `url('${res.url_l}')` });
        setTitle(`${res.title}`);
        setOwner(`${res.owner}`);
        setSize(`${res.width_l}px x ${res.height_l}px`);
      });
  }

  const searchDispatch = useDispatch()
  const searchInp = useSelector(state => {state.searchInp})

  return (
    <main className="main-page">
      <div className="splash-screen" style={splashScreen}>
        <div className="splash-screen__loader"></div>
      </div>
      <div className="popup" style={popupVisibility}>
        <div className="popup__card-container">
          <div className="popup__card">
            <div className="popup__card-poster" style={popupImage}></div>
            <div className="popup__card-subtitles">
              <p className="popup__card-sub">Title: {title}</p>
              <p className="popup__card-sub">Owner: {owner}</p>
              <p className="popup__card-sub">Size: {size}</p>
            </div>
          </div>
        </div>
        <div
          className="popup__overlay"
          onClick={() => {
            setPopupVisibility({ display: 'none' });
          }}
        ></div>
      </div>
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
          <div className="main-page__section-wrapper">
            <div className="cards__container">
              {reqItems.map((el: IPhoto) => {
                const backroundImage: CSSProperties = {
                  backgroundImage: `url('${el.url_l}')`,
                };
                return (
                  <div
                    key={el.id}
                    className="card"
                    onClick={() => {
                      showPopup(inputVal, el.id);
                    }}
                  >
                    <div className="popup">
                      <div className="popup__overlay"></div>
                    </div>
                    <div className="card__poster" style={backroundImage}></div>
                    <div className="card__subtitles">
                      <p className="card__subtitle card__genre">{el.title}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default MainPage;
