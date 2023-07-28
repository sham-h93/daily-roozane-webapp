import { MdOutlineDeleteOutline } from "react-icons/md";
import styles from "./Note.module.css";
import { formatdate } from "../../utils";
import { useContext, useRef } from "react";
import { AppContext } from "../../AppContext";
import { useEffect } from "react";
import propTypes from "prop-types";
const Note = ({ onNoteClick, note }) => {
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
    <div className={styles.container}>
      <div className={styles.noteColor} ref={divRef}></div>
      <a className={styles.noteTitle} onClick={onNoteClick}>
        {note.title}
      </a>
      <a className={styles.noteDescription} onClick={onNoteClick}>
        {note.description}
      </a>
      <div className={styles.buttonsContainer}>
        <div className={styles.deleteNote} onClick={handleDeleteNote}>
          <MdOutlineDeleteOutline />
        </div>
      </div>{" "}
      <a className={styles.noteDate} dir="ltr">
        {formatdate(note.createdDate)}
      </a>
    </div>
  );
};

Note.propTypes = {
  onNoteClick: propTypes.func,
  note: propTypes.arrayOf(propTypes.string),
};

export default Note;
