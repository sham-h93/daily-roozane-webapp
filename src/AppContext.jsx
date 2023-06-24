import { createContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [editNote, setEditNote] = useState(false);

  return (
    <AppContext.Provider value={{ editNote, setEditNote }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
