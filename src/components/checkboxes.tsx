import React from 'react';
import { validateForm } from './formHooks';

function Checkboxes() {
  return (
    <div className="checkbox__container">
      <input
        className="form__checkbox"
        type="checkbox"
        id="windows"
        onChange={(e) => {
          if (e.target.checked) {
            validateForm.platforms.push('Windows');
          } else {
            const i = validateForm.platforms.indexOf('Windows');
            validateForm.platforms.splice(i, 1);
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
        onChange={(e) => {
          if (e.target.checked) {
            validateForm.platforms.push('PlayStation 5');
          } else {
            const i = validateForm.platforms.indexOf('PlayStation 5');
            validateForm.platforms.splice(i, 1);
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
        onChange={(e) => {
          if (e.target.checked) {
            validateForm.platforms.push('PlayStation 4');
          } else {
            const i = validateForm.platforms.indexOf('PlayStation 4');
            validateForm.platforms.splice(i, 1);
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
        onChange={(e) => {
          if (e.target.checked) {
            validateForm.platforms.push('Xbox One');
          } else {
            const i = validateForm.platforms.indexOf('Xbox One');
            validateForm.platforms.splice(i, 1);
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
        onChange={(e) => {
          if (e.target.checked) {
            validateForm.platforms.push('Nintendo');
          } else {
            const i = validateForm.platforms.indexOf('Nintendo');
            validateForm.platforms.splice(i, 1);
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
        onChange={(e) => {
          if (e.target.checked) {
            validateForm.platforms.push('Xbox Series X/S');
          } else {
            const i = validateForm.platforms.indexOf('Xbox Series X/S');
            validateForm.platforms.splice(i, 1);
          }
        }}
      ></input>
      <label className="form__label" htmlFor="xbox-series-x">
        Xbox Series X/S
      </label>
    </div>
  );
}

export default Checkboxes;
