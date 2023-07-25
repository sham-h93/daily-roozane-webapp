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
  const [isLoading, setIsLoading] = useState(false);
  const [requestConfig, setRequestConfig] = useState({
    method: "GET",
    url: "api/notes",
  });
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
        requestConfig,
        setRequestConfig,
        isLoading,
        setIsLoading,
        loggedIn,
        setLoggedIn,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
