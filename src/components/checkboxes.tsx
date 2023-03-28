import React from 'react';
import { validateForm } from './form';

interface CheckboxesProps {
  forwardRef1: React.RefObject<HTMLInputElement>;
  forwardRef2: React.RefObject<HTMLInputElement>;
  forwardRef3: React.RefObject<HTMLInputElement>;
  forwardRef4: React.RefObject<HTMLInputElement>;
  forwardRef5: React.RefObject<HTMLInputElement>;
  forwardRef6: React.RefObject<HTMLInputElement>;
  isWindowsChecked: boolean;
  isPs5Checked: boolean;
  isPs4Checked: boolean;
  isXboxOneChecked: boolean;
  isNintendoChecked: boolean;
  isXboxSeriesChecked: boolean;
  onchange1: () => void;
  onchange2: () => void;
  onchange3: () => void;
  onchange4: () => void;
  onchange5: () => void;
  onchange6: () => void;
}

class Checkboxes extends React.Component<CheckboxesProps> {
  render() {
    return (
      <div className="checkbox__container">
        <input
          className="form__checkbox"
          type="checkbox"
          id="windows"
          ref={this.props.forwardRef1}
          onClick={() => {
            if (this.props.forwardRef1.current?.checked) {
              validateForm.platforms.push('Windows');
            } else {
              const index = validateForm.platforms.indexOf('Windows');
              validateForm.platforms.splice(index, 1);
            }
          }}
          onChange={this.props.onchange1}
          checked={this.props.isWindowsChecked}
        ></input>
        <label className="form__label" htmlFor="windows">
          Windows
        </label>
        <input
          className="form__checkbox"
          type="checkbox"
          id="ps5"
          ref={this.props.forwardRef2}
          onClick={() => {
            if (this.props.forwardRef2.current?.checked) {
              validateForm.platforms.push('PlayStation 5');
            } else {
              const index = validateForm.platforms.indexOf('PlayStation 5');
              validateForm.platforms.splice(index, 1);
            }
          }}
          onChange={this.props.onchange2}
          checked={this.props.isPs5Checked}
        ></input>
        <label className="form__label" htmlFor="ps5">
          PlayStation 5
        </label>
        <input
          className="form__checkbox"
          type="checkbox"
          id="ps4"
          ref={this.props.forwardRef3}
          onClick={() => {
            if (this.props.forwardRef3.current?.checked) {
              validateForm.platforms.push('PlayStation 4');
            } else {
              const index = validateForm.platforms.indexOf('PlayStation 4');
              validateForm.platforms.splice(index, 1);
            }
          }}
          onChange={this.props.onchange3}
          checked={this.props.isPs4Checked}
        ></input>
        <label className="form__label" htmlFor="ps4">
          PlayStation 4
        </label>
        <input
          className="form__checkbox"
          type="checkbox"
          id="xbox-one"
          ref={this.props.forwardRef4}
          onClick={() => {
            if (this.props.forwardRef4.current?.checked) {
              validateForm.platforms.push('Xbox One');
            } else {
              const index = validateForm.platforms.indexOf('Xbox One');
              validateForm.platforms.splice(index, 1);
            }
          }}
          onChange={this.props.onchange4}
          checked={this.props.isXboxOneChecked}
        ></input>
        <label className="form__label" htmlFor="xbox-one">
          Xbox One
        </label>
        <input
          className="form__checkbox"
          type="checkbox"
          id="nintendo"
          ref={this.props.forwardRef5}
          onClick={() => {
            if (this.props.forwardRef5.current?.checked) {
              validateForm.platforms.push('Nintendo Switch');
            } else {
              const index = validateForm.platforms.indexOf('Nintendo Switch');
              validateForm.platforms.splice(index, 1);
            }
          }}
          onChange={this.props.onchange5}
          checked={this.props.isNintendoChecked}
        ></input>
        <label className="form__label" htmlFor="nintendo">
          Nintendo Switch
        </label>
        <input
          className="form__checkbox"
          type="checkbox"
          id="xbox-series-x"
          ref={this.props.forwardRef6}
          onClick={() => {
            if (this.props.forwardRef6.current?.checked) {
              validateForm.platforms.push('Xbox Series X/S');
            } else {
              const index = validateForm.platforms.indexOf('Xbox Series X/S');
              validateForm.platforms.splice(index, 1);
            }
          }}
          onChange={this.props.onchange6}
          checked={this.props.isXboxSeriesChecked}
        ></input>
        <label className="form__label" htmlFor="xbox-series-x">
          Xbox Series X/S
        </label>
      </div>
    );
  }
}

export default Checkboxes;
