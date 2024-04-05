"use client";
import { useState } from "react";
import { List, X } from "@phosphor-icons/react";

export function Header() {
  const Links: any = [
    { name: "Home", link: "/" },
    { name: "O que fazer em Foz", link: "#" },
    { name: "Contato", link: "/" },
    { name: "Sobre nós", link: "/" },
  ];

  const [isOpen, setIsOpen] = useState(true);

  const handleOpen = () => setIsOpen((prev) => !prev);
  return (
    <header className="md:flex items-center justify-between shadow-md w-full fixed top-0 left-0 py-4 md:px-10 px-7">
      <div className="font-bold text-2xl cursor-pointer flex items-center text-gray-800 ">
        Turismo Fácil
      </div>

      <div
        onClick={handleOpen}
        className="text-3xl absolute right-8 top-4 cursor-pointer md:hidden">
        {isOpen ? <List /> : <X />}
      </div>

      <ul
        className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in
       ${isOpen ? "top-20 opacity-100" : "top-[-490px]"} md:opacity-100 `}>
        {Links.map((link: any) => (
          <li key={Links.name} className="md:ml-8 text-xl md:my-0 my-7">
            <a
              href={link.link}
              className="text-gray-800 hover:text-gray-400 duration-500">
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
}
