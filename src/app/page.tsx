import { Banner } from "./components/banner";
import Tourismdoubts from "./components/doubts";
import { Gallery } from "./components/gallery";

import { Partner } from "./components/partner";
import PriceTable from "./components/price-table";

export default function Home() {
  return (
    <div className="max-w-[1980px] mx-auto ">
      <Banner></Banner>
      <Partner></Partner>
      <Gallery></Gallery>
      <PriceTable></PriceTable>
      <Tourismdoubts></Tourismdoubts>
    </div>
  );
}
