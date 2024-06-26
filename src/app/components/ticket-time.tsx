export function TicketTime(props: any) {
  return (
    <div>
      <div className="flex flex-col">
        <div className="flex-auto text-xs text-gray-400 my-1">
          <span className="mr-1 ">{props.day || props.tomorrow}</span>
          <span>{props.mouth}</span>
        </div>
        <div className="w-full flex-none text-lg text-blue-800 font-bold leading-none">
          {props.time}
        </div>
        <div className="text-xs">{props.availability}</div>
      </div>
    </div>
  );
}
