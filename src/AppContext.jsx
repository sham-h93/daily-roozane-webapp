import { createContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [editNote, setEditNote] = useState(false);
  const [note, setNote] = useState(null);
  const [modal, setModal] = useState({
    show: false,
    isLoadingModal: false,
    message: "",
    status: "",
    title: "",
    description: "",
    positive: "",
    negative: "",
  });
  const [notes, setNotes] = useState([]);
  const [requestUrl, setRequestUrl] = useState(["get", "notes", null]);

  return (
    <AppContext.Provider
      value={{
        editNote,
        setEditNote,
        note,
        setNote,
        modal,
        setModal,
        notes,
        setNotes,
        requestUrl,
        setRequestUrl,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
