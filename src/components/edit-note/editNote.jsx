import { useContext } from "react";
import { AppContext } from "../../AppContext";
import "./editNote.css";
const EditNote = ({ note }) => {
  const { setEditNote } = useContext(AppContext);

  const handleCancelClick = () => {
    setEditNote(false);
  };
  return (
    <div className="edit-note-container">
      <form className="edit-note-form">
        <input
          type="text"
          placeholder="عنوان یادداشت"
          className="edit-note-title"
        />
        <textarea
          className="edit-note-description"
          rows="10"
          cols="50"
          placeholder="یادداشت"
        ></textarea>

        <fieldset className="edit-note-radio-fieldset">
          <input type="radio" name="edit-note-color" id="lavendar" />
          <input type="radio" name="edit-note-color" id="blue" />
          <input type="radio" name="edit-note-color" id="aqua" />
          <input type="radio" name="edit-note-color" id="green" />
          <input type="radio" name="edit-note-color" id="yellow" />
          <input type="radio" name="edit-note-color" id="orange" />
        </fieldset>
        <fieldset className="edit-note-button-fieldset">
          <input type="button" className="edit-note-delete" value="حذف" />
          <input
            type="button"
            className="edit-note-cancel"
            value="بی خیال"
            onClick={handleCancelClick}
          />
          <input type="submit" className="edit-note-save" value="ذخیره" />
        </fieldset>
      </form>
    </div>
  );
};

export default EditNote;
