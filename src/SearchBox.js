import React from "react";

const SearchBox = ({ searchChange, inputValue }) => {
  return (
    <input
      type="text"
      placeholder="Enter item"
      value={inputValue}
      onChange={searchChange}
    />
  );
};

export default SearchBox;
