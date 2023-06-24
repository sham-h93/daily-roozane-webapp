import { useContext } from "react";
import "./notes.css";
import Note from "../note/note";
import EditNote from "../edit-note/editNote";
import { AppContext } from "../../AppContext";
import useAxios from "../../useAxios";

const Notes = () => {
  const { setEditNote, editNote } = useContext(AppContext);
  const [, response] = useAxios("notes");

  const notes = () => {
    return response?.map((response) => (
      <li key={response._id}>
        <Note note={response} />
      </li>
    ));
  };

  return (
    <div className="app-notes">
      {editNote ? <EditNote /> : <ul className="app-notes-list">{notes()}</ul>}
    </div>
  );
};

export default Notes;
