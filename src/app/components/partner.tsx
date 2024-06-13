import Carousel from "./carousel";

export function Partner() {
  return (
    <div
      className="flex flex-col items-center justify-center py-20 gap-16 overflow-hidden
     bg-gradient-to-t from-white to-color6 ">
      <h2 className="text-4xl lg:text-6xl"></h2>
      <Carousel></Carousel>
    </div>
  );
}
