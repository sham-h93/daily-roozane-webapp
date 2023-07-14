import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../AppContext";
import Note from "../note/note";
import EditNote from "../edit-note/editNote";
import useAxios from "../../useAxios";
import Modal from "../modal/modal";
import "./notes.css";
import RoozaneIllustration from "../../assets/roozane-illustration.svg";

const Notes = () => {
  const {
    editNote,
    setEditNote,
    setNote,
    notes,
    setNotes,
    requestUrl,
    setRequestUrl,
    modal,
    setModal,
    loggedIn,
    isLoading,
    setIsLoading,
  } = useContext(AppContext);
  const [response, , loading] = useAxios(
    requestUrl[0],
    requestUrl[1],
    requestUrl[2]
  );

  useEffect(() => {
    console.log("notes=" + response);
    if (response) {
      handleResponse();
    }

    loading ? setIsLoading(true) : setIsLoading(false);
    handleShowModal();
  }, [response, loggedIn, loading]);

  function setModalContent(message) {
    if (message?.includes("added")) {
      setEditNote(false);
    } else if (message?.includes("updated")) {
      setEditNote(false);
      //return updatedModal(message);
    } else if (message?.includes("deleted")) {
      if (editNote) {
        setEditNote(false);
      }
      //return deletedModal(message);
    } else if (message?.includes("not found")) {
      //return deletedModal(message);
    } else {
      //return errorModal(message);
    }
  }

  function noNotes() {
    return (
      <div className="noNotes">
        <img
          className="roozaneIllstration"
          src={RoozaneIllustration}
          alt="روزانه"
        />
        <h3 className="noNoteMessage">یادداشتی یافت نشد</h3>
      </div>
    );
  }

  function handleResponse() {
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

  function updateNotes() {
    setRequestUrl(["get", "api/notes", null]);
    setNotes(response.data);
  }

  const handleDeleteNote = () => {
    const object = { _id: modal.object.id };
    setRequestUrl(["delete", "api/delete-note?", object]);
  };

  const handleSaveNote = (note) => {
    setRequestUrl(["post", "api/new-note?", note]);
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
    if (notes?.length > 0) {
      return <ul className="app-notes-list">{handleNotesList()}</ul>;
    } else {
      return noNotes();
    }
  }

  const handleNotesList = () => {
    if (notes != null) {
      return notes.map((note) => (
        <li key={note._id}>
          <Note
            note={note}
            onNoteClick={() => {
              handleNoteClick(note._id);
            }}
          />
        </li>
      ));
    }
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
      {/* {loading && (
        <Modal modal={{ isLoadingModal: true, title: "لطفا صبر کنید" }} />
      )} */}
      {editNote ? (
        <EditNote onSaveNote={handleSaveNote} onDeleteNote={handleDeleteNote} />
      ) : (
        homeContent()
      )}
    </div>
  );
};

export default Notes;
