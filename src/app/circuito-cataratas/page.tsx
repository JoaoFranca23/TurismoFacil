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
              title="Descubra a Magia das Cataratas do Iguaçu"
              paragraph="As Cataratas do Iguaçu são um dos destinos turísticos mais
              impressionantes e visitados do Brasil. Localizadas na fronteira
              entre o Brasil e a Argentina, no Parque Nacional do Iguaçu, essas
              quedas d' agua espetaculares foram declaradas Patrimônio Natural da
              Humanidade pela UNESCO em 1986. Com sua beleza cênica incomparável
              e biodiversidade rica, as Cataratas do Iguaçu são uma verdadeira
              maravilha da natureza."
              image="https://www.loumarturismo.com.br/_next/image?url=https%3A%2F%2Fassets.loumarturismo.com.br%2F%2Fpasseios%2Fimagens%2F00099%2F3711-cataratasdoiguassupasseio.jpg&w=1920&q=75"
            />
          </div>
          <div className="flex flex-col gap-14">
            <TicketCard
              className="w-full"
              attraction1="Passeios pelas Trilhas"
              subtitleAttraction1="Trilha das Cataratas"
              attraction2="Passeios de Barco"
              subtitleAttraction2="Macuco Safari"
              attraction3="Passeios de Helicóptero"
              subtitleAttraction3="Helisul"
              attraction4="Garganta do Diabo"
              subtitleAttraction4="Mirantes"></TicketCard>
            <Included></Included>
          </div>
        </div>
      </div>
    </div>
  );
}
