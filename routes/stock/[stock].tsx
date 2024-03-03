import { PageProps, Handlers } from "$fresh/server.ts";
import StockBio from "../../components/StockBio.tsx";
import NavigationBar from "../../components/NavigationBar.tsx";
import {ChartComponent} from "../../components/Chart.tsx";
import { StockPriceQuery } from "../../utils/query-stock.ts";
import RecommendedStocks from "../../components/RecommendedStocks.tsx";

export const handler: Handlers<number[]> = {
  async GET(_req, ctx) {
    console.log("TEST");
    const response = StockPriceQuery({ticker: "AAPL"});
    const data = await response;
    return ctx.render(data);
  },

};

export default function Stock(props: PageProps) {
  return (
    <div >
      <NavigationBar/>
      <div class=" mx-auto flex flex-col ">
        {console.log("PAGEPROPS -> " + props)}
        { StockBio(props.params.stock, "Stock Name", "Here is an example Description")}
      </div>
      { ChartComponent(props.data)}
      <div class="border-8">      
        {RecommendedStocks("APPL", 900)}
      </div>
    </div>
  ); 
}