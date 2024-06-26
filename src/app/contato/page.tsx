"use client";
import { GithubLogo, InstagramLogo, LinkedinLogo } from "@phosphor-icons/react";
import { BackBtn } from "../components/back-button";

export default function Contact() {
  return (
    <div className="lg:mt-10">
      <BackBtn></BackBtn>
      <div className="h-full w-full py-1 my-5 bg-banner bg-[url('https://www.loumarturismo.com.br/bg-tempo-mercado.svg')] bg-no-repeat bg-right">
        <div className="flex lg:flex-row flex-col-reverse justify-center lg:gap-10 gap-0 mx-10 lg:mx-28 mt-20">
          <div className="flex flex-col lg:mt-0 mt-10 gap-2">
            <div className="lg:w-[32rem] lg:h-52  bg-secondary p-10 lg:rounded-l-3xl lg:rounded-tr-3xl  ">
              <p className="text-xl text-white">
                Muito Prazer, eu sou o
                <span className="text-2xl	font-semibold text-white">
                  {" "}
                  João,{" "}
                </span>
                elaborei este projeto para recordar de uma das viagens mais
                memoráveis e incríveis, um lugar sensacional e lindo que tenho
                certeza de que revisitarei em outra ocasião.
              </p>
            </div>
            <div className="flex justify-end gap-3">
              <a
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border-2 border-secondary p-1  ">
                <GithubLogo size={32} className="color-secondary" />
              </a>
              <a
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border-2 border-secondary p-1  ">
                <InstagramLogo size={32} color="#90b4ce" />
              </a>
              <a
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border-2 border-secondary p-1   ">
                <LinkedinLogo size={32} color="#90b4ce" />
              </a>
            </div>
          </div>
          <img
            className=" lg:w-[30rem] h-full rounded-lg"
            src="https://joaofranca23.github.io/Portfolio/assest/fotoperfil3.jpg"
            alt="foto de perfil"
          />
        </div>
        <div className="flex flex-col gap-5 mt-10 items-center">
          <h2 className=" text-4xl text-secondary	font-semibold">Tecnologias</h2>

          <ul className="flex lg:flex-row flex-col gap-6 pb-6 ">
            <li className="text-2xl p-2 text-secondary font-semibold border-2 border-transparent hover:border-2 hover:rounded-3xl hover:border-secondary cursor-pointer">
              React Js
            </li>
            <li className="text-2xl p-2 text-secondary font-semibold border-2 border-transparent  hover:border-2 hover:rounded-3xl hover:border-secondary cursor-pointer">
              Tailwind
            </li>
            <li className="text-2xl p-2 text-secondary font-semibold border-2 border-transparent  hover:border-2 hover:rounded-3xl hover:border-secondary cursor-pointer">
              Typescript
            </li>
            <li className="text-2xl p-2 text-secondary font-semibold border-2 border-transparent  hover:border-2 hover:rounded-3xl hover:border-secondary cursor-pointer">
              Node
            </li>
            <li className="text-2xl p-2 text-secondary font-semibold border-2 border-transparent  hover:border-2 hover:rounded-3xl hover:border-secondary cursor-pointer">
              Javascript
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
