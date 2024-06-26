export function ContainerPages(props: any) {
  return (
    <div className="mb-10">
      <div className="flex lg:flex-row flex-col items-start gap-16">
        <div className="flex flex-col gap-20  ">
          <img
            src={props.image}
            alt=""
            className="h-[630px] rounded-lg

"
          />

          <div className="flex flex-col gap-10 lg:w-2/3">
            <h2 className=" font-semibold text-2xl">{props.title}</h2>
            <p>{props.paragraph}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
