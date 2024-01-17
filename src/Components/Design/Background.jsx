import React from "react";
import Input from "../Input/Input";
import TitleBar from "../MainPage/TitleBar";
import Card from "./Card";

function Background() {
  return (
    <div className="">
      <div className="w-full h-screen relative container mx-auto p-1 sm:p-6">
        <div className="h-full flex  justify-center border-2  border-dashed border-black">
          <div className="mt-10 w-full flex flex-col items-center">
            <TitleBar />
            <Input />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Background;
