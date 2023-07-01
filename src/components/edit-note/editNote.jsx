import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../AppContext";
import "./editNote.css";
import useAxios from "../../useAxios";
const EditNote = () => {
  const [noteObj, setNoteObj] = useState({
    title: "عنوان یادداشت",
    description: "متن یادداشت",
  });
  const { setEditNote, setNoteId, noteId } = useContext(AppContext);
  const [url, setUrl] = useState(["get", `note?_id=${noteId}`]);
  console.log(url);
  const [response] = useAxios(url[0], url[1], url[2]);

  useEffect(() => {
    if (url[0] === "post") {
      closeEditNoteComponent();
    }
    setNoteObj(response);
  }, [response, url]);

  const handleTitleInputChange = (e) => {
    setNoteObj({ ...noteObj, title: e.target.value });
  };
  const handleDescriptionInputChange = (e) => {
    setNoteObj({ ...noteObj, description: e.target.value });
  };
  const closeEditNoteComponent = () => {
    setNoteId(null);
    setEditNote(false);
  };
  const handleSaveClick = () => {
    setUrl(["post", "new-note?", noteObj]);
  };
  return (
    <div className="edit-note-container">
      <form className="edit-note-form">
        <input
          type="text"
          placeholder="عنوان یادداشت"
          className="edit-note-title"
          value={noteObj?.title}
          onChange={(e) => handleTitleInputChange(e)}
        />
        <textarea
          className="edit-note-description"
          rows="10"
          cols="50"
          placeholder="یادداشت"
          value={noteObj?.description}
          onChange={(e) => handleDescriptionInputChange(e)}
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
            onClick={closeEditNoteComponent}
          />
          <input
            type="button"
            className="edit-note-save"
            value="ذخیره"
            onClick={handleSaveClick}
          />
        </fieldset>
      </form>
    </div>
  );
};

export default EditNote;
