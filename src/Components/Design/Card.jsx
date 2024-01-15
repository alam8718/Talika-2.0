import React, {useState} from "react";
import {useGlobalContext} from "../../Context";

import {IoCheckmarkDoneCircleOutline} from "react-icons/io5";
import {FaCheckCircle} from "react-icons/fa";
import {AiFillDelete, AiOutlineEdit} from "react-icons/ai";
function Card({data}) {
  // data getting from contextApi
  const {todos, removeItem, editItem, completeItem} = useGlobalContext();

  const [afterEdit, setAfterEdit] = useState(data.task);
  const [isEditAble, setIsEditAble] = useState(false);
  const handleEditValue = (e) => {
    setAfterEdit(e.target.value);
  };

  return (
    <>
      <div className="w-full  ">
        <div className=" sm:mx-10">
          {/* card here */}
          <div className="h-[100px] bg-[#F5BB00] my-3 px-4 py-1 flex flex-col items-center gap-2 rounded-xl">
            <div className="w-[100px text-center w-full">
              <p>{data.time}</p>
            </div>
            <div className="w-full  justify-between flex  ">
              {isEditAble ? (
                <input
                  type="text"
                  className={`bg-transparent w-full  ${
                    data.complete ? "line-through" : ""
                  } text-lg ${
                    isEditAble
                      ? "ring-2 ring-purple-500 rounded-lg px-2 outline-none"
                      : ""
                  }  `}
                  value={afterEdit}
                  onChange={handleEditValue}
                />
              ) : (
                <p
                  className={`px-2 bg-transparent w-full  ${
                    data.complete ? "line-through" : ""
                  } text-lg`}>
                  {data.task}
                </p>
              )}
              {/* icons  */}
              <div className="w-[110px]  ">
                <div className="flex h-full items-center">
                  <div
                    className="px-1 hover:scale-110 duration-300 hover: hover:text-green-600"
                    onClick={() => completeItem(data.id)}>
                    <FaCheckCircle size={25} />
                  </div>
                  <div
                    className="px-1 hover:scale-110 duration-300 hover:text-fuchsia-600"
                    onClick={() => {
                      editItem(data.id, afterEdit);
                      setIsEditAble(!isEditAble);
                      // setAfterEdit("")
                    }}>
                    <AiOutlineEdit size={27} />
                  </div>
                  <div
                    className="px-1 hover:scale-110 duration-300 hover:text-red-600"
                    onClick={() => removeItem(data.id)}>
                    <AiFillDelete size={27} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
