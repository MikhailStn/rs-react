import React, { useState } from 'react';
import { validateForm } from './formHooks';

function InputFile() {
  const [inputValue, setInputValue] = useState('No file upload');
  return (
    <label htmlFor="add-file" className="form__submit-photo-label">
      <input
        className="form__submit-photo"
        type="file"
        id="add-file"
        accept="image/png, image/gif, image/jpeg, image/jpg, .svg"
        onChange={(e) => {
          let name = '';
          if (e.target.files) {
            name = e.target.files[0].name;
          }
          setInputValue(name);
          validateForm.file = name;
        }}
      ></input>
      <span className="form__submit-photo-text choose-file">Choose file</span>
      <span className="form__submit-photo-text">{inputValue}</span>
    </label>
  );
}

export default InputFile;
