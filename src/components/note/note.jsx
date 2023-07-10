import { MdOutlineDeleteOutline } from "react-icons/md";
import "./note.css";
import { formatdate } from "../../utils";
import { useContext } from "react";
import { AppContext } from "../../AppContext";
const Note = ({ onNoteClick, note }) => {
  const { setModal } = useContext(AppContext);

  const handleDeleteNote = () => {
    setModal({
      show: true,
      isLoadingModal: false,
      message: "",
      status: "",
      title: "Delete Note",
      description: "Do you really want to delete this note?",
      positive: "Yes",
      negative: "No",
      object: { id: note._id },
    });
  };

  return (
    <div className="note-container">
      <div className="note-color-div"></div>
      <a className="note-title" onClick={onNoteClick}>
        {note.title}
      </a>
      <a className="note-decription" onClick={onNoteClick}>
        {note.description}
      </a>
      <a className="note-date" dir="ltr">
        {formatdate(note.createdDate)}
      </a>
      <div className="note-btns-div">
        <div className="note-delete" onClick={handleDeleteNote}>
          <MdOutlineDeleteOutline />
        </div>
      </div>
    </div>
  );
};

export default Note;
