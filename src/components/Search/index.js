import React from "react";
import "./Search.css";

const SearchBar = (props) => {
  return (
    <div className="search-bar">
      <div>
        <input
          placeholder={props.placeholder}
          type="text"
          className="search"
          onChange={props.handleChange}
          id="search-option"
        />
      </div>
      <div>
        <button className="search-btn">Search</button>
      </div>
    </div>
  );
};

export default SearchBar;
