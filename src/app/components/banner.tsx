export function Banner() {
  return (
    <div className="h-[440px] xl:h-[540px] flex justify-center items-center bg-color6">
      <div
        className="bg-[url('https://images.unsplash.com/photo-1524467128837-00f6644866d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyNjI5NjF8MHwxfHNlYXJjaHwxM3x8VG91cmlzbXxlbnwwfHx8fDE3MTA4OTA3NzV8MA&ixlib=rb-4.0.3&q=80&w=1080')]
         opacity-30 bg-center lg:bg-cover bg-no-repeat 
      bg-lg:rounded-bl-[290px] h-full w-full "></div>
      <div className=" flex flex-col items-start gap-6 text-left mx-10 lg:mx-28 font absolute">
        <h1 className="text-6xl lg:text-8xl text-black">
          Descubra Foz do Iguaçu
        </h1>
        <p className="lg:text-5xl text-3xl text-black ">
          Explore o melhor do turismo com roteiros exclusivos e personalizados.
        </p>
      </div>
    </div>
  );
}
