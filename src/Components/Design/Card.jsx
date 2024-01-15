import React from "react";
import {useGlobalContext} from "../../Context";

import {IoCheckmarkDoneCircleOutline} from "react-icons/io5";
import {FaCheckCircle} from "react-icons/fa";
import {AiFillDelete, AiOutlineEdit} from "react-icons/ai";
function Card({data}) {
  // destructureing the data
  const {task, time, id} = data;

  // data getting from contextApi
  const {removeItem, editItem, completeItem} = useGlobalContext();

  return (
    <>
      <div className="w-full  ">
        <div className=" sm:mx-10">
          {/* card here */}
          <div className="h-[100px] bg-[#F5BB00] my-3 px-4 py-1 flex flex-col items-center gap-2 rounded-xl">
            <div className="w-[100px text-center w-full">
              <p>{time}</p>
            </div>
            <div className="w-full h-full justify-between flex  ">
              <a className="w-full h-[50px] line-clamp-2   ">{task}</a>
              {/* icons  */}
              <div className="w-[110px] ">
                <div className="flex ">
                  <div
                    className="px-1 hover:scale-110 duration-300 hover: hover:text-green-600"
                    onClick={() => completeItem()}>
                    <FaCheckCircle size={25} />
                  </div>
                  <div
                    className="px-1 hover:scale-110 duration-300 hover:text-fuchsia-600"
                    onClick={() => editItem()}>
                    <AiOutlineEdit size={27} />
                  </div>
                  <div
                    className="px-1 hover:scale-110 duration-300 hover:text-red-600"
                    onClick={() => removeItem(id)}
                    >
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
