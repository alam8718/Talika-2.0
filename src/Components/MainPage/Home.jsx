import React from "react";
import TitleBar from "./TitleBar";
import Background from "../Design/Background";
import Input from "../Input/Input";

function Home() {
  return (
    <>
      <div className="relative w-full h-screen">
        <div className="flex flex-col  w-full h-full container mx-auto px-3 ">
          <Background />
        </div>
      </div>
    </>
  );
}

export default Home;
