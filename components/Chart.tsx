import { Head } from "$fresh/runtime.ts";
import { Chart } from "https://deno.land/x/fresh_charts@0.3.1/mod.ts";
import { ChartColors, transparentize } from "https://deno.land/x/fresh_charts@0.3.1/utils.ts";
import { StockPriceQuery } from "../utils/query-stock.ts";
import { Handlers, PageProps } from "$fresh/server.ts";

export function ChartComponent(data: number[]) {
  console.log(data);
  
  return (
    <div>
      <h1>Title</h1>

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
                data: data,
                borderColor: ChartColors.Red,
                backgroundColor: transparentize(ChartColors.Red, 0.5),
                borderWidth: 1,
              }
           
            ],
          }}
        />
        </div>
    </div>
  );
}