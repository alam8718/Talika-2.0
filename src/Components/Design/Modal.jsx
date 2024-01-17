import React, {useState} from "react";
import {IoMdClose} from "react-icons/io";
import {useGlobalContext} from "../../Context";
function Modal() {
  const {handleModal, editItem, singleCard} = useGlobalContext();
  const [afterEdit, setAfterEdit] = useState(singleCard.task);
  return (
    <>
      <div className=" w-full h-full flex justify-center items-center bg-black/20">
        <div className="bg-amber-400 w-[400px] h-[600px] rounded-2xl">
          <div className="relative flex flex-col items-center gap-10">
            <div className="absolute right-4 top-4  ">
              <button
                onClick={handleModal}
                className="w-[40px] h-[40px] bg-purple-400 flex justify-center items-center rounded-full hover:rotate-180 duration-300 ring-1 hover:ring-black">
                <IoMdClose size={33} />
              </button>
            </div>
            <h1 className="text-lg mt-5">{singleCard.time}</h1>
            <div>
              <p>Current task message:</p>
              <h1 className="bg-white overflow-hidden break-all w-[350px] h-[150px] p-2 rounded-xl ">
                {singleCard.task}
              </h1>
            </div>
            <div className="w-[350px] h-[150px] ">
              <label htmlFor="">Write new task:</label>
              <textarea
                cols={43}
                rows={6}
                value={afterEdit}
                onChange={(e) => {
                  setAfterEdit(e.target.value);
                }}
                className="p-2 rounded-xl bg-white outline-none"
                placeholder="Write your new message here..."
              />
            </div>
            <button
              onClick={() => {
                editItem(singleCard.id, afterEdit);
                setAfterEdit("");
              }}
              className="px-10 bg-cyan-500 py-2 rounded-xl font-semibold hover:bg-cyan-400 hover:ring-2 hover:ring-[#f7ebdf] duration-300">
              Save
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
