import { PageProps, Handlers } from "$fresh/server.ts";
import StockBio from "../../components/StockBio.tsx";
import NavigationBar from "../../components/NavigationBar.tsx";
import {ChartComponent} from "../../components/Chart.tsx";
import { StockPriceQuery } from "../../utils/query-stock.ts";
import RecommendedStocks from "../../components/RecommendedStocks.tsx";

export const handler: Handlers<number[]> = {
  async GET(_req, ctx) {
    const path = _req.url.split('/');
    const ticker = path[path.length - 1];
    //console.log(ticker);
    const response = StockPriceQuery({ticker: ticker});
    const data = await response;
    return ctx.render(data);
  },
  async POST(req, ctx) {
    const form = await req.formData();
    const email = form.get("text")?.toString();
    console.log("AHHHHHHHHHHH");
    // Add email to list.

    // Redirect user to thank you page.
    const headers = new Headers();
    headers.set("location", "/thanks-for-subscribing");
    return new Response(null, {
      status: 303, // See Other
      headers,
    });
  }

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