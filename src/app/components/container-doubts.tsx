"use client";
import { CaretUp, CaretDown } from "@phosphor-icons/react";
import { useState } from "react";

export default function ContainerDoubts(props: any) {
  const [isOpen, setIsOpen] = useState(true);
  const handleOpen = () => setIsOpen((prev) => !prev);
  return (
    <div className="flex flex-col">
      <div className=" w-full h-40 ">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl lg:text-4xl ">{props.question}</h3>
          <div onClick={handleOpen} className="">
            {isOpen ? <CaretDown /> : <CaretUp />}
          </div>
        </div>
        <div>
          <p
            className={`text-base lg:text-lg   ease-in  transition-all duration-100   ${
              isOpen ? " " : "invisible"
            }   
      `}>
            {props.answer}
          </p>
        </div>
      </div>
    </div>
  );
}
