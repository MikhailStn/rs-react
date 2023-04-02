import React, { useState } from 'react';
import { validateForm } from './formHooks';

function InputName() {
  const [inputValue, setInputValue] = useState('');
  return (
    <input
      className="form__name form__input"
      type="text"
      placeholder="Name of game"
      value={inputValue}
      onChange={(e) => {
        setInputValue(e.target.value);
        validateForm.name = e.target.value;
      }}
    ></input>
  );
}

export default InputName;
