import { BackBtn } from "../components/back-button";
import { ContainerPages } from "../components/container-pages";
import { Included } from "../components/included";
import { TicketCard } from "../components/ticket-card";

export default function page() {
  return (
    <div>
      <div className="mt-10">
        <BackBtn></BackBtn>
        <div className="lg:flex gap-10 mt-5 mx-10 lg:mx-28">
          <div className=" ">
            <ContainerPages
              title="Parque das Aves: Um Refúgio de Biodiversidade em Foz do Iguaçu
"
              paragraph="Localizado ao lado do Parque Nacional do Iguaçu, em Foz do Iguaçu, 
              o Parque das Aves é uma das principais atrações turísticas da região e um destino 
              imperdível para quem visita as Cataratas do Iguaçu. Este refúgio de biodiversidade 
              oferece uma experiência única, permitindo que os visitantes se aproximem de algumas 
              das mais belas e exóticas aves do mundo."
              image="https://www.loumarturismo.com.br/_next/image?url=https%3A%2F%2Fassets.loumarturismo.com.br%2F%2Fpasseios%2Fimagens%2F00014%2F3432-parquedasavesemfoz.jpg&w=1920&q=75"
            />
          </div>
          <div className="flex flex-col gap-14">
            <TicketCard
              className="w-full"
              attraction1="Atividades interativas"
              subtitleAttraction1="Alimentação das Aves"
              attraction2="Diversidade de Espécies"
              subtitleAttraction2="Borboletário e Répteis"
              attraction3="infraestrutura completa"
              subtitleAttraction3=" lanchonetes, lojas de souvenirs 
              e áreas de descanso"></TicketCard>
            <Included></Included>
          </div>
        </div>
      </div>
    </div>
  );
}
