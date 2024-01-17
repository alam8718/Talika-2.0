import React, {useState} from "react";
import {useGlobalContext} from "../../Context";

import {FaCheckCircle, FaRegSave} from "react-icons/fa";
import {AiFillDelete, AiOutlineEdit} from "react-icons/ai";

function Card({data}) {
  // data getting from contextApi
  const {removeItem, completeItem, handleModal, setSingleCard} =
    useGlobalContext();

  const [afterEdit, setAfterEdit] = useState(data.task);
  // const [isEditAble, setIsEditAble] = useState(false);
  const handleEditValue = (e) => {
    setAfterEdit(e.target.value);
  };

  return (
    <>
      <div className=" md:w-[400px] px-3 ">
        <div className=" ">
          {/* card here */}
          <div className="relative h-[150px] bg-[#F5BB00] my-3 px-4 py-1 flex flex-col items-center gap-2 rounded-xl">
            <div className="w-[100px text-center w-full">
              <p>{data.time}</p>
            </div>
            <div className="w-full  justify-between flex  ">
              <h1
                className={` overflow-hidden line-clamp-2 ${
                  data.complete ? "line-through" : ""
                }`}>
                {data.task}
              </h1>
              {/* icons  */}
              <div className="w-[110px]  ">
                <div className="flex gap-4 h-full items-center">
                  <div
                    className="px-1 hover:scale-110 duration-300 hover: hover:text-green-600"
                    onClick={() => completeItem(data.id)}>
                    <FaCheckCircle size={25} />
                  </div>
                  <div
                    className="px-1 hover:scale-110 duration-300 hover:text-red-600"
                    onClick={() => removeItem(data.id)}>
                    <AiFillDelete size={27} />
                  </div>
                </div>
              </div>
            </div>
            {/* edit button  */}
            <div
              className="absolute bottom-3 cursor-pointer  bg-purple-400 px-3 py-1 rounded-xl hover:ring-2 hover:ring-purple-500 duration-300 font-semibold"
              onClick={() => {
                handleModal();
                setSingleCard(data);
              }}>
              Edit
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
