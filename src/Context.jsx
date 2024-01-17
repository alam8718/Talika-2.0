import {createContext, useContext, useEffect, useState} from "react";

export const AppContext = createContext();

export const AppProvider = ({children}) => {
  // const [showInput, setShowInput] = useState({});
  const [todos, setTodo] = useState(
    JSON.parse(localStorage.getItem("talika")) || []
  );
  const [openModal, setOpenModal] = useState(false);
  const [singleCard, setSingleCard] = useState("");

  const reverse = [...todos].reverse();

  const removeItem = (removeId) => {
    setTodo(todos.filter((data) => data.id !== removeId));
  };
  const completeItem = (Id) => {
    const updateTodo = todos.map((todo) =>
      Id === todo.id ? {...todo, complete: !todo.complete} : todo
    );
    setTodo(updateTodo);
  };
  const editItem = (Id, newTodo) => {
    updateTodo(Id, newTodo);
  };

  const updateTodo = (Id, newTodo) => {
    // console.log("my id ", Id);
    setTodo((prev) =>
      prev.map((prevtodo) => {
        return prevtodo.id === Id ? {...prevtodo, task: newTodo} : prevtodo;
      })
    );
  };

  const handleModal = () => {
    setOpenModal(!openModal);
  };

  //storing the values
  useEffect(() => {
    localStorage.setItem("talika", JSON.stringify(todos));
  }, [todos]);

  return (
    <AppContext.Provider
      value={{
        setTodo,
        todos,
        reverse,
        removeItem,
        completeItem,
        editItem,
        handleModal,
        openModal,
        singleCard,
        setSingleCard,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
