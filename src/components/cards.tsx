import React, { Component, CSSProperties } from 'react';
import { items, IGames } from '../data/games';
import './cards.css';

class Cards extends Component {
  render() {
    let i = 0;
    return (
      <div className="cards__container">
        {items.map((el: IGames) => {
          const backroundImage: CSSProperties = {
            backgroundImage: `url('../../posters/${i}.jpg')`,
          };
          i++;
          return (
            <div key={el.id} className="card">
              <div className="card__poster" style={backroundImage}>
                <div className="card__rate" title="Based on Steam rating">
                  {el.rate}
                </div>
                <div className="card__name">{el.name}</div>
              </div>
              <div className="card__subtitles">
                <p className="card__subtitle card__genre">{el.genre}</p>
                <p className="card__subtitle card__release">Release: {el.dateOfRelease}</p>
                <p className="card__subtitle card__platforms">{el.platforms}</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Cards;
