import { PageProps } from "$fresh/server.ts";
import StockBio from "../../components/StockBio.tsx";
import NavigationBar from "../../components/Nav.tsx";


export default function Stock(props: PageProps) {
  return (
    <div >
      <NavigationBar/>
      <div class=" mx-auto flex flex-col ">
        {StockBio(props.params.stock, "Stock Name", "Here is an example Description")}
      </div>
    </div>
  ); 
}