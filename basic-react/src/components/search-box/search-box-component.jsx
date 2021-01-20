import React from "react";
import "../search-box/search-box-style.css";

export const SearchBox = ({ placeholder, handleChange }) => (
  <div className="search">
    <input style={{textAlign: "center"}} type="search" placeholder={placeholder} onChange={handleChange} />
  </div>
);
