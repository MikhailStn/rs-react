import React from 'react';
import { validateForm } from './formHooks';

function ButtonSubmit() {
  return (
    <button
      type="submit"
      className="form__button"
      onClick={() => {
        event?.preventDefault();
        console.log(validateForm);
      }}
    >
      submit
    </button>
  );
}

export default ButtonSubmit;
