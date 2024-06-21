import { BackBtn } from "../components/back-button";

import { Card } from "../components/card";

export default function WhatToDo() {
  return (
    <div className=" mt-10 ">
      <BackBtn></BackBtn>
      <div className="flex mt-10 ">
        <div className="flex lg:justify-center lg:items-center  lg:flex-row flex-col-reverse p-7 justify-end w-full h-auto lg:h-[580px] bg-banner bg-[url('https://www.loumarturismo.com.br/bg-tempo-mercado.svg')] bg-no-repeat bg-right">
          <div className="flex lg:mt-40 lg:overflow-visible overflow-y-hidden  ">
            <div className="flex flex-row lg:flex-col   ">
              <Card
                title="Cataratas do Iguaçu"
                image="https://www.loumarturismo.com.br/_next/image?url=%2Fcataratas-do-iguacu-940X750.jpeg&w=256&q=75"></Card>
              <Card
                title="Parque das Aves"
                image="https://www.loumarturismo.com.br/_next/image?url=%2FpaarqueDasAves625x808.png&w=256&q=75"></Card>
              <Card
                title="Macuco safari"
                image="https://www.loumarturismo.com.br/_next/image?url=%2Fmacuco-750x940.png&w=256&q=75"></Card>
            </div>
            <div className="lg:mt-32 flex lg:flex-col">
              <Card
                title="Circuito Cataratas"
                image="https://www.loumarturismo.com.br/_next/image?url=%2Fcircuito-cataratas-8.jpeg&w=256&q=75"></Card>
              <Card
                title="Expedição Aguaray"
                image="https://www.loumarturismo.com.br/_next/image?url=%2Faguaray-940X750.jpeg&w=256&q=75"></Card>
              <Card
                title="Compras paraguai"
                image="https://www.loumarturismo.com.br/_next/image?url=%2Fcompras-no-paraguai.jpeg&w=256&q=75"></Card>
            </div>
          </div>
          <div className="flex flex-col gap-3 mx-10 lg:mx-28 lg:mb-0 mb-10">
            <h2 className=" text-stronke text-2xl font-bold">
              O que fazer em Foz do Iguaçu?
            </h2>
            <p className="font-extralight">
              Foz do Iguaçu oferece uma ampla variedade de atividades para todos
              os tipos de viajantes. As Cataratas do Iguaçu são uma das
              principais atrações, com suas majestosas quedas d'água e trilhas
              de observação. Novos parques podem ser visitados com toda a sua
              família com o Movie Cars e o Blue Park. Você também pode
              economizar muito fazendo compras do outro lado da fronteira como
              em Ciudad del Este, no Paraguai, e ter uma experiência
              gastronômica incrível em Puerto Iguazú, na Argentina.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
