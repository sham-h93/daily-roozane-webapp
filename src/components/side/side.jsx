import { useState, useContext, useEffect } from "react";
import { MdSearch, MdEditNote } from "react-icons/md";
import "./side.css";
import { AppContext } from "../../AppContext";
import useAxios from "../../useAxios";

const Side = () => {
  const [searchField, setSearchField] = useState("");
  const { setEditNote, setNotes, requestUrl, setRequestUrl } =
    useContext(AppContext);

  // useEffect(() => {
  //   setRequestUrl(["get", "notes?", { title: `${searchField}` }]);
  //   console.log(requestUrl);
  // }, [searchField]);

  // useEffect(() => {
  //   //setNotes(response);
  //   console.log(requestUrl + " SIDE 2");
  // }, [requestUrl[2]]);

  const handleSearch = (e) => {
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
