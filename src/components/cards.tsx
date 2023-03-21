import React, { Component, CSSProperties } from 'react';
import { items } from '../data/games';
import { IGames } from 'interfaces/interfaces';
import './cards.css';

class Cards extends Component {
  render() {
    return (
      <div className="cards__container">
        {items.map((el: IGames) => {
          const backroundImage: CSSProperties = {
            backgroundImage: `url('../../posters/${el.id}.jpg')`,
          };
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
                <div className="card__subtitle-wrapper">
                  <p className="card__subtitle card__release">Release:</p>
                  <p className="card__subtitle card__release">
                    {el.dateOfRelease}
                  </p>
                </div>
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
