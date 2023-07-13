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
  const [requestUrl, setRequestUrl] = useState(["get", "api/notes", null]);
  const [loggedIn, setLoggedIn] = useState(false);

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
        loggedIn,
        setLoggedIn,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
