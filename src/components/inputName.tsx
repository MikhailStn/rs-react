import React from 'react';

interface InputNameProps {
  forwardRef: React.RefObject<HTMLInputElement>;
  forwardNameInputBorder?: object;
  forwardInputNameVal?: string;
  forwardOnchange?: () => void;
}

class InputName extends React.Component<InputNameProps> {
  render() {
    return (
      <input
        className="form__name form__input"
        type="text"
        placeholder="Name of game"
        ref={this.props.forwardRef}
        style={this.props.forwardNameInputBorder}
        value={this.props.forwardInputNameVal}
        onChange={this.props.forwardOnchange}
      ></input>
    );
  }
}

export default InputName;
