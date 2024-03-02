import { PageProps } from "$fresh/server.ts";
import StockBio from "../../components/StockBio.tsx";

export default function Stock(props: PageProps) {
  return (
    <div class="px-4 py-8 mx-auto bg-[#FFFFFF]">
      <div class=" mx-auto flex flex-col ">
      {/* <StockBio s ={"Example", "ex", "This is an example stock"}/> */}
        {StockBio(props.params.stock, "Abbreviation", "Here is an example Description")}
      </div>
    </div>
  ); 
}