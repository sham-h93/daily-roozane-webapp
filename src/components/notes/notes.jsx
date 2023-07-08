import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../AppContext";
import Note from "../note/note";
import EditNote from "../edit-note/editNote";
import useAxios from "../../useAxios";
import Modal from "../modal/modal";
import "./notes.css";

const Notes = () => {
  const { editNote, setEditNote, setNote, notes, setNotes } =
    useContext(AppContext);
  const [url, setUrl] = useState(["get", "notes", null]);
  const [response, , loading] = useAxios(url[0], url[1], url[2]);
  const { modal, setModal } = useContext(AppContext);

  useEffect(() => {
    if (url[0] === "get") {
      setNotes(response);
      console.log(response);
    } else {
      handleShowModal();
    }
  }, [response]);

  useEffect(() => {}, [loading]);

  const content = () => {
    return;
  };

  const handleDeleteNote = () => {
    console.log(modal.object.id);
    const object = { _id: modal.object.id };
    setUrl(["delete", "delete-note?", object]);
  };

  const handleSaveNote = (note) => {
    console.log(note);
    setUrl(["post", "new-note?", note]);
  };

  const handleShowModal = () => {
    setModal({ show: false });
  };

  const handleNoteClick = (id) => {
    notes.map((note) => {
      if (note._id === id) {
        setNote(note);
      }
    });
    setEditNote(true);
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
        <Modal
          modal={modal}
          onPositive={handleDeleteNote}
          onNegative={handleShowModal}
        />
      )}
      {editNote ? (
        <EditNote onSaveNote={handleSaveNote} />
      ) : (
        <ul className="app-notes-list">{handleNotesList()}</ul>
      )}
    </div>
  );
};

export default Notes;
