import React, { useEffect } from 'react';

function SearchBar() {
  const [inputVal, setInputVal] = React.useState('');

  // when component mounts
  useEffect(() => {
    const val = localStorage.getItem('curr-search-val');
    if (val) {
      setInputVal(val);
    }
    return;
  }, []);

  // when component unmounts
  useEffect(() => {
    return localStorage.setItem('curr-search-val', inputVal);
  }, [inputVal]);

  return (
    <div className="search-bar__container">
      <div className="search-bar">
        <i className="search-bar__icon"></i>
        <input
          className="search-bar__input"
          placeholder="Game, studio or platform"
          onChange={(e) => {
            setInputVal(e.target.value);
          }}
          value={inputVal}
        ></input>
      </div>
      <button className="search-bar__button">search</button>
    </div>
  );
}

export default SearchBar;
