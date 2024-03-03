interface StockQueryParams {
  ticker: string;
  from: Date;
  to: Date;
  interval: "day" | "hour" | "minute"
}

const POLYGON_API_KEY = Deno.env.get("POLYGON_API_KEY");

const StockPriceQuery = async ({ ticker, from = new Date(), to = new Date(), interval = "hour" }: StockQueryParams): Promise<Array<number>> => {
  const polyResponse = await fetch(`https://api.polygon.io/v2/aggs/ticker/${ticker}}/range/1/${interval}/${from.toISOString().slice(0, 10)}/${to.toISOString().slice(0, 10)}?adjusted=true&sort=asc&limit=960`, {
    headers: {
        "Authorization": `Bearer ${ POLYGON_API_KEY }`
    }
  }).then(res => res.json())
  return polyResponse.results.map((x: { c: number }) => x.c);
}

export { StockPriceQuery }