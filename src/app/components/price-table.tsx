import ContainerPrice from "./container-price";

export default function PriceTable() {
  return (
    <div className="flex flex-col items-center mx-10 lg:mx-28 gap-6">
      <h2 className="text-3xl lg:text-5xl">Tabela de preços</h2>
      <div className="flex flex-wrap gap-3 lg:gap-0">
        <ContainerPrice
          title="Pacote Básico de City Tour"
          number="R$100"
          image="https://images.unsplash.com/photo-1609137144813-7d9921338f24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyNjI5NjF8MHwxfHNlYXJjaHw4fHxUb3VyaXNtfGVufDB8fHx8MTcxMDg5MDc3NXww&ixlib=rb-4.0.3&q=80&w=1080"
          description="Descubra os Principais pontos turísticos."
          includes="Gestão"
          per="por dia"
          page="#"></ContainerPrice>
        <ContainerPrice
          title="Passeio Gastronômico Personalizado"
          number="R$250"
          image="https://images.unsplash.com/photo-1536698658763-878a02695d1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyNjI5NjF8MHwxfHNlYXJjaHwxMXx8VG91cmlzbXxlbnwwfHx8fDE3MTA4OTA3NzV8MA&ixlib=rb-4.0.3&q=80&w=1080"
          description="Experimente a culinária local autêntica."
          includes="Roterio"
          per="por grupo"
          page="#"></ContainerPrice>
        <ContainerPrice
          title="Pacote VIP de Aventura"
          number="R$500"
          image="https://images.unsplash.com/photo-1619120238346-978e07731e77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyNjI5NjF8MHwxfHNlYXJjaHwxMHx8VG91cmlzbXxlbnwwfHx8fDE3MTA4OTA3NzV8MA&ixlib=rb-4.0.3&q=80&w=1080"
          description="Viva experiências emocionantes e exclusivas."
          includes="Gestão"
          per="por excursão"
          page="#"></ContainerPrice>
      </div>
    </div>
  );
}
