
import { type Handlers } from "$fresh/server.ts";
import { renderChart } from "https://deno.land/x/fresh_charts@0.3.1/mod.ts";
import { StockPriceQuery } from "../utils/query-stock.ts";


export const handler: Handlers = {
  GET() {
    const response = StockPriceQuery({ticker: "AAPL", from: new Date("2024-01-01") , to : new Date("2024-03-02") , interval: "day"});

    const cfg = { count: 7, min: -100, max: 100 };
    return renderChart({
      type: "line",
      data: {
        datasets: [
          {
            label: "Dataset 2",
            data: response
          }
        ],
      },
      options: { devicePixelRatio: 1 },
    });
  },
};