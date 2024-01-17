import React from "react";
import Home from "./Components/MainPage/Home";
import Modal from "./Components/Design/Modal";
import {useGlobalContext} from "./Context";

function App() {
  const {openModal} = useGlobalContext();
  return (
    <>
      <div className="absolute w-full h-screen ">
        <Home />
      </div>
      <div
        className={`h-screen z-[10000] absolute w-full ${
          openModal ? "" : "hidden"
        }`}>
        <Modal />
      </div>
    </>
  );
}

export default App;
