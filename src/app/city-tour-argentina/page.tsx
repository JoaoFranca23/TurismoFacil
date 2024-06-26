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
              title="Explore a Argentina: Cultura, Comércio e Diversidade"
              paragraph="A Argentina, localizada na América do Sul, é um país que encanta visitantes com sua rica cultura, vibrante economia de comércio e a diversidade de sua população. Viajar para a Argentina é mergulhar em uma terra de paisagens deslumbrantes, gastronomia de renome mundial e tradições profundamente enraizadas."
              image="https://www.loumarturismo.com.br/_next/image?url=https%3A%2F%2Fassets.loumarturismo.com.br%2Fpasseios%2Fimagens%2F00040%2F2027-citytournaargentina.jpg&w=1920&q=75"
            />
          </div>
          <div className="flex flex-col gap-14">
            <TicketCard
              className="w-full"
              attraction1="Comércio na Argentina"
              subtitleAttraction1="Centro de Compras e Negócios"
              attraction3="Comércio na Argentina"
              subtitleAttraction3="Produtos de Qualidade e Preços Competitivos"></TicketCard>
            <Included></Included>
          </div>
        </div>
      </div>
    </div>
  );
}
