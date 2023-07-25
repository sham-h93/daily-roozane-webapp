import { MdOutlineDeleteOutline } from "react-icons/md";
import "./note.css";
import { formatdate } from "../../utils";
import { useContext, useRef } from "react";
import { AppContext } from "../../AppContext";
import { useEffect } from "react";
import propTypes from "prop-types";
const Note = ({ onNoteClick, note }) => {
  Note.propTypes = {
    onNoteClick: propTypes.func,
    note: propTypes.arrayOf(propTypes.string),
  };

  const divRef = useRef("#0EBCCE");
  const { setModal } = useContext(AppContext);

  useEffect(() => {
    setColor();
  }, [divRef.current]);

  const handleNoteColor = () => {
    let noteColor;
    switch (note.color) {
      case "lavendar":
        noteColor = "#BA98ED";
        break;
      case "aqua":
        noteColor = "#A6DFD7";
        break;
      case "blue":
        noteColor = "#88B5E8";
        break;
      case "green":
        noteColor = "#9CF29C";
        break;
      case "yellow":
        noteColor = "#F1EA8B";
        break;
      case "orange":
        noteColor = "#FAC896";
        break;
      default:
        noteColor = "#0EBCCE";
        break;
    }
    return noteColor;
  };

  const setColor = () => {
    divRef.current.style.backgroundColor = handleNoteColor();
  };

  const handleDeleteNote = () => {
    setModal({
      show: true,
      isLoadingModal: false,
      message: "",
      status: "",
      title: "حذف یادداشت",
      description: "آیا مطمئنید که میخواهید این یادداشت را حذف کنید؟",
      positive: "بله",
      negative: "بی خیال",
      object: { id: note._id },
    });
  };

  return (
    <div className="note-container">
      <div className="note-color-div" ref={divRef}></div>
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
