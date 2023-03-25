import React, { Component, RefObject } from 'react';
import InputCheckbox from '../components/inputCheckbox';
import './addCard.css';
import { IAddCard } from 'interfaces/interfaces';
import { IValidationForm } from 'interfaces/interfaces';
import NewCards from '../components/newCards';

export const validateForm: IValidationForm = {
  name: '',
  date: '',
  genre: 'Survival horror',
  platforms: [],
  gender: 'Male',
  file: '',
};

class AddCard extends React.Component<IAddCard> {
  nameOfGameRef: RefObject<HTMLInputElement>;
  nameOfGameErr: RefObject<HTMLParagraphElement>;
  releaseDateRef: RefObject<HTMLInputElement>;
  releaseDateErr: RefObject<HTMLParagraphElement>;
  genreRef: RefObject<HTMLSelectElement>;
  platformsErrRef: RefObject<HTMLParagraphElement>;
  photoInputRef: RefObject<HTMLInputElement>;
  constructor(props: IAddCard) {
    super(props);
    this.nameOfGameRef = React.createRef();
    this.nameOfGameErr = React.createRef();
    this.releaseDateRef = React.createRef();
    this.releaseDateErr = React.createRef();
    this.genreRef = React.createRef();
    this.platformsErrRef = React.createRef();
    this.photoInputRef = React.createRef();
  }

  state = {
    nameInputBorder: {
      border: '1px solid rgb(167, 167, 167)',
    },
    nameErrorVisibility: {
      opacity: '0',
    },
    dateInputBorder: {
      border: '1px solid rgb(167, 167, 167)',
    },
    dateErrorVisibility: {
      opacity: '0',
    },
    platformErrorVisibility: {
      opacity: '0',
    },
    inputFileBorder: {
      border: '1px solid rgb(167, 167, 167)',
    },
    inputFileName: 'No file upload',
  };

  checkForm = () => {
    event?.preventDefault();
    if (
      this.nameOfGameRef.current?.value &&
      this.nameOfGameRef.current?.value[0] ==
        this.nameOfGameRef.current?.value[0].toUpperCase() &&
      this.nameOfGameRef.current?.value.length >= 5
    ) {
      this.setState({
        nameInputBorder: {
          border: '1px solid rgb(167, 167, 167)',
        },
        nameErrorVisibility: {
          opacity: '0',
          visibility: 'hidden',
        },
      });
      validateForm.name = this.nameOfGameRef.current?.value;
    } else {
      this.setState({
        nameInputBorder: {
          border: '1px solid red',
        },
        nameErrorVisibility: {
          opacity: '1',
          visibility: 'visible',
        },
      });
      validateForm.name = '';
    }
    if (!this.releaseDateRef.current?.value) {
      this.setState({
        dateInputBorder: {
          border: '1px solid red',
        },
        dateErrorVisibility: {
          opacity: '1',
          visibility: 'visible',
        },
      });
      validateForm.date = '';
    } else if (this.nameOfGameRef.current?.value) {
      this.setState({
        dateInputBorder: {
          border: '1px solid rgb(167, 167, 167)',
        },
        dateErrorVisibility: {
          opacity: '0',
          visibility: 'hidden',
        },
      });
      validateForm.date = this.nameOfGameRef.current?.value;
    }
    if (validateForm.platforms.length == 0) {
      this.setState({
        platformErrorVisibility: {
          opacity: '1',
          visibility: 'visible',
        },
      });
    } else {
      this.setState({
        platformErrorVisibility: {
          opacity: '0',
          visibility: 'hidden',
        },
      });
    }
    if (this.photoInputRef.current?.files?.length == 0) {
      this.setState({
        inputFileBorder: {
          border: '1px solid red',
        },
      });
    } else {
      this.setState({
        inputFileBorder: {
          border: '1px solid rgb(167, 167, 167)',
        },
      });
    }
    if (
      validateForm.name != '' &&
      validateForm.date != '' &&
      validateForm.platforms.length != 0 &&
      validateForm.file != ''
    ) {
      console.log(validateForm);
    } else {
      console.log('error!');
    }
  };
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
              <p className="form__subtitle">Name</p>
              <input
                className="form__name form__input"
                type="text"
                placeholder="Name of game"
                ref={this.nameOfGameRef}
                style={this.state.nameInputBorder}
              ></input>
              <label
                htmlFor="add-file"
                className="form__submit-photo-label"
                style={this.state.inputFileBorder}
              >
                <input
                  className="form__submit-photo"
                  type="file"
                  id="add-file"
                  ref={this.photoInputRef}
                  style={this.state.inputFileBorder}
                  onChange={() => {
                    if (this.photoInputRef.current?.files?.length == 0) {
                      this.setState({
                        inputFileName: 'No file upload',
                      });
                      validateForm.file = '';
                    } else if (this.photoInputRef.current?.files?.length == 1) {
                      this.setState({
                        inputFileName: `${this.photoInputRef.current?.files[0].name}`,
                        inputFileBorder: {
                          border: '1px solid rgb(167, 167, 167)',
                        },
                      });
                      validateForm.file = `${this.photoInputRef.current?.value}`;
                    }
                  }}
                ></input>
                <span className="form__submit-photo-text choose-file">
                  Choose file
                </span>
                <span className="form__submit-photo-text">
                  {this.state.inputFileName}
                </span>
              </label>
              <p className="form__error" style={this.state.nameErrorVisibility}>
                Name should not be empty, start with a capital letter and
                include 5 symbols or more
              </p>
              <p className="form__subtitle">Release date</p>
              <input
                className="form__date form__input"
                type="date"
                ref={this.releaseDateRef}
                style={this.state.dateInputBorder}
              ></input>
              <p
                className="form__error"
                ref={this.releaseDateErr}
                style={this.state.dateErrorVisibility}
              >
                Enter release date
              </p>
              <p className="form__subtitle">Genre</p>
              <div className="select">
                <select
                  className="form__select form__input"
                  ref={this.genreRef}
                  onChange={() => {
                    if (this.genreRef.current?.value) {
                      validateForm.genre = this.genreRef.current?.value;
                    }
                  }}
                >
                  <option>Survival horrow</option>
                  <option>Action/RPG</option>
                  <option>First person shooter</option>
                  <option>Hack and slash</option>
                </select>
              </div>
              <p className="form__error">Choose game genre</p>
              <p className="form__subtitle">Platforms</p>
              <InputCheckbox />
              <p
                className="form__error"
                ref={this.platformsErrRef}
                style={this.state.platformErrorVisibility}
              >
                Choose at least one platform
              </p>
              <p className="form__subtitle">I am</p>
              <div className="form__radio-container">
                <input
                  type="radio"
                  name="radio"
                  id="radio-male"
                  defaultChecked
                  onClick={() => {
                    validateForm.gender = 'Male';
                  }}
                ></input>
                <label htmlFor="radio-male" className="form__radio-label">
                  Male
                </label>
                <input
                  type="radio"
                  name="radio"
                  id="radio-female"
                  onClick={() => {
                    validateForm.gender = 'Female';
                  }}
                ></input>
                <label htmlFor="radio-female">Female</label>
              </div>
              <button
                type="submit"
                className="form__button"
                onClick={this.checkForm}
              >
                submit
              </button>
            </form>
          </div>
        </section>
        <section className="add-card__section new-cards__section">
          <div className="add-card__section-wrapper">
            <NewCards />
          </div>
        </section>
      </div>
    );
  }
}

export default AddCard;
