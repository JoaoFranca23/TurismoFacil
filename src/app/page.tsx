import { Banner } from "./components/banner";
import { Header } from "./components/header";
import { Partner } from "./components/partner";

export default function Home() {
  return (
    <div className="max-w-[1980px] mx-auto ">
      <Header />
      <main>
        <Banner></Banner>
        <Partner></Partner>

        {/* <div>galerias</div>
        <div>precos</div>
        <div>comentarios</div>
        <div>sobre nos</div> */}
      </main>
    </div>
  );
}
