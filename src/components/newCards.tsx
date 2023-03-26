import React, { Component, CSSProperties } from 'react';
import { IValidationForm } from 'interfaces/interfaces';
import { addedItems } from './form';
import { INewCardsProps } from 'interfaces/interfaces';

class NewCards extends React.Component<INewCardsProps> {
  render() {
    const cards = addedItems;
    return (
      <section className="add-card__section new-cards__section">
        <div className="add-card__section-wrapper">
          <div className="cards__container">
            {cards.map((el: IValidationForm) => {
              const backroundImage: CSSProperties = {
                backgroundImage: `url('../../posters/${el}.jpg')`,
              };
              return (
                <div className="card">
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
                      {el.platforms}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }
}

export default NewCards;
