import React, { Component, RefObject, CSSProperties } from 'react';
import '../pages/addCard.css';
import { IValidationForm } from 'interfaces/interfaces';
import { ICreateFormProps } from 'interfaces/interfaces';

export let validateForm: IValidationForm = {
  id: 0,
  name: '',
  date: '',
  genre: 'Survival horror',
  platforms: [],
  gender: 'Male',
  file: '',
};

export const addedItems: IValidationForm[] = [];

class Form extends Component {
  nameOfGameRef: RefObject<HTMLInputElement>;
  nameOfGameErr: RefObject<HTMLParagraphElement>;
  releaseDateRef: RefObject<HTMLInputElement>;
  releaseDateErr: RefObject<HTMLParagraphElement>;
  genreRef: RefObject<HTMLSelectElement>;
  platformsErrRef: RefObject<HTMLParagraphElement>;
  photoInputRef: RefObject<HTMLInputElement>;
  cardsContainerRef: RefObject<HTMLDivElement>;
  formRef: RefObject<HTMLFormElement>;
  windowsCheckboxRef: RefObject<HTMLInputElement>;
  ps5CheckboxRef: RefObject<HTMLInputElement>;
  ps4CheckboxRef: RefObject<HTMLInputElement>;
  xboxOneCheckboxRef: RefObject<HTMLInputElement>;
  nintendoCheckboxRef: RefObject<HTMLInputElement>;
  xboxSeriesCheckboxRef: RefObject<HTMLInputElement>;
  constructor(props: ICreateFormProps) {
    super(props);
    this.nameOfGameRef = React.createRef();
    this.nameOfGameErr = React.createRef();
    this.releaseDateRef = React.createRef();
    this.releaseDateErr = React.createRef();
    this.genreRef = React.createRef();
    this.platformsErrRef = React.createRef();
    this.photoInputRef = React.createRef();
    this.cardsContainerRef = React.createRef();
    this.formRef = React.createRef();
    this.windowsCheckboxRef = React.createRef();
    this.ps5CheckboxRef = React.createRef();
    this.ps4CheckboxRef = React.createRef();
    this.xboxOneCheckboxRef = React.createRef();
    this.nintendoCheckboxRef = React.createRef();
    this.xboxSeriesCheckboxRef = React.createRef();
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
    addedCard: {
      opacity: '0',
    },
    inputFileName: 'No file upload',
    addedItems: addedItems,
    inputNameVal: '',
    inputDateVal: '',
    inputFileVal: '',
    isWindowsChecked: false,
    isPs5Checked: false,
    isPs4Checked: false,
    isXboxOneChecked: false,
    isNintendoChecked: false,
    isXboxSeriesChecked: false,
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
      validateForm.date = this.releaseDateRef.current?.value;
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
      addedItems.push(validateForm);
      this.setState({
        addedItems: addedItems,
        inputNameVal: '',
        inputDateVal: '',
        inputFileVal: '',
        inputFileName: 'No file upload',
        isWindowsChecked: false,
        isPs5Checked: false,
        isPs4Checked: false,
        isXboxOneChecked: false,
        isNintendoChecked: false,
        isXboxSeriesChecked: false,
        addedCard: {
          opacity: 1,
        },
      });
      setTimeout(() => {
        this.setState({
          addedCard: {
            opacity: 0,
          },
        });
      }, 3000);
      validateForm = {
        id: addedItems.length,
        name: '',
        date: '',
        genre: `${addedItems[addedItems.length - 1].genre}`,
        platforms: [],
        gender: `${addedItems[addedItems.length - 1].gender}`,
        file: '',
      };
    } else {
      return;
    }
  };
  render() {
    return (
      <div className="add-card__container">
        <section className="add-card__section form__section">
          <div className="add-card__section-wrapper">
            <div></div>
            <form className="form" ref={this.formRef}>
              <p className="form__subtitle">Name</p>
              <input
                className="form__name form__input"
                type="text"
                placeholder="Name of game"
                ref={this.nameOfGameRef}
                style={this.state.nameInputBorder}
                value={this.state.inputNameVal}
                onChange={() => {
                  this.setState({
                    inputNameVal: this.nameOfGameRef.current?.value,
                  });
                }}
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
                  value={this.state.inputFileVal}
                  onChange={(event) => {
                    this.setState({
                      inputFileVal: this.photoInputRef.current?.value,
                    });
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
                      validateForm.file = `${event.target.files?.[0].name}`;
                      const url = URL.createObjectURL(
                        this.photoInputRef.current?.files[0]
                      );
                      validateForm.file = `${url}`;
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
                value={this.state.inputDateVal}
                onChange={() => {
                  this.setState({
                    inputDateVal: this.releaseDateRef.current?.value,
                  });
                }}
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
                  <option>Survival horror</option>
                  <option>Action/RPG</option>
                  <option>First person shooter</option>
                  <option>Hack and slash</option>
                </select>
              </div>
              <p className="form__error">Choose game genre</p>
              <p className="form__subtitle">Platforms</p>
              <div className="checkbox__container">
                <input
                  className="form__checkbox"
                  type="checkbox"
                  id="windows"
                  ref={this.windowsCheckboxRef}
                  onClick={() => {
                    if (this.windowsCheckboxRef.current?.checked) {
                      validateForm.platforms.push('Windows');
                    } else {
                      const index = validateForm.platforms.indexOf('Windows');
                      validateForm.platforms.splice(index, 1);
                    }
                  }}
                  onChange={() => {
                    if (this.windowsCheckboxRef.current?.checked) {
                      this.setState({
                        isWindowsChecked: true,
                      });
                    } else {
                      const index = validateForm.platforms.indexOf('Windows');
                      validateForm.platforms.splice(index, 1);
                      this.setState({
                        isWindowsChecked: false,
                      });
                    }
                  }}
                  checked={this.state.isWindowsChecked}
                ></input>
                <label className="form__label" htmlFor="windows">
                  Windows
                </label>
                <input
                  className="form__checkbox"
                  type="checkbox"
                  id="ps5"
                  ref={this.ps5CheckboxRef}
                  onClick={() => {
                    if (this.ps5CheckboxRef.current?.checked) {
                      validateForm.platforms.push('PlayStation 5');
                    } else {
                      const index =
                        validateForm.platforms.indexOf('PlayStation 5');
                      validateForm.platforms.splice(index, 1);
                    }
                  }}
                  onChange={() => {
                    if (this.ps5CheckboxRef.current?.checked) {
                      this.setState({
                        isPs5Checked: true,
                      });
                    } else {
                      const index =
                        validateForm.platforms.indexOf('PlayStation 5');
                      validateForm.platforms.splice(index, 1);
                      this.setState({
                        isPs5Checked: false,
                      });
                    }
                  }}
                  checked={this.state.isPs5Checked}
                ></input>
                <label className="form__label" htmlFor="ps5">
                  PlayStation 5
                </label>
                <input
                  className="form__checkbox"
                  type="checkbox"
                  id="ps4"
                  ref={this.ps4CheckboxRef}
                  onClick={() => {
                    if (this.ps4CheckboxRef.current?.checked) {
                      validateForm.platforms.push('PlayStation 4');
                    } else {
                      const index =
                        validateForm.platforms.indexOf('PlayStation 4');
                      validateForm.platforms.splice(index, 1);
                    }
                  }}
                  onChange={() => {
                    if (this.ps4CheckboxRef.current?.checked) {
                      this.setState({
                        isPs4Checked: true,
                      });
                    } else {
                      const index =
                        validateForm.platforms.indexOf('PlayStation 4');
                      validateForm.platforms.splice(index, 1);
                      this.setState({
                        isPs4Checked: false,
                      });
                    }
                  }}
                  checked={this.state.isPs4Checked}
                ></input>
                <label className="form__label" htmlFor="ps4">
                  PlayStation 4
                </label>
                <input
                  className="form__checkbox"
                  type="checkbox"
                  id="xbox-one"
                  ref={this.xboxOneCheckboxRef}
                  onClick={() => {
                    if (this.xboxOneCheckboxRef.current?.checked) {
                      validateForm.platforms.push('Xbox One');
                    } else {
                      const index = validateForm.platforms.indexOf('Xbox One');
                      validateForm.platforms.splice(index, 1);
                    }
                  }}
                  onChange={() => {
                    if (this.xboxOneCheckboxRef.current?.checked) {
                      this.setState({
                        isXboxOneChecked: true,
                      });
                    } else {
                      const index = validateForm.platforms.indexOf('Xbox One');
                      validateForm.platforms.splice(index, 1);
                      this.setState({
                        isXboxOneChecked: false,
                      });
                    }
                  }}
                  checked={this.state.isXboxOneChecked}
                ></input>
                <label className="form__label" htmlFor="xbox-one">
                  Xbox One
                </label>
                <input
                  className="form__checkbox"
                  type="checkbox"
                  id="nintendo"
                  ref={this.nintendoCheckboxRef}
                  onClick={() => {
                    if (this.nintendoCheckboxRef.current?.checked) {
                      validateForm.platforms.push('Nintendo Switch');
                    } else {
                      const index =
                        validateForm.platforms.indexOf('Nintendo Switch');
                      validateForm.platforms.splice(index, 1);
                    }
                  }}
                  onChange={() => {
                    if (this.nintendoCheckboxRef.current?.checked) {
                      this.setState({
                        isNintendoChecked: true,
                      });
                    } else {
                      const index =
                        validateForm.platforms.indexOf('Nintendo Switch');
                      validateForm.platforms.splice(index, 1);
                      this.setState({
                        isNintendoChecked: false,
                      });
                    }
                  }}
                  checked={this.state.isNintendoChecked}
                ></input>
                <label className="form__label" htmlFor="nintendo">
                  Nintendo Switch
                </label>
                <input
                  className="form__checkbox"
                  type="checkbox"
                  id="xbox-series-x"
                  ref={this.xboxSeriesCheckboxRef}
                  onClick={() => {
                    if (this.xboxSeriesCheckboxRef.current?.checked) {
                      validateForm.platforms.push('Xbox Series X/S');
                    } else {
                      const index =
                        validateForm.platforms.indexOf('Xbox Series X/S');
                      validateForm.platforms.splice(index, 1);
                    }
                  }}
                  onChange={() => {
                    if (this.xboxSeriesCheckboxRef.current?.checked) {
                      this.setState({
                        isXboxSeriesChecked: true,
                      });
                    } else {
                      const index =
                        validateForm.platforms.indexOf('Xbox Series X/S');
                      validateForm.platforms.splice(index, 1);
                      this.setState({
                        isXboxSeriesChecked: false,
                      });
                    }
                  }}
                  checked={this.state.isXboxSeriesChecked}
                ></input>
                <label className="form__label" htmlFor="xbox-series-x">
                  Xbox Series X/S
                </label>
              </div>
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
                  onClick={() => (validateForm.gender = 'Male')}
                ></input>
                <label htmlFor="radio-male" className="form__radio-label">
                  Male
                </label>
                <input
                  type="radio"
                  name="radio"
                  id="radio-female"
                  onClick={() => (validateForm.gender = 'Female')}
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
              <p className="form__card-added" style={this.state.addedCard}>
                Data has been saved
              </p>
            </form>
          </div>
        </section>
        <section className="add-card__section new-cards__section">
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
                        <p className="card__subtitle card__release">
                          {el.date}
                        </p>
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
        </section>
      </div>
    );
  }
}

export default Form;
