import { MdOutlineDeleteOutline } from "react-icons/md";
import "./note.css";
const Note = ({ note }) => {
  console.log(note);
  return (
    <div className="note-container">
      <div className="note-color-div"></div>
      <a className="note-title">{note.title}</a>
      <a className="note-decription">{note.description}</a>
      <a className="note-date">1402/03/30</a>
      <div className="note-btns-div">
        <div className="note-delete">
          <MdOutlineDeleteOutline />
        </div>
      </div>
    </div>
  );
};

export default Note;
