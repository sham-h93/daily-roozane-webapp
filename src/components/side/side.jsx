import { useState } from "react";
import { MdSearch, MdEditNote } from "react-icons/md";

import "./side.css";
const Side = () => {
  const [searchField, setSearchField] = useState("");

  const handleSearch = (e) => {
    setSearchField(e.target.value);
  };

  return (
    <div className="app-side">
      <form>
        <MdSearch className="side-search-icon" />
        <input
          className="side-search"
          type="search"
          placeholder="جستجوی یادداشت"
          onChange={handleSearch}
          value={searchField}
        />
      </form>

      <div className="side-add-note">
        <MdEditNote className="side-search-icon" />
        افزودن یادداشت جدید
      </div>
    </div>
  );
};

export default Side;
