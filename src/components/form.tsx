import React from 'react';
import '../pages/addCard.css';
import { IValidationForm } from 'interfaces/interfaces';
import RadioButtons from './radioBtns';
import NewCards from './newCards';
import { useForm } from 'react-hook-form';

export const addedItems: IValidationForm[] = [];

export let validateForm: IValidationForm = {
  id: 0,
  name: '',
  date: '',
  genre: 'Survival horror',
  platforms: [],
  gender: 'Male',
  file: '',
};

function ShowForm() {
  const { register, handleSubmit } = useForm();
  const [radioBtns, setRadio] = React.useState(false);
  React.useEffect(() => {
    setRadio(true);
  }, []);
  const [inputFileValue, setInputFileValue] = React.useState('No file upload');
  const [fileVal, setFileVal] = React.useState('');
  const [inputValue, setInputValue] = React.useState('');
  const [inputDateVal, setInputDateVal] = React.useState('');
  const [nameErr, setNameErr] = React.useState({ opacity: 0 });
  const [dateErr, setDateErr] = React.useState({ opacity: 0 });
  const [platformsErr, setPlatformsErr] = React.useState({ opacity: 0 });
  const [fileErr, setFileErr] = React.useState({ border: '1px solid gray' });
  const [windowsCheck, setWindowsCheck] = React.useState(false);
  const [ps5Check, setPs5Check] = React.useState(false);
  const [ps4Check, setPs4Check] = React.useState(false);
  const [xboxCheck, setXboxCheck] = React.useState(false);
  const [nintendoCheck, setNintendoCheck] = React.useState(false);
  const [xboxSerCheck, setXboxSerCheck] = React.useState(false);
  const [nameErrBorder, setNameErrBorder] = React.useState({
    border: '1px solid gray',
  });
  const [dateErrBorder, setDateErrBorder] = React.useState({
    border: '1px solid gray',
  });
  const [savedData, setSavedData] = React.useState({ opacity: 0 });

  function checkForm() {
    if (validateForm.name.length < 5) {
      setNameErr({ opacity: 1 });
      setNameErrBorder({ border: '1px solid red' });
    } else {
      setNameErr({ opacity: 0 });
      setNameErrBorder({ border: '1px solid gray' });
    }
    if (validateForm.date.length == 0) {
      setDateErr({ opacity: 1 });
      setDateErrBorder({ border: '1px solid red' });
    } else {
      setDateErr({ opacity: 0 });
      setDateErrBorder({ border: '1px solid gray' });
    }
    if (validateForm.file.length == 0) {
      setFileErr({ border: '1px solid red' });
    } else {
      setFileErr({ border: '1px solid gray' });
    }
    if (validateForm.platforms.length == 0) {
      setPlatformsErr({ opacity: 1 });
    } else {
      setPlatformsErr({ opacity: 0 });
    }
    if (
      validateForm.name.length >= 5 &&
      validateForm.date.length != 0 &&
      validateForm.file.length != 0 &&
      validateForm.platforms.length != 0
    ) {
      addedItems.push(validateForm);
      setSavedData({ opacity: 1 });
      setTimeout(() => {
        setSavedData({ opacity: 0 });
      }, 3000);
      setInputValue('');
      setInputFileValue('No file upload');
      setInputDateVal('');
      setWindowsCheck(false);
      setPs5Check(false);
      setPs4Check(false);
      setXboxCheck(false);
      setNintendoCheck(false);
      setXboxSerCheck(false);
      setFileVal('');
      const genre = validateForm.genre;
      const gender = validateForm.gender;
      validateForm = {
        id: addedItems.length,
        name: '',
        date: '',
        genre: genre,
        platforms: [],
        gender: gender,
        file: '',
      };
    }
  }

  return (
    <div className="add-card__container">
      <section className="add-card__section form__section">
        <div className="add-card__section-wrapper">
          <form className="form">
            <p className="form__subtitle">Name</p>
            <input
              {...register('NameOfGame', {
                required: true,
                minLength: 5,
              })}
              className="form__name form__input"
              type="text"
              placeholder="Name of game"
              value={inputValue}
              onChange={(e) => {
                setInputValue(e.target.value);
                validateForm.name = e.target.value;
              }}
              style={nameErrBorder}
            ></input>
            <label
              htmlFor="add-file"
              className="form__submit-photo-label"
              style={fileErr}
            >
              <input
                {...register('Image', {
                  required: true,
                })}
                className="form__submit-photo"
                type="file"
                id="add-file"
                accept="image/png, image/gif, image/jpeg, image/jpg, .svg"
                onChange={(e) => {
                  let name = '';
                  let url = '';
                  if (e.target.files) {
                    name = e.target.files[0].name;
                    url = URL.createObjectURL(e.target.files[0]);
                  }
                  setInputFileValue(name);
                  setFileVal(e.target.value);
                  validateForm.file = url;
                }}
                value={fileVal}
              ></input>
              <span className="form__submit-photo-text choose-file">
                Choose file
              </span>
              <span className="form__submit-photo-text">{inputFileValue}</span>
            </label>
            <p className="form__error" style={nameErr}>
              Name should not be empty and include 5 symbols or more
            </p>
            <p className="form__subtitle">Release date</p>
            <input
              {...register('Date', {
                required: true,
              })}
              className="form__date form__input"
              type="date"
              onChange={(e) => {
                validateForm.date = `${e.target.value}`;
                setInputDateVal(e.target.value);
              }}
              value={inputDateVal}
              style={dateErrBorder}
            ></input>
            <p className="form__error" style={dateErr}>
              Enter release date
            </p>
            <p className="form__subtitle">Genre</p>
            <div className="select">
              <select
                className="form__select form__input"
                onChange={(e) => {
                  validateForm.genre = `${e.target.value}`;
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
                onChange={(e) => {
                  if (e.target.checked) {
                    validateForm.platforms.push('Windows');
                    setWindowsCheck(true);
                  } else {
                    const i = validateForm.platforms.indexOf('Windows');
                    validateForm.platforms.splice(i, 1);
                    setWindowsCheck(false);
                  }
                }}
                checked={windowsCheck}
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
                    setPs5Check(true);
                  } else {
                    const i = validateForm.platforms.indexOf('PlayStation 5');
                    validateForm.platforms.splice(i, 1);
                    setPs5Check(false);
                  }
                }}
                checked={ps5Check}
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
                    setPs4Check(true);
                  } else {
                    const i = validateForm.platforms.indexOf('PlayStation 4');
                    validateForm.platforms.splice(i, 1);
                    setPs4Check(false);
                  }
                }}
                checked={ps4Check}
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
                    setXboxCheck(true);
                  } else {
                    const i = validateForm.platforms.indexOf('Xbox One');
                    validateForm.platforms.splice(i, 1);
                    setXboxCheck(false);
                  }
                }}
                checked={xboxCheck}
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
                    setNintendoCheck(true);
                  } else {
                    const i = validateForm.platforms.indexOf('Nintendo');
                    validateForm.platforms.splice(i, 1);
                    setNintendoCheck(false);
                  }
                }}
                checked={nintendoCheck}
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
                    setXboxSerCheck(true);
                  } else {
                    const i = validateForm.platforms.indexOf('Xbox Series X/S');
                    validateForm.platforms.splice(i, 1);
                    setXboxSerCheck(false);
                  }
                }}
                checked={xboxSerCheck}
              ></input>
              <label className="form__label" htmlFor="xbox-series-x">
                Xbox Series X/S
              </label>
            </div>
            <p className="form__error" style={platformsErr}>
              Choose at least one platform
            </p>
            <p className="form__subtitle">I am</p>
            {radioBtns && <RadioButtons />}
            <button
              type="submit"
              className="form__button"
              onClick={() => {
                event?.preventDefault();
                checkForm();
                handleSubmit;
              }}
            >
              submit
            </button>
            <p className="form__card-added" style={savedData}>
              Data has been saved
            </p>
          </form>
        </div>
      </section>
      <section className="add-card__section new-cards__section">
        <NewCards />
      </section>
    </div>
  );
}

export default ShowForm;
