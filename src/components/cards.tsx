import React, { CSSProperties } from 'react';
import './cards.css';
import { IPhoto } from 'interfaces/interfaces';
import { reqItems } from '../pages/mainPage';

function Cards() {
  return (
    <div className="cards__container">
      {reqItems.map((el: IPhoto) => {
        const backroundImage: CSSProperties = {
          backgroundImage: `url('${el.url_l}')`,
        };
        return (
          <div key={el.id} className="card">
            <div className="card__poster" style={backroundImage}>
            </div>
            <div className="card__subtitles">
              <p className="card__subtitle card__genre">{el.title}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Cards;
