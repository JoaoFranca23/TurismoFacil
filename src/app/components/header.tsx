"use client";
import { useState } from "react";
import { List, X } from "@phosphor-icons/react";

export function Header() {
  const Links: any = [
    { name: "Home", link: "/" },
    { name: "O que fazer em Foz", link: "#" },
    { name: "Contato", link: "/" },
  ];

  const [isOpen, setIsOpen] = useState(true);

  const handleOpen = () => setIsOpen((prev) => !prev);
  return (
    <header className="sticky top-0 h-[80px] shadow-xl text-2xl bg-white z-20 ">
      <div className="flex justify-between h-full items-center mx-10 lg:mx-28">
        <a href="#" className="text-color1 hover:text-gray-300 duration-500">
          Turismo Facil
        </a>

        <nav>
          <div
            onClick={handleOpen}
            className="text-3xl cursor-pointer lg:hidden">
            {isOpen ? <List /> : <X />}
          </div>
          <ul
            className={`fixed p-0 h-auto w-full flex flex-col lg:flex-row 
            lg:items-center lg:relative gap-12 lg:p-0 lg:top-0 
              ease-in left-0 transition-all duration-500 lg:mx-16  ${
                isOpen ? "top-[-490px] " : "top-20 bg-white p-10"
              }   
      `}>
            {Links.map((link: any) => (
              <li key={Links.name} className="">
                <a
                  href={link.link}
                  className="text-color1 hover:text-gray-300 duration-500 ">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
