import React from 'react';
import { ISearch } from 'interfaces/interfaces';

class SearchBar extends React.Component<ISearch, { val: string }> {
  constructor(props: ISearch) {
    super(props);
    this.state = { val: localStorage.getItem('curr-search-val') || '' };
  }

  componentDidUpdate = () => {
    localStorage.setItem('curr-search-val', this.state.val);
  };

  updateVal: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    this.setState({ val: e.target.value });
  };

  render() {
    return (
      <div className="search-bar__container">
        <div className="search-bar">
          <i className="search-bar__icon"></i>
          <input
            className="search-bar__input"
            placeholder="Game, studio or platform"
            value={this.state.val}
            onChange={this.updateVal}
          ></input>
        </div>
        <button className="search-bar__button">search</button>
      </div>
    );
  }
}

export default SearchBar;
