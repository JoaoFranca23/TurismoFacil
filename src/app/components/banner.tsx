export function Banner() {
  return (
    <div
      className=" bg-gradient-to-r from-blue-600 to-blue-200
         h-[640px] xl:h-[840px] bg-center lg:bg-cover bg-no-repeat 
      bg-fixed lg:rounded-bl-[290px] relative z-10 flex items-center justify-center">
      <div className=" flex flex-col items-start  text-left mx-10 lg:mx-28 ">
        <h1 className="text-6xl lg:text-8xl">Descubra Foz do Iguaçu</h1>
        <p className="lg:text-5xl text-3xl ">
          Explore o melhor do turismo com roteiros exclusivos e personalizados.
        </p>
      </div>
    </div>
  );
}
