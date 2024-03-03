import { PageProps } from "$fresh/server.ts";
import StockBio from "../../components/StockBio.tsx";
import NavigationBar from "../../components/NavigationBar.tsx";
import ChartComponent from "../../components/Chart.tsx";
import RecommendedStocks from "../../components/RecommendedStocks.tsx";


export default function Stock(props: PageProps) {
  return (
    <div >
      <NavigationBar/>
      <div class=" mx-auto flex flex-col ">
        {StockBio(props.params.stock, "Stock Name", "Here is an example Description")}
      </div>
      <ChartComponent/>
      <div class="border-8">      
        {RecommendedStocks("APPL", 900)}
      </div>
    </div>
  ); 
}