import { useContext, useEffect, useState } from "react";
import "./notes.css";
import Note from "../note/note";
import EditNote from "../edit-note/editNote";
import { AppContext } from "../../AppContext";
import useAxios from "../../useAxios";
import Modal from "../modal/modal";

const Notes = () => {
  const { editNote, setEditNote, noteId, setNoteId, notes, setNotes } =
    useContext(AppContext);
  const [url, setUrl] = useState(["get", "notes", null]);
  const [response] = useAxios(url[0], url[1], url[2]);
  const { modal, setModal } = useContext(AppContext);

  useEffect(() => {
    if (url[0] === "get") {
      setNotes(response);
      console.log(response);
    } else {
      hideModal();
    }
  }, [response]);

  const deleteNote = () => {
    let id = modal.object.id;
    let object = { _id: id };
    setUrl(["delete", "delete-note?", object]);
  };

  const hideModal = () => {
    setModal({ show: false });
  };

  const handleNoteClick = (id) => {
    setEditNote(true);
    setNoteId(id);
  };
  const handleNotesList = () => {
    return notes?.map((note) => (
      <li key={note._id}>
        <Note
          note={note}
          onNoteClick={() => {
            handleNoteClick(note._id);
          }}
        />
      </li>
    ));
  };

  return (
    <div className="app-notes">
      {modal.show && (
        <Modal modal={modal} onPositive={deleteNote} onNegative={hideModal} />
      )}
      {editNote ? (
        <EditNote />
      ) : (
        <ul className="app-notes-list">{handleNotesList()}</ul>
      )}
    </div>
  );
};

export default Notes;
