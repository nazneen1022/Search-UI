import React from "react";
import "../../App.css";

export default function SearchBar() {
  return (
    <div>
      <div className="search-container">
        <input
          className="search-input"
          type="text"
          size={50}
          placeholder="Find a product.."
        />
      </div>
    </div>
  );
}
