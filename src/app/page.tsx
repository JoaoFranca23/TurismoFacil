import { Banner } from "./components/banner";
import { Gallery } from "./components/gallery";
import { Header } from "./components/header";
import { Partner } from "./components/partner";
import PriceTable from "./components/price-table";

export default function Home() {
  return (
    <div className="max-w-[1980px] mx-auto ">
      <Header />
      <main>
        <Banner></Banner>
        <Partner></Partner>
        <Gallery></Gallery>
        <PriceTable></PriceTable>
        {/* 
        <div>precos</div>
        <div>comentarios</div>
        <div>sobre nos</div> */}
      </main>
    </div>
  );
}
