import { Head } from "$fresh/runtime.ts";
import { Chart } from "https://deno.land/x/fresh_charts@0.3.1/mod.ts";
import { ChartColors, transparentize } from "https://deno.land/x/fresh_charts@0.3.1/utils.ts";
import { StockPriceQuery } from "../utils/query-stock.ts";

export default function ChartComponent() {

  //const response =  StockPriceQuery({ticker: "AAPL", from: new Date("2024-01-01") , to : new Date("2024-03-2") , interval: "day"});

  return (
    <>
      <Head>
        <title>Example Chart</title>
      </Head>
      <div class="p-4 mx-auto max-w-screen-md">
        <Chart
          type="line"
          options={{
            devicePixelRatio: 1,
            scales: { y: { beginAtZero: true } },
          }}
          data={{
            labels: ["1", "2", "3"],
            datasets: [
              {
                label: "Sessions",
                data: [123, 234, 234],
                borderColor: ChartColors.Red,
                backgroundColor: transparentize(ChartColors.Red, 0.5),
                borderWidth: 1,
              }
           
            ],
          }}
        />
      </div>
    </>
  );
}