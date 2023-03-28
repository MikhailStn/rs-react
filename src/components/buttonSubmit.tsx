import React from 'react';

interface ButtonSubmitProps {
  checkForm: () => void;
}

class ButtonSubmit extends React.Component<ButtonSubmitProps> {
  render() {
    return (
      <button
        type="submit"
        className="form__button"
        onClick={this.props.checkForm}
      >
        submit
      </button>
    );
  }
}

export default ButtonSubmit;
