"use client";
import { Check, X } from "@phosphor-icons/react";

export function Included() {
  return (
    <div>
      <div className="flex gap-8 mb-20">
        <div className="flex flex-col gap-5">
          <h3 className="font-semibold text-xl">O que está incluído?</h3>
          <span className="flex gap-4 items-center">
            <Check height={24} width={24} color="green" />
            <p>Aventura e Diversão</p>
          </span>
          <span className="flex gap-4 items-center">
            <Check height={24} width={24} color="green" />
            <p>Momentos Únicos</p>
          </span>
          <span className="flex gap-4 items-center">
            <Check height={24} width={24} color="green" />
            <p>Experiências Culturais</p>
          </span>
          <span className="flex gap-4 items-center">
            <Check height={24} width={24} color="green" />
            <p>Ecoturismo e Sustentabilidade</p>
          </span>
          <span className="flex gap-4 items-center">
            <Check height={24} width={24} color="green" />
            <p>Fotografia e Paisagens Incríveis</p>
          </span>
        </div>
        <div className="flex flex-col gap-5">
          <h3 className="font-semibold text-xl">O que não está incluído</h3>
          <span className="flex gap-4 items-center">
            <X height={24} width={24} color="red" />
            <p>Deixar Lixo na Natureza</p>
          </span>
          <span className="flex gap-4 items-center">
            <X height={24} width={24} color="red" />
            <p> Atitudes Irresponsáveis</p>
          </span>
          <span className="flex gap-4 items-center">
            <X height={20} width={24} color="red" />
            <p> Deixar de se divertir</p>
          </span>
        </div>
      </div>
    </div>
  );
}
