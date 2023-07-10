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
  } = useContext(AppContext);
  const [statusMessage, setStatusMessage] = useState(null);
  const [response, , loading] = useAxios(
    requestUrl[0],
    requestUrl[1],
    requestUrl[2]
  );

  function setModalContent(message) {
    if (message?.includes("added")) {
      setEditNote(false);
      addedModal(message);
    } else if (message?.includes("updated")) {
      //return updatedModal(message);
    } else if (message?.includes("deleted")) {
      //return deletedModal(message);
    } else {
      //return errorModal(message);
    }
  }

  function addedModal(message) {
    setModal({
      show: true,
      status: message,
      message: "با موفقیت ذخیره شد",
      negative: "بستن",
    });
  }

  // function deletedModal(message) {
  //   setModal({
  //     show: true,
  //     status: message,
  //     message: "با موفقیت حذف شد",
  //     negative: "بستن",
  //   });
  // }

  // function updatedModal(message) {
  //   setModal({
  //     show: true,
  //     status: message,
  //     message: "با موفقیت ویرایش شد",
  //   });
  // }

  // function errorModal(message) {
  //   setModal({
  //     show: true,
  //     status: message,
  //     message: "خطایی رخ داد",
  //   });
  // }

  function noNotes() {
    return (
      <div className="noNotes">
        <img
          className="roozaneIllstration"
          src={RoozaneIllustration}
          alt="روزانه"
        />
        <h3 className="noNoteMessage">هنوز یادداشتی ندارید!</h3>
      </div>
    );
  }

  useEffect(() => {
    console.log(response);
    if (response) {
      handleResponse();
    }
    handleShowModal();
  }, [response]);

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
        //setStatusMessage(response?.data.message);
        break;
      }
      case (404, 500): {
        setStatusMessage(response?.data.message);
        break;
      }
    }
  }

  function updateNotes() {
    setRequestUrl(["get", "notes", null]);
  }

  const handleDeleteNote = () => {
    const object = { _id: modal.object.id };
    setRequestUrl(["delete", "delete-note?", object]);
  };

  const handleSaveNote = (note) => {
    setRequestUrl(["post", "new-note?", note]);
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
      {loading && (
        <Modal modal={{ isLoadingModal: true, title: "لطفا صبر کنید" }} />
      )}
      {/* {statusMessage && setModalContent(statusMessage)} */}
      {editNote ? <EditNote onSaveNote={handleSaveNote} /> : homeContent()}
    </div>
  );
};

export default Notes;
