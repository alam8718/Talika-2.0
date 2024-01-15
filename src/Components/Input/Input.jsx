import React, {useState} from "react";
import {useGlobalContext} from "../../Context";
import Card from "../Design/Card";
import {useForm} from "react-hook-form";
function Input() {
  const {register, reset, handleSubmit} = useForm();
  const {setStore, store, reverse} = useGlobalContext();

  return (
    <>
      <div className="mt-10">
        <form
          onSubmit={handleSubmit((data) => {
            const t = new Date();
            const Time = t.toLocaleString();

            const combine = [
              ...store,
              {id: store.length + 1, ...data, time: Time},
            ];
            setStore(combine);
            reset();
          })}
          className="flex flex-col items-center gap-6  w-[400px] h-[120px] ">
          {/* {console.log(showInput)} */}
          <input
            type="text"
            {...register("task")}
            required
            placeholder="Add your Task"
            id="task"
            name="task"
            className="w-[400px] p-4 rounded-3xl bg-[#f7ebdf] shadow-md shadow-purple-400 outline-none ring-2 ring-purple-500 placeholder:text-purple-500 text-black font-medium text-lg "
          />
          <button
            type="submit"
            className="uppercase bg-purple-400 px-4 py-2 rounded-3xl text-sm ">
            add new task
          </button>
        </form>
      </div>
      {console.log(store)}
      <div
        className={`w-full my-5 ${store.length > 4 && "overflow-y-scroll"} `}>
        {store.length > 0 &&
          reverse.map((data) => <Card key={data.id} data={data} />)}
      </div>
    </>
  );
}

export default Input;
