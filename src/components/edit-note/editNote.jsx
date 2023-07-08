import { useContext, useRef, useState } from "react";
import { AppContext } from "../../AppContext";
import styles from "./EditNote.module.css";
const EditNote = ({ onSaveNote }) => {
  const titleText = useRef(null);
  const descriptionText = useRef(null);
  const [colorValue, setColorValue] = useState("aqua");
  const { setEditNote, note, setNote } = useContext(AppContext);

  const handleoteColor = (e) => {
    setColorValue(e.target.value);
  };

  const handleCloseEditNote = () => {
    setNote(null);
    setEditNote(false);
  };
  const handleSaveClick = (e) => {
    e.preventDefault();
    let newNote = {
      _id: note ? note?._id : null,
      title: titleText.current.value,
      description: descriptionText.current.value,
      color: colorValue,
    };
    onSaveNote(newNote);
  };
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <div className={styles.inputContainer}>
          <label className={styles.label} htmlFor="title">
            عنوان
          </label>
          <input
            className={styles.input}
            id="title"
            type="text"
            rows="1"
            defaultValue={note?.title || ""}
            ref={titleText}
          />
        </div>
        <div className={styles.inputContainer}>
          <label className={styles.label} htmlFor="description">
            متن یادداشت
          </label>
          <textarea
            id="description"
            className={styles.input}
            rows="10"
            defaultValue={note?.description || ""}
            ref={descriptionText}
          ></textarea>
        </div>
        <div className={styles.fieldsetsContainer}>
          <fieldset className={styles.radiosFieldset}>
            <input
              type="radio"
              name="edit-note-color"
              value={"lavendar"}
              onChange={handleoteColor}
              id={styles.lavendar}
            />
            <input
              type="radio"
              name="edit-note-color"
              value={"blue"}
              onChange={handleoteColor}
              id={styles.blue}
            />
            <input
              type="radio"
              name="edit-note-color"
              value={"aqua"}
              onChange={handleoteColor}
              id={styles.aqua}
            />
            <input
              type="radio"
              name="edit-note-color"
              value={"green"}
              onChange={handleoteColor}
              id={styles.green}
            />
            <input
              type="radio"
              name="edit-note-color"
              value={"yellow"}
              onChange={handleoteColor}
              id={styles.yellow}
            />
            <input
              type="radio"
              name="edit-note-color"
              value={"orange"}
              onChange={handleoteColor}
              id={styles.orange}
            />
          </fieldset>
          <fieldset className={styles.btnFieldset}>
            <button
              className={styles.btn}
              type="submit"
              onClick={handleSaveClick}
            >
              حذف
            </button>
            <button className={styles.btn} onClick={handleCloseEditNote}>
              بی خیال
            </button>
            <button className={styles.saveBtn} onClick={handleSaveClick}>
              ذخیره
            </button>
          </fieldset>
        </div>
      </form>
    </div>
  );
};

export default EditNote;
