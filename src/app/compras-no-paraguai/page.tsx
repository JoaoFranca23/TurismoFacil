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
              title="Explore o Paraguai: Cultura, Comércio e Diversidade
"
              paragraph="O Paraguai, localizado no coração da América do Sul, é um país que surpreende com sua rica cultura, dinâmica economia de comércio e a diversidade de sua população. Fazer uma viagem ao Paraguai oferece uma mistura única de tradições, modernidade e oportunidades de compras que atraem turistas de todo o mundo."
              image="https://www.loumarturismo.com.br/_next/image?url=https%3A%2F%2Fassets.loumarturismo.com.br%2F%2Fpasseios%2Fimagens%2F00103%2F4030-comprenoparaguai.jpg&w=1920&q=75"
            />
          </div>
          <div className="flex flex-col gap-14">
            <TicketCard
              className="w-full"
              attraction1="Comércio no Paraguai"
              subtitleAttraction1="Um Centro de Compras"
              attraction2="Cultura e Tradições"
              subtitleAttraction2="Um Povo Acolhedor"
              attraction3="Personal Shopper"
              subtitleAttraction3="Produtos e Preços Atraentes"></TicketCard>
            <Included></Included>
          </div>
        </div>
      </div>
    </div>
  );
}
