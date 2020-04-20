import React from "react";
import "./search-box.styles.css";

export const SearchBox = ({ onChange }) => {
  return (
    <input
      onChange={onChange}
      className="search"
      type="search"
      placeholder="Start typing to filter.."
    />
  );
};
