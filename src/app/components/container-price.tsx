"use client";
import { CaretRight } from "@phosphor-icons/react";
export default function ContainerPrice(props: any) {
  return (
    <div>
      <div className="lg:w-80 w-full flex flex-col">
        <img
          className="object-cover w-full rounded-t-lg h-48 "
          src={props.image}></img>

        <div className="border-x border-b p-3 border-gray-200 outline-2 outline-gray-900 pt-6">
          <div className="h-52 flex flex-col justify-between">
            <div>
              <h3 className="text-lg pb-4">{props.title}</h3>
              <p>{props.description}</p>
            </div>

            <div className="flex items-center">
              <span className=" text-2xl">{props.number}</span>/
              <p>{props.per}</p>
            </div>
          </div>
          <a
            href={props.page}
            className="flex items-center rounded mt-4 p-2  lg:text-button bg-button text-white lg:bg-white justify-center hover:bg-button hover:text-white cursor-pointer">
            <button className=" font-bold items-center ">
              <p>Detalhes</p>
            </button>
            <CaretRight></CaretRight>
          </a>
        </div>
      </div>
    </div>
  );
}
