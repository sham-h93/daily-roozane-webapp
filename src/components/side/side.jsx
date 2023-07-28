import { useState, useContext, useEffect } from "react";
import { MdSearch, MdEditNote } from "react-icons/md";
import { AppContext } from "../../AppContext";
import styles from "./Side.module.css";

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchField]);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchField(e.target.value);
  };

  const handleNewNoteClick = () => {
    setEditNote(true);
  };

  return (
    <div className={styles.appSide}>
      <div className={styles.searchContainer}>
        <MdSearch className="side-search-icon" size={32} />
        <input
          className={styles.searchField}
          type="search"
          placeholder="جستجوی یادداشت"
          onChange={handleSearch}
        />
      </div>

      <div className={styles.addNote} onClick={handleNewNoteClick}>
        <MdEditNote className={styles.editNote} size={32} />
        افزودن یادداشت جدید
      </div>
    </div>
  );
};

export default Side;
