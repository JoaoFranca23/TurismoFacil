export function Gallery() {
  return (
    <div className="my-32 mx-8 lg:mx-28">
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3">
        <div>
          <img
            className="object-cover object-center w-full h-80 max-w-full rounded-lg"
            src="https://www.h2foz.com.br/wp-content/uploads/2020/10/bfb1d31a-1578594718-capa.jpg"
            alt="gallery-photo"
          />
        </div>
        <div>
          <img
            className="object-cover object-center w-full h-80 max-w-full rounded-lg"
            src="https://www.iguassu.com.br/wp-content/uploads/2023/04/6-Cataratas-do-Iguacu-Creditos-Edison-Emerson-FotoEquipeCataratas-scaled.jpg"
            alt="gallery-photo"
          />
        </div>
        <div>
          <img
            className="object-cover object-center w-full h-80 max-w-full rounded-lg"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Viveiro_Aves_de_Rios_e_Mangues.jpg/1200px-Viveiro_Aves_de_Rios_e_Mangues.jpg"
            alt="gallery-photo"
          />
        </div>
        <div>
          <img
            className="object-cover object-center w-full h-80 max-w-full rounded-lg"
            src="https://emalgumlugardomundo.com.br/wp-content/uploads/2021/12/o-que-fazer-em-foz-do-iguacu-macuco.jpg"
            alt="gallery-photo"
          />
        </div>

        <div>
          <img
            className="object-cover object-center w-full h-80 max-w-full rounded-lg"
            src="https://www.loukon.com/uploads/0000/1/2021/04/14/o-que-fazer-em-foz-do-iguacu-loukon-capa.jpg"
            alt="gallery-photo"
          />
        </div>
        <div>
          <img
            className="object-cover object-center w-full h-80 max-w-full rounded-lg"
            src="https://turismoitaipu.com.br/wp-content/uploads/2024/03/Itaipu-Panoramica-Turismo-Itaipu.jpg"
            alt="gallery-photo"
          />
        </div>
      </div>
    </div>
  );
}
