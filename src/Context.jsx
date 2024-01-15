import {createContext, useContext, useEffect, useState} from "react";

export const AppContext = createContext();

export const AppProvider = ({children}) => {
  // const [showInput, setShowInput] = useState({});
  const [store, setStore] = useState([]);
  const reverse = [...store].reverse();

  const removeItem = (removeId) => {
    setStore(store.filter((data) => data.id !== removeId));
  };
  const completeItem = () => {
    console.log("i am complete item");
  };
  const editItem = () => {
    console.log("i am edit item");
  };

  // useEffect(() => {}, [removeItem]);

  return (
    <AppContext.Provider
      value={{setStore, store, reverse, removeItem, completeItem, editItem}}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
