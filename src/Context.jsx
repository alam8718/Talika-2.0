import {createContext, useContext, useEffect, useState} from "react";

export const AppContext = createContext();

export const AppProvider = ({children}) => {
  // const [showInput, setShowInput] = useState({});
  const [todos, setTodo] = useState([]);
  // const [complete, setComplete] = useState(false);

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

  // useEffect(() => {}, [removeItem]);

  return (
    <AppContext.Provider
      value={{
        setTodo,
        todos,
        reverse,
        removeItem,
        completeItem,
        editItem,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
