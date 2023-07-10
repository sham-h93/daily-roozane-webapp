import { useContext, useRef, useState } from "react";
import { AppContext } from "../../AppContext";
import styles from "./EditNote.module.css";
const EditNote = ({ onSaveNote }) => {
  const titleText = useRef(null);
  const descriptionText = useRef(null);
  const [colorValue, setColorValue] = useState("aqua");
  const { setEditNote, note, setNote, setModal } = useContext(AppContext);

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

  const handleDeleteNote = (e) => {
    e.preventDefault();
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

  const handlebuttons = () => {
    return (
      <>
        {note !== null && (
          <button
            type="submit"
            className={styles.btn}
            onClick={handleDeleteNote}
          >
            حذف
          </button>
        )}
        <button className={styles.btn} onClick={handleCloseEditNote}>
          بی خیال
        </button>
        <button className={styles.saveBtn} onClick={handleSaveClick}>
          ذخیره
        </button>
      </>
    );
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
          <fieldset className={styles.btnFieldset}>{handlebuttons()}</fieldset>
        </div>
      </form>
    </div>
  );
};

export default EditNote;
