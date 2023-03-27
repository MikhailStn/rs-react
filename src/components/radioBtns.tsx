import React from 'react';
import { validateForm } from './form';

class RadioButtons extends React.Component {
  render() {
    return (
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
    );
  }
}

export default RadioButtons;
