import React, { Component, RefObject } from 'react';
import '../pages/addCard.css';
import { IValidationForm } from 'interfaces/interfaces';
import { ICreateFormProps } from 'interfaces/interfaces';
import InputName from './inputName';
import InputFile from './inputFile';
import Checkboxes from './checkboxes';
import RadioButtons from './radioBtns';
import NewCards from './newCards';
import { states } from './formState';
import { addedItems } from './formState';
import ButtonSubmit from './buttonSubmit';

export let validateForm: IValidationForm = {
  id: 0,
  name: '',
  date: '',
  genre: 'Survival horror',
  platforms: [],
  gender: 'Male',
  file: '',
};

function showForm() {
  const [inputName, setInputName] = React.useState(false);
  React.useEffect(() => {
    setInputName(true);
  }, []);

  const [inputFile, setInputFile] = React.useState(false);
  React.useEffect(() => {
    setInputFile(true);
  }, []);

  const [checkboxes, setCheckboxes] = React.useState(false);
  React.useEffect(() => {
    setCheckboxes(true);
  }, []);

  const [radioBtns, setRadio] = React.useState(false);
  React.useEffect(() => {
    setRadio(true);
  }, []);

  const [btnSubmit, setButton] = React.useState(false);
  React.useEffect(() => {
    setButton(true);
  }, []);

  return (
    <div className="add-card__container">
      <section className="add-card__section form__section">
        <div className="add-card__section-wrapper">
          <form className="form">
            <p className="form__subtitle">Name</p>
            {inputName && <InputName />}
            {inputFile && <InputFile />}
            <p className="form__error">
              Name should not be empty, start with a capital letter and include
              5 symbols or more
            </p>
            <p className="form__subtitle">Release date</p>
            <input
              className="form__date form__input"
              type="date"
              onChange={(e) => {
                validateForm.date = `${e.target.value}`;
              }}
            ></input>
            <p className="form__error">Enter release date</p>
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
            {checkboxes && <Checkboxes />}
            <p className="form__error">Choose at least one platform</p>
            <p className="form__subtitle">I am</p>
            {radioBtns && <RadioButtons />}
            {btnSubmit && <ButtonSubmit />}
            <p className="form__card-added">Data has been saved</p>
          </form>
        </div>
      </section>
      <section className="add-card__section new-cards__section">
        <NewCards />
      </section>
    </div>
  );
}

export default showForm;
