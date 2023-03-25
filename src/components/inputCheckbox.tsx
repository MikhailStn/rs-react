import { IAddCard } from 'interfaces/interfaces';
import React, { Component, RefObject } from 'react';
import { validateForm } from '../pages/addCard';

class InputCheckbox extends Component {
  windowsCheckboxRef: RefObject<HTMLInputElement>;
  ps5CheckboxRef: RefObject<HTMLInputElement>;
  ps4CheckboxRef: RefObject<HTMLInputElement>;
  xboxOneCheckboxRef: RefObject<HTMLInputElement>;
  nintendoCheckboxRef: RefObject<HTMLInputElement>;
  xboxSeriesCheckboxRef: RefObject<HTMLInputElement>;
  constructor(props: IAddCard) {
    super(props);
    this.windowsCheckboxRef = React.createRef();
    this.ps5CheckboxRef = React.createRef();
    this.ps4CheckboxRef = React.createRef();
    this.xboxOneCheckboxRef = React.createRef();
    this.nintendoCheckboxRef = React.createRef();
    this.xboxSeriesCheckboxRef = React.createRef();
  }
  render() {
    return (
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
              const index = validateForm.platforms.indexOf('PlayStation 5');
              validateForm.platforms.splice(index, 1);
            }
          }}
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
              const index = validateForm.platforms.indexOf('PlayStation 4');
              validateForm.platforms.splice(index, 1);
            }
          }}
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
              const index = validateForm.platforms.indexOf('Nintendo Switch');
              validateForm.platforms.splice(index, 1);
            }
          }}
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
              const index = validateForm.platforms.indexOf('Xbox Series X/S');
              validateForm.platforms.splice(index, 1);
            }
          }}
        ></input>
        <label className="form__label" htmlFor="xbox-series-x">
          Xbox Series X/S
        </label>
      </div>
    );
  }
}

export default InputCheckbox;
