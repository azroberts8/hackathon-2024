import { stringify } from "$std/dotenv/mod.ts";
import { JsonValue } from "$std/jsonc/parse.ts";

interface exampleDataResult{
  k: string,
  v: number
}

interface StockQueryParams {
  ticker: string;
  from?: Date;
  to?: Date;
  interval?: "day" | "hour" | "minute";
}

interface BasicStockResponse {
  symbol: string;
  price: number;
  beta: number;
  changes: number;
  companyName: string;
  industry: string;
  sector: string;
  description: string;
  image: string;
}

interface DeepStockResponse extends BasicStockResponse {
  revenuePerShare: number;
  peRatio: number;
  priceToSalesRatio: number;
  debtToEquity: number;
  freeCashFlowPerShare: number;
  payoutRatio: number;
}

const POLYGON_API_KEY = Deno.env.get("POLYGON_API_KEY");
const FINANCIAL_MODELING_API_KEY = Deno.env.get("FINANCIAL_MODELING_API_KEY");

const StockPriceQuery = async ({ ticker, from = new Date("2024-02-02"), to = new Date("2024-03-03"), interval = "hour" }: StockQueryParams): Promise<Array<number>> => {
  const polyResponse = await fetch(`https://api.polygon.io/v2/aggs/ticker/${ticker}/range/1/${interval}/${from.toISOString().slice(0, 10)}/${to.toISOString().slice(0, 10)}?adjusted=true&sort=asc&limit=50000`, {
    headers: {
        "Authorization": `Bearer ${ POLYGON_API_KEY }`
    }
  }).then(res => res.json())
  return polyResponse.results.map((x: { c: number }) => x.c);
}

export async function StockPriceNestedQuery(){
  const examplePerson = await fetch(`https://hackathon-2024-ea318-default-rtdb.firebaseio.com/.json`).then(res => res.json());
  const res = examplePerson.Users["John Smith"].Owned_Stock;
  let holder : number[][] = [];
  for (const [key, value] of Object.entries(res)) {
    console.log(`${key}: ${value}`);
    const currentStockValuesFromLastMonth = StockPriceQuery( { ticker: key } );
    const ValuesTimesShare = (await currentStockValuesFromLastMonth).map((c: number) => c * Number(value));
    console.log(ValuesTimesShare);
    holder = [...holder, ValuesTimesShare];
  }

  
  console.log(res);
  return sumColumns(holder);
}

function sumColumns(matrix: number[][]): number[] {
  // Check if the matrix is empty
  if (matrix.length === 0 || matrix[0].length === 0) {
    throw new Error("Matrix is empty");
  }

  const numRows = matrix.length;
  const numCols = matrix[0].length;

  // Initialize an array to store the column sums
  const columnSums: number[] = Array(numCols).fill(0);

  // Iterate through columns and rows of the matrix
  for (let j = 0; j < numCols; j++) {
    for (let i = 0; i < numRows; i++) {
      // Add the current element to the corresponding column sum
      columnSums[j] += matrix[i][j];
    }
  }

  return columnSums;
}


const StockBasicQuery = async ({ ticker }: StockQueryParams): Promise<BasicStockResponse> => {
  const financialResponse = await fetch(`https://financialmodelingprep.com/api/v3/profile/${ ticker }?apikey=${ FINANCIAL_MODELING_API_KEY }`)
    .then(res => res.json())
    .then(res => res[0]);
  return financialResponse;
}

const StockDeepQuery = async ({ ticker }: StockQueryParams): Promise<DeepStockResponse> => {
  const [basic, deep] = await Promise.all([
    StockBasicQuery({ ticker }),
    fetch(`https://financialmodelingprep.com/api/v3/key-metrics/${ ticker }?period=annual&apikey=${ FINANCIAL_MODELING_API_KEY }`)
      .then(res => res.json())
      .then(res => res[0])
  ])
  return {
    ...basic,
    revenuePerShare: deep.revenuePerShare,
    peRatio: deep.peRatio,
    priceToSalesRatio: deep.priceToSalesRatio,
    debtToEquity: deep.debtToEquity,
    freeCashFlowPerShare: deep.freeCashFlowPerShare,
    payoutRatio: deep.payoutRatio
  }
}

export { StockPriceQuery, StockBasicQuery, StockDeepQuery }
