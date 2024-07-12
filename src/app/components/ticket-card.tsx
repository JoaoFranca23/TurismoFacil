"use client";
import { Barcode } from "@phosphor-icons/react";

import { TicketTime } from "./ticket-time";

export function TicketCard(props: any) {
  const data = new Date();
  const hour = String(data.getHours() - 5);
  const hour2 = String(data.getHours() - 3);
  const hour3 = String(data.getHours() - 1);

  const day = String(data.getDate()).padStart(2, "0");
  const tomorrow = String(data.getDate() + 1).padStart(2, "0");
  const mouth = String(data.getMonth() + 1).padStart(2, "0");

  return (
    <div>
      <div>
        <div>
          <div className=" lg:w-[450px] w-[330px] h-[630px] lg:mb-0 mb-10 z-10 bg-blue-900 rounded-3xl">
            <div className="flex flex-col">
              <div className="bg-white relative drop-shadow-2xl  rounded-3xl p-4 m-4">
                <div className="flex-none sm:flex">
                  <div className=" relative h-32 w-32   sm:mb-0 mb-3 hidden"></div>
                  <div className="flex-auto justify-evenly">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center  my-1">
                        <span className="mr-3 rounded-full bg-white w-8 "></span>
                        <h2 className="font-medium">Atrações e Horários</h2>
                      </div>
                      <div className="ml-auto text-blue-800">FOZ</div>
                    </div>
                    <div className=" border-dashed border-b-2 my-5"></div>
                    <div className="flex justify-between items-center">
                      <TicketTime
                        day={day + " /"}
                        mouth={mouth}
                        time={hour + ":00"}
                        availability="disponível"></TicketTime>
                      <TicketTime
                        day={day + " /"}
                        mouth={mouth}
                        time={hour2 + ":00"}
                        availability="disponível"></TicketTime>
                      <TicketTime
                        day={day + " /"}
                        mouth={mouth}
                        time={hour3 + ":00"}
                        availability="disponível"></TicketTime>
                      <TicketTime
                        day={tomorrow + " /"}
                        mouth={mouth}
                        time="08:00"
                        availability="disponível"></TicketTime>
                    </div>
                    <div className=" border-dashed border-b-2 my-5 pt-5">
                      <div className="absolute rounded-full w-5 h-5 bg-blue-900 -mt-2 -left-2"></div>
                      <div className="absolute rounded-full w-5 h-5 bg-blue-900 -mt-2 -right-2"></div>
                    </div>
                    <div className="flex items-center  mb-5 lg:p-5 text-sm">
                      <div className="flex flex-col">
                        <span className="text-sm">{props.attraction1}</span>
                        <div className="font-semibold">
                          {props.subtitleAttraction1}
                        </div>
                      </div>
                      <div className="flex flex-col ml-auto">
                        <div className="flex flex-col">
                          <span className="text-sm">{props.attraction2}</span>
                          <div className="font-semibold">
                            {props.subtitleAttraction2}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center  mb-4 lg:px-5">
                      <div className="flex flex-col text-sm">
                        <div className="flex flex-col">
                          <span className="text-sm">{props.attraction3}</span>
                          <div className="font-semibold">
                            {props.subtitleAttraction3}
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col mx-auto text-sm"></div>
                      <div className="flex flex-col text-sm">
                        <div className="flex flex-col">
                          <span className="text-sm">{props.attraction4}</span>
                          <div className="font-semibold">
                            {props.subtitleAttraction4}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className=" border-dashed border-b-2 my-5 pt-5">
                      <div className="absolute rounded-full w-5 h-5 bg-blue-900 -mt-2 -left-2"></div>
                      <div className="absolute rounded-full w-5 h-5 bg-blue-900 -mt-2 -right-2"></div>
                    </div>
                    <div className="flex items-center px-5 pt-3 text-sm">
                      <div className="flex flex-col">
                        <span className="">Turismo</span>
                        <div className="font-semibold">Fácil</div>
                      </div>
                    </div>
                    <div className="flex flex-col py-7  justify-center text-sm ">
                      <Barcode className="barcode h-10 w-full inline-block mt-4 relative left-auto"></Barcode>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
