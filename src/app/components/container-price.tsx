"use client";
import { Check } from "@phosphor-icons/react";
export default function ContainerPrice(props: any) {
  return (
    <div>
      <div className="flex justify-center items-center flex-wrap w-full">
        <div className=" lg:w-[34rem]  h-[42rem] border border-black rounded-md flex flex-col mx-px p-6 m gap-6">
          <img
            className="object-cover w-full h-64 rounded-lg "
            src={props.image}></img>

          <p className="text-xl">{props.title}</p>
          <div>
            <p className=" text-3xl">{props.number}</p>
            <p>{props.per}</p>
          </div>
          <button className="bg-colorbutton hover:bg-gray-500 text-white font-bold py-2 px-4 rounded items-center">
            <a href={props.page}>Mais informações</a>
          </button>
          <p>{props.description}</p>
          <div className="flex items-center gap-1">
            <Check></Check>
            <span>{props.includes}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
