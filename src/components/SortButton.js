import React from "react";

const SortButton = ({ sortOrder, setSortOrder }) => {
  return (
    <button
      onClick={() => setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"))}
      className="px-4 py-2 my-3 bg-blue-500 text-white rounded-lg"
    >
      Sort {sortOrder === "asc" ? "A-Z" : "Z-A"}
    </button>
  );
};

export default SortButton;