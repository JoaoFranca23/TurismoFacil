import ContainerDoubts from "./container-doubts";

export default function Tourismdoubts() {
  return (
    <div className="flex flex-col gap-9 lg:my-28  mx-10 lg:mx-28">
      <h2 className="text-3xl lg:text-5xl">Dúvidas sobre nossos serviços? </h2>
      <div className="flex flex-col gap-11 lg:gap-0">
        <ContainerDoubts
          question="Quais são os principais destinos turísticos em Foz?"
          answer="Foz do Iguaçu possui diversos destinos turísticos populares, incluindo as Cataratas do iguaçu , Parque das aves e muitos outros."></ContainerDoubts>
        <ContainerDoubts
          question="Quais são os serviços oferecidos para turistas em Foz?"
          answer="Oferecemos passeios guiados, transporte para pontos turísticos, reservas de hospedagem e assistência durante a estadia em Foz."></ContainerDoubts>
        <ContainerDoubts
          question="Os serviços de turismo incluem alimentação?"
          answer="Embora nossos serviços não incluam alimentação, podemos fornecer recomendações de restaurantes locais e ajudar com reservas se necessário."></ContainerDoubts>
        <ContainerDoubts
          question="Quais documentos preciso para realizar a atravessia para a Argentina ou Paraguai??"
          answer="Não é necessário passaporte para visitar a esses países, basta apresentar o RG em bom estado de conservação e que permita identificar a foto do portador com facilidade, idealmente com menos de 10 anos da emissão; Documentos como carteiras profissionais e CNH, não são aceitos para entrar no país"></ContainerDoubts>
      </div>
    </div>
  );
}
