import { useState, useContext } from "react";
import { MdSearch, MdEditNote } from "react-icons/md";
import "./side.css";
import { AppContext } from "../../AppContext";
const Side = () => {
  const [searchField, setSearchField] = useState("");
  const { setEditNote } = useContext(AppContext);

  const handleSearch = (e) => {
    setSearchField(e.target.value);
  };

  const handleNewNoteClick = (e) => {
    setEditNote(true);
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

      <div className="side-add-note" onClick={handleNewNoteClick}>
        <MdEditNote className="side-search-icon" />
        افزودن یادداشت جدید
      </div>
    </div>
  );
};

export default Side;
