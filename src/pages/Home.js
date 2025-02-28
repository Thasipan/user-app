import React, { useContext, useState, useMemo, useCallback } from "react";
import { UserContext } from "../context/UserContext";
import UserCard from "../components/UserCard";
import SearchBar from "../components/SearchBar";
import FilterDropdown from "../components/FilterDropdown";
import Pagination from "../components/Pagination";
import SortButton from "../components/SortButton";
import useDebounce from "../hooks/useDebounce";

const Home = () => {
  const { users, loading, error } = useContext(UserContext);
  const [search, setSearch] = useState("");
  const [companyFilter, setCompanyFilter] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [currentPage, setCurrentPage] = useState(1);

  const debouncedSearch = useDebounce(search, 300);
  const usersPerPage = 5;

  const filteredUsers = useMemo(() => {
    return users
      .filter(user =>
        user.name.toLowerCase().includes(debouncedSearch.toLowerCase())
      )
      .filter(user => (companyFilter ? user.company.name === companyFilter : true))
      .sort((a, b) => (sortOrder === "asc" ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)));
  }, [users, debouncedSearch, companyFilter, sortOrder]);

  const paginatedUsers = useMemo(() => {
    const start = (currentPage - 1) * usersPerPage;
    return filteredUsers.slice(start, start + usersPerPage);
  }, [filteredUsers, currentPage]);

  return (
    <div className="max-w-4xl mx-auto">
      <SearchBar setSearch={setSearch} />
      <FilterDropdown setCompanyFilter={setCompanyFilter} users={users} />
      <SortButton sortOrder={sortOrder} setSortOrder={setSortOrder} />
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {paginatedUsers.map(user => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(filteredUsers.length / usersPerPage)}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default Home;