import React from "react";

const FilterDropdown = ({ setCompanyFilter, users }) => {
  const companies = [...new Set(users.map(user => user.company.name))];

  return (
    <select
      onChange={(e) => setCompanyFilter(e.target.value)}
      className="p-2 my-3 mr-2 border rounded-lg"
    >
      <option value="">All Companies</option>
      {companies.map(company => (
        <option key={company} value={company}>{company}</option>
      ))}
    </select>
  );
};

export default FilterDropdown;