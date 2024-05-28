"use client";
import { CaretUp, CaretDown } from "@phosphor-icons/react";
import { useState } from "react";

export default function ContainerDoubts(props: any) {
  const [isOpen, setIsOpen] = useState(true);
  const handleOpen = () => setIsOpen((prev) => !prev);
  return (
    <div>
      <div className="flex flex-col w-full h-40 py-10 ">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl lg:text-4xl">{props.question}</h3>
          <div onClick={handleOpen} className="">
            {isOpen ? <CaretUp /> : <CaretDown />}
          </div>
        </div>
        <div>
          <p
            className={`text-base lg:text-lg top-0  ease-in  transition-all duration-200  ${
              isOpen ? "top-[-100%] invisible " : "top-10 bg-white py-2 lg:py-4"
            }   
      `}>
            {props.answer}
          </p>
        </div>
      </div>
    </div>
  );
}
