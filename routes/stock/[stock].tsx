import { PageProps, Handlers } from "$fresh/server.ts";
import StockBio from "../../components/StockBio.tsx";
import NavigationBar from "../../components/NavigationBar.tsx";
import {ChartComponent} from "../../components/Chart.tsx";
import { StockPriceQuery, StockDeepQuery, DeepStockResponse } from "../../utils/query-stock.ts";
import RecommendedStocks from "../../components/RecommendedStocks.tsx";
import { GPTQuery } from "../../utils/query-gpt.ts";

export const handler: Handlers<{ prices: Array<number>; deepQuery: DeepStockResponse; insight: string }> = {
  async GET(_req, ctx) {
    const path = _req.url.split('/');
    const ticker = path[path.length - 1];

    const stockData = await Promise.all([
      StockDeepQuery({ ticker: ticker }),
      StockPriceQuery({ ticker: ticker })
    ])
      .then(async ([deepQuery, prices]) => {
        const GPTResponse = await GPTQuery({
          systemPrompt: "You are a knowledgeable financial advisor and educator. Users will provide you with current metrics on a company’s performance. Your role is to discuss in one or two paragraphs whether the stock is a good investment and educate the user on investing. Highlight specific details and explain why they are positive or negative factors in the stock’s performance. Do not tell the user to consult with a financial advisor or provide the user with a disclaimer about financial advice.",
          userInput: `Company Name: ${ deepQuery.companyName }
          Stock Price: ${ deepQuery.price }
          Industry: ${ deepQuery.industry }
          Beta: ${ deepQuery.beta }
          Revenue per Share: ${ deepQuery.revenuePerShare }
          P/E Ratio: ${ deepQuery.peRatio }
          Price to Sales Ratio: ${ deepQuery.priceToSalesRatio }
          Debt to Equity Ratio: ${ deepQuery.debtToEquity }
          Free Cash Flow per Share: ${ deepQuery.freeCashFlowPerShare }
          Payout Ratio: ${ deepQuery.payoutRatio }`
        });
        return {
          prices: prices,
          deepQuery: deepQuery,
          insight: GPTResponse
        }
      })


    // const response = StockPriceQuery({ticker: ticker});
    // const data = await response;
    return ctx.render(stockData);
  },

};

export default function Stock(props: PageProps) {
  return (
    <div >
      <NavigationBar/>
      <div class=" mx-auto flex flex-col ">
        {/* {console.log("PAGEPROPS -> " + props)} */}
        { StockBio(props.params.stock, props.data.deepQuery.companyName, props.data.deepQuery.description)}
      </div>
      { ChartComponent(props.data.prices)}
      <div>GPT: { props.data.insight }</div>
    </div>
  ); 
}