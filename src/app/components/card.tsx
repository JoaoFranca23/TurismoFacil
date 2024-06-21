export function Card(props: any) {
  return (
    <div>
      <div className="flex flex-col gap-4 w-48 lg:w-64 m-1  lg:mx-28 border rounded-xl bg-white">
        <img
          src={props.image}
          alt=""
          className="object-cover w-full h-24 lg:h-32 border rounded-t-lg"
        />
        <p className="mx-4 w-full h-16 lg:h-14">{props.title}</p>
      </div>
    </div>
  );
}
