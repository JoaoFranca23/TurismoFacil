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
              title="Circuito Marco das 3 Fronteiras + Yup Star"
              paragraph="Descubra as atrações icônicas de Foz do Iguaçu com o Circuito Marco das 3 Fronteiras + Roda Gigante, Este tour, realizado a bordo de um ônibus panorâmico com acompanhamento de guia de turismo, inclui visitas à roda gigante Yup Star e ao Marco das 3 Fronteiras. Os ingressos para ambas as atrações devem ser adquiridos separadamente."
              image="https://www.h2foz.com.br/wp-content/uploads/2020/10/bfb1d31a-1578594718-capa.jpg"
            />
          </div>
          <div className="flex flex-col gap-14">
            <TicketCard
              className="w-full"
              attraction1="Yup Star"
              subtitleAttraction1="Espetacular Roda Gigante"
              attraction2="Ônibus Panorâmico"
              subtitleAttraction2="Desfrute de vistas incríveis"
              attraction3="3 Fronteiras"
              subtitleAttraction3="Aprecie a riqueza histórica e natural do local."></TicketCard>
            <Included></Included>
          </div>
        </div>
      </div>
    </div>
  );
}
