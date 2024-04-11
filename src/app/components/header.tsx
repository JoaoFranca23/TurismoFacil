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
    <header className="sticky top-0 h-[70px] shadow-xl text-2xl bg-white  ">
      <div className="flex justify-between h-full items-center mx-12 lg:mx-32">
        <div className="cursor-pointer">Turismo Facil</div>

        <nav>
          <div
            onClick={handleOpen}
            className="text-3xl cursor-pointer lg:hidden">
            {isOpen ? <X /> : <List />}
          </div>
          <ul
            className={`fixed h-0 p-0 
            flex  flex-col lg:flex-row lg:items-center lg:relative gap-12 lg:p-0 lg:top-0 
              ease-in left-0 transition-all duration-500 mx-12 lg:mx-16  ${
                isOpen ? "top-20 opacity-100" : "top-[-490px] "
              } lg:opacity-100  
      `}>
            {Links.map((link: any) => (
              <li key={Links.name} className="">
                <a
                  href={link.link}
                  className="text-gray-800 hover:text-gray-300 duration-500 ">
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
