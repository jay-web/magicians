import React from "react";

import "./searchBox.styles.css";

export const SearchBox = ({ placeholder, handleChange }) => {
  return (
    <div className="searchBox">
      <h2>Potter wizards</h2>
      <div className="search">
        <input
          type="search"
          placeholder={placeholder}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};
