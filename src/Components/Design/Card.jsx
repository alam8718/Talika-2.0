import React from "react";
import {useGlobalContext} from "../../Context";

import {IoCheckmarkDoneCircleOutline} from "react-icons/io5";
import {IoCloseCircleOutline} from "react-icons/io5";
import {AiOutlineDelete, AiOutlineEdit} from "react-icons/ai";
function Card({data}) {
  const {task, time} = data
  return (
    <>
      <div className="w-full ">
        <div className=" sm:mx-10">
          {/* card here */}
          <div className="h-[100px] bg-purple-500 my-3 px-4 flex flex-col items-center gap-2 rounded-xl">
            <div className="w-[100px text-center w-full">
              <p>{time}</p>
            </div>
            <div className="w-full h-full justify-between flex  ">
              <a className="w-full h-[50px] line-clamp-2   ">{task}</a>
              {/* icons  */}
              <div className="w-[110px] ">
                <div className="flex ">
                  <IoCheckmarkDoneCircleOutline size={33} />
                  <AiOutlineEdit size={33} />
                  <IoCloseCircleOutline size={33} />
                  <AiOutlineDelete size={33} />
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
