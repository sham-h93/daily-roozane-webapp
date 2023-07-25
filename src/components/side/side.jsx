import { useState, useContext, useEffect } from "react";
import { MdSearch, MdEditNote } from "react-icons/md";
import { AppContext } from "../../AppContext";
import "./side.css";

const Side = () => {
  const [searchField, setSearchField] = useState("");
  const { setEditNote, setRequestConfig } = useContext(AppContext);

  useEffect(() => {
    if (searchField === "") {
      setRequestConfig({ method: "get", url: "api/notes" });
    } else {
      setRequestConfig({
        method: "post",
        url: "api/find-notes?",
        data: { title: `${searchField}` },
      });
    }
  }, [searchField]);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchField(e.target.value);
  };

  const handleNewNoteClick = () => {
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
