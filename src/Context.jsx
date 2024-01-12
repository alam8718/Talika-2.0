import {createContext, useContext, useEffect, useState} from "react";

export const AppContext = createContext();

export const AppProvider = ({children}) => {
  // const [showInput, setShowInput] = useState({});
  const [store, setStore] = useState([]);

  return (
    <AppContext.Provider value={{setStore, store}}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
