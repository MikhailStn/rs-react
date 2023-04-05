import React, { CSSProperties } from 'react';
import { addedItems } from './form';
import { IValidationForm } from 'interfaces/interfaces';

function NewCards() {
  return (
    <div className="add-card__section-wrapper">
      <div className="cards__container">
        {addedItems.map((el: IValidationForm) => {
          const backroundImage: CSSProperties = {
            backgroundImage: `url('${el.file}')`,
          };
          return (
            <div className="card" key={el.id}>
              <div className="card__poster" style={backroundImage}>
                <div className="card__rate" title="Based on Steam rating">
                  -
                </div>
                <div className="card__name">{el.name}</div>
              </div>
              <div className="card__subtitles">
                <p className="card__subtitle card__genre">{el.genre}</p>
                <div className="card__subtitle-wrapper">
                  <p className="card__subtitle card__release">Release:</p>
                  <p className="card__subtitle card__release">{el.date}</p>
                </div>
                <p className="card__subtitle card__platforms">
                  {el.platforms.join(', ')}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default NewCards;
