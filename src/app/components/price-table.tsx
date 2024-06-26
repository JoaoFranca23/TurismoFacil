import ContainerPrice from "./container-price";

export default function PriceTable() {
  return (
    <div className="flex flex-col mx-10 lg:mx-28 gap-9 mb-6 ">
      <div>
        <h2 className="text-3xl lg:text-5xl">
          Passeios em <span className="font-medium">Foz do Iguaçu</span>
        </h2>
      </div>
      <div className="flex flex-wrap gap-4 lg:gap-2">
        <ContainerPrice
          title="Circuito Cataratas Brasil"
          number="R$200"
          image="https://d2j6dbq0eux0bg.cloudfront.net/images/36944485/2829927040.jpg"
          description="Descubra a grandiosidade das Cataratas do Iguaçu no lado brasileiro com o Circuito Cataratas Brasil."
          includes="Gestão"
          per="por Pessoa"
          page="/circuito-cataratas"></ContainerPrice>
        <ContainerPrice
          title="Parque das Aves"
          number="R$80"
          image="https://www.loumarturismo.com.br/_next/image?url=https%3A%2F%2Fassets.loumarturismo.com.br%2Fpasseios%2Fimagens%2F00014%2F3432-parquedasavesemfoz.jpg&w=1920&q=75"
          description="Explore a beleza exótica e a biodiversidade do Parque das Aves em Foz do Iguaçu com a Loumar Turismo."
          includes="Roterio"
          per="por Pessoa"
          page="/parque-das-aves"></ContainerPrice>
        <ContainerPrice
          title="Personal Shopper no Paraguai"
          number="R$49"
          image="https://www.loumarturismo.com.br/_next/image?url=https%3A%2F%2Fassets.loumarturismo.com.br%2F%2Fpasseios%2Fimagens%2F00103%2F4030-comprenoparaguai.jpg&w=1920&q=75"
          description="Desfrute de uma experiência de compras personalizada em Ciudad del Este com o passeio Compras no Paraguai."
          includes="Guia"
          per="por Pessoa"
          page="compras-no-paraguai"></ContainerPrice>
        <ContainerPrice
          title="City Tour Argentina"
          number="R$130"
          image="https://www.loumarturismo.com.br/_next/image?url=https%3A%2F%2Fassets.loumarturismo.com.br%2F%2Fpasseios%2Fimagens%2F00040%2F2027-citytournaargentina.jpg&w=1920&q=75"
          description="Descubra a rica cultura e história de Puerto Iguazú com o City Tour Argentina.Este passeio inclui visitas a diversos pontos de interesse na cidade."
          includes="Guia"
          per="por Pessoa"
          page="city-tour-argentina"></ContainerPrice>
        <ContainerPrice
          title="Circuito Marco das 3 Fronteiras "
          number="R$120"
          image="https://www.loumarturismo.com.br/_next/image?url=https%3A%2F%2Fassets.loumarturismo.com.br%2F%2Fpasseios%2Fimagens%2F00116%2F4055-pordosolemfoz.png&w=1920&q=75"
          description="Descubra as atrações icônicas de Foz do Iguaçu com o Circuito Marco das 3 Fronteiras, realizado a bordo de um ônibus panorâmico."
          includes="Guia"
          per="por Pessoa"
          page="circuito-marco-das-3-fronteiras"></ContainerPrice>
      </div>
    </div>
  );
}
