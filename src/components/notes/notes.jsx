import { useContext, useEffect } from "react";
import { AppContext } from "../../AppContext";
import Note from "../note/note";
import EditNote from "../edit-note/editNote";
import Modal from "../modal/modal";
import styles from "./Notes.module.css";
import RoozaneIllustration from "../../assets/roozane-illustration.svg";
import useAxiosFunction from "../../hooks/useAxiosFunction";
import { useCallback } from "react";

const Notes = () => {
  const {
    editNote,
    setEditNote,
    setNote,
    notes,
    setNotes,
    requestConfig,
    setRequestConfig,
    modal,
    setModal,
  } = useContext(AppContext);
  const [response, error, loading, fetchData] = useAxiosFunction();

  const fetch = useCallback(() => {
    fetchData(requestConfig);
  }, [requestConfig]);

  useEffect(() => {
    fetch();
  }, [requestConfig]);

  useEffect(() => {
    if (response && response.data) {
      switch (response.status) {
        case 200: {
          console.log(response);
          setNotes(response.data);
          break;
        }
        case 201: {
          setModalContent(response.data.message);
          updateNotes();
          break;
        }
        case 409: {
          break;
        }
        case (404, 500): {
          console.log(response);
          break;
        }
      }
    }
  }, [response]);

  function setModalContent(message) {
    if (message?.includes("added")) {
      setEditNote(false);
    } else if (message?.includes("updated")) {
      setEditNote(false);
    } else if (message?.includes("deleted")) {
      if (editNote) {
        setEditNote(false);
      }
    }
  }

  function updateNotes() {
    setRequestConfig({ method: "get", url: "api/notes" });
    setNotes(response.data);
  }

  const handleDeleteNote = () => {
    const object = { _id: modal.object.id };
    setRequestConfig({
      method: "delete",
      url: "api/delete-note?",
      data: object,
    });
  };

  const handleSaveNote = (note) => {
    setRequestConfig({ method: "post", url: "api/new-note?", data: note });
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

  function homeContent() {
    if (loading) showLoading();
    if (error) showError();
    if (notes?.length > 0) {
      return handleNotesList();
    } else {
      return noNotes();
    }
  }

  function noNotes() {
    return (
      <div className={styles.noNotes}>
        <img
          className={styles.roozaneIllstration}
          src={RoozaneIllustration}
          alt="روزانه"
        />
        <h3 className={styles.noNoteMessage}>یادداشتی یافت نشد</h3>
      </div>
    );
  }

  function showLoading() {
    return <Modal modal={{ isLoadingModal: true, title: "لطفا صبر کنید" }} />;
  }

  function showError() {
    return (
      <Modal
        modal={{
          isLoadingModal: true,
          status: "error",
          title: "خطایی رخ داده است",
        }}
      />
    );
  }

  const handleNotesList = () => {
    return (
      <ul className={styles.notesList}>
        {notes.map((note) => (
          <li key={note._id}>
            <Note
              note={note}
              onNoteClick={() => {
                handleNoteClick(note._id);
              }}
            />
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className={styles.notes}>
      {modal.show && (
        <Modal
          modal={modal}
          onPositive={handleDeleteNote}
          onNegative={handleShowModal}
        />
      )}
      {editNote ? (
        <EditNote onSaveNote={handleSaveNote} onDeleteNote={handleDeleteNote} />
      ) : (
        homeContent()
      )}
    </div>
  );
};

export default Notes;
