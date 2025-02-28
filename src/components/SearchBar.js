import React from "react";

const SearchBar = ({ setSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search users..."
      onChange={(e) => setSearch(e.target.value)}
      className="w-full p-2 border rounded-lg"
    />
  );
};

export default SearchBar;