import React, { Component } from 'react';

class InputCheckbox extends Component {
  render() {
    return (
      <div className="checkbox__container">
        <input className="form__checkbox" type="checkbox" id="windows"></input>
        <label className="form__label" htmlFor="windows">
          Windows
        </label>
        <input className="form__checkbox" type="checkbox" id="ps5"></input>
        <label className="form__label" htmlFor="ps5">
          PlayStation 5
        </label>
        <input className="form__checkbox" type="checkbox" id="ps4"></input>
        <label className="form__label" htmlFor="ps4">
          PlayStation 4
        </label>
        <input className="form__checkbox" type="checkbox" id="xbox-one"></input>
        <label className="form__label" htmlFor="xbox-one">
          Xbox One
        </label>
        <input className="form__checkbox" type="checkbox" id="nintendo"></input>
        <label className="form__label" htmlFor="nintendo">
          Nintendo Switch
        </label>
        <input
          className="form__checkbox"
          type="checkbox"
          id="xbox-series-x"
        ></input>
        <label className="form__label" htmlFor="xbox-series-x">
          Xbox Series X/S
        </label>
      </div>
    );
  }
}

export default InputCheckbox;
