import React from 'react';

interface InputFileProps {
  forwardRef: React.RefObject<HTMLInputElement>;
  labelStyle?: object;
  inputStyle?: object;
  value: string;
  inputFileName: string;
  forwardOnchange?: () => void;
}

class InputFile extends React.Component<InputFileProps> {
  render() {
    return (
      <label
        htmlFor="add-file"
        className="form__submit-photo-label"
        style={this.props.labelStyle}
      >
        <input
          className="form__submit-photo"
          type="file"
          id="add-file"
          ref={this.props.forwardRef}
          style={this.props.inputStyle}
          value={this.props.value}
          onChange={this.props.forwardOnchange}
          accept="image/png, image/gif, image/jpeg, image/jpg, .svg"
        ></input>
        <span className="form__submit-photo-text choose-file">Choose file</span>
        <span className="form__submit-photo-text">
          {this.props.inputFileName}
        </span>
      </label>
    );
  }
}

export default InputFile;
