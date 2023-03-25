import React, { Component } from 'react';
import InputCheckbox from './inputCheckbox';
import './addCard.css';

class AddCard extends Component {
  clickHandler = () => {
    event?.preventDefault();
  };
  render() {
    return (
      <div className="add-card__container">
        <section className="add-card__section form__section">
          <div className="add-card__section-wrapper">
            <div></div>
            <form className="form">
              <input
                className="form__name form__input"
                type="text"
                placeholder="Name of game"
              ></input>
              <label htmlFor="add-file" className="form__submit-photo-label">
                <input
                  className="form__submit-photo"
                  type="file"
                  id="add-file"
                ></input>
                <span className="form__submit-photo-text choose-file">
                  Choose file
                </span>
                <span className="form__submit-photo-text">No file upload</span>
              </label>
              <input className="form__date form__input" type="date"></input>
              <div className="select">
                <select className="form__select form__input">
                  <option>Survival horrow</option>
                  <option>Action/RPG</option>
                  <option>First person shooter</option>
                  <option>Hack and slash</option>
                </select>
              </div>
              <InputCheckbox />
              <button
                type="submit"
                className="form__button"
                onClick={this.clickHandler}
              >
                submit
              </button>
            </form>
          </div>
        </section>
        <section className="add-card__section new-cards__section">
          <div className="add-card__section-wrapper">
            <div className="new-cards"></div>
          </div>
        </section>
      </div>
    );
  }
}

export default AddCard;
