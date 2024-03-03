import { useSignal } from "@preact/signals";
import Counter from "../islands/Counter.tsx";
import { Button } from "../components/Button.tsx";
import NavigationBar from "../components/NavigationBar.tsx";
import { InvestmentList, InvestmentListInterface } from "../components/InvestmentList.tsx";
import { ListItemInterface } from "../components/ListItem.tsx";
import { ChartComponent } from "../components/Chart.tsx";
import { PageProps, Handlers } from "$fresh/server.ts";
import { DeepStockResponse, GetExampleStockData, StockDeepQuery, StockPriceNestedQuery, StockPriceQuery } from "../utils/query-stock.ts";
import { GPTQuery } from "../utils/query-gpt.ts";

//Comment this out to prevent page load every time

/*export const handler: Handlers<number[]> = {
  async GET(_req, ctx) {
    console.log("TEST");
    const response = await StockPriceNestedQuery();
    const data = await response;
    return ctx.render(response);
  },

};*/

export const handler: Handlers<{ prices: Array<number>; deepQuery: DeepStockResponse; insight: string }> = {
  async GET(_req, ctx) {
    const path = _req.url.split('/');
    const ticker = "TLSA";

    const stockData = await Promise.all([
      StockDeepQuery({ ticker: ticker }),
      StockPriceQuery({ ticker: ticker })
    ])
      .then(async ([deepQuery, prices]) => {
        const [GPTResponse, recommendations] = await Promise.all([
          GPTQuery({
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
          }),
          GPTQuery({
            systemPrompt: `You are an investment picker. Users will provide you with the name of a company and its corresponding industry. You will respond with a list of 7 to 9 publicly traded companies that are similar to the company they entered. Consider unique companies when providing recommendations. Format the list of companies as a JSON object using the following format:
            [{"ticker": "AAPL", "name": "Apple"}, ...]`,
            userInput: `Company Name: ${ deepQuery.companyName }
            Industry: ${ deepQuery.industry }`
          })
        ])
        return {
          prices: prices,
          deepQuery: deepQuery,
          insight: GPTResponse,
          recommendations: JSON.parse(recommendations)
        }
      })


    // const response = StockPriceQuery({ticker: ticker});
    // const data = await response;
    return ctx.render(stockData);
  },

};

const investments: Array<ListItemInterface> = [
  { ticker: "AAPL", name: "Apple", price: 179.66, sharesCount:  1.5},
  { ticker: "AMZN", name: "Amazon", price: 178.22, sharesCount: 5 },
  { ticker: "NVDA", name: "NVIDIA", price: 822.79, sharesCount: 2 },
  { ticker: "TSLA", name: "Tesla", price: 202.64, sharesCount: 10 }
]

export default function Home(props: PageProps) {
  const count = useSignal(3);
  return (
    <div>
      <NavigationBar /> 
      {/* These are accurate as of 2/03/2024 - 3/03/2024 Based on our SAMPLE values */ } 
      { ChartComponent([4273.29,4271.05,4273.7,4283.2,4239.404,4273.9475,4265.2164999999995,4293.425,4305.242499999999,4323.612499999999,4340.23045,4339.0605,4329.496999999999,4338.389999999999,4338.0830000000005,4327.665,4331.83,4344.185,4343.93,4359.77,4339.661,4335.24,4240.9215,4291.6025,4325.8745,4320.0345,4325.7073,4329.55,4331.085,4326.4025,4327.2,4332.8495,4305.57,4301.795,4280.88,4292.674999999999,4310.4172,4333.69565,4333.2555,4283.3805,4283.195,4311.7695,4337.46315,4345.015,4340.519,4334.955599999999,4328.775,4328.4,4343.45,4359.415,4364.13,4359.54,4390.0681,4357.2474999999995,4370.6648,4387.6785,4396.699799999999,4422.77385,4421.2315,4415.874,4428.87,4423.791,4419.56,4423.715,4444.174999999999,4436.355,4421.295,4413.705,4418.9352,4420.4800000000005,4439.342500000001,4450.8242,4423.6711000000005,4437.745,4425.94655,4419.26,4415.4,4419.5275,4418.01,4420.8,4434.049999999999,4438.44,4443.715,4453.55,4460.5782,4487.475,4501.152700000001,4496.1667,4515.71805,4521.3434,4524.991,4534.215,4533.889999999999,4533.148999999999,4533.19,4532.6849999999995,4563.3550000000005,4560.094999999999,4558.34,4542.9400000000005,4529.06,4552.4075,4540.357,4541.4175,4520.6759999999995,4479.8448,4459.395,4468.31,4461.1900000000005,4457.3234,4459.18,4453.3225,4447.485,4432,4436.35,4441.76,4368.935,4414.139999999999,4419.655000000001,4417.665,4400.971,4405.4902,4380.35905,4404.795,4417.57975,4413.96,4410.496999999999,4412.17,4455.6449999999995,4454.21,4448.4,4449.315,4449.929999999999,4452.365,4431.26515,4428.78,4442.6140000000005,4451.9987,4458.214,4495.18,4504.77,4499.8342,4508.289000000001,4507.995,4504.52,4510.81,4514.83,4514.67,4507.04,4499.4854,4512.701499999999,4523.7852,4536.629199999999,4564.9124,4567.09635,4583.215,4599.3150000000005,4601.7384999999995,4607.87,4611.835,4647.7,4651.445,4641.005,4633.215,4630.6050000000005,4558.3986,4588.200849999999,4625.187,4599.125,4596.855799999999,4592.37485,4572.695,4569.935,4568.62255,4567.325,4565.375,4500.39,4492.37,4509.485000000001,4525.595,4521.225,4421.6805,4419.2927,4379.2285,4363.0801,4392.2555999999995,4409.337,4434.67,4410.6900000000005,4415.638,4416.98,4404.85,4406.895,4421.49,4418.9,4400.5,4401.105,4456.1900000000005,4423.284,4413.1875,4396.51185,4391.19975,4373.702,4414.630000000001,4563.985000000001,4522.725,4541.0935,4560.2995,4643.07,4637.88,4649.645,4617.43,4603.588049999999,4608.62,4623.9988,4632.4954,4659.595,4673.26675,4675.4479,4691.84,4691.3,4699.67,4712.280000000001,4705.424999999999,4701.54,4696.325000000001,4694.95,4706.97,4707.81,4711.120500000001,4670.9349999999995,4697.717,4686.9734,4675.8567,4672.710999999999,4644.53,4642.575,4636.6900000000005,4633.425,4631.969999999999,4659.1,4659.08,4666.68,4662.65,4676.21,4692.2111,4731.187,4752.7775,4744.0185,4735.03985,4722.164,4720.632,4706.315,4705.4400000000005,4716.01,4711.9945,4757.93,4754.42,4750.025,4764.54,4770.43,4731.944,4745.8095,4743.886,4701.067,4721.754849999999,4731.021500000001,4712.6449999999995,4716.964,4714.65,4707.45,4711.59,4674.52,4690.375,4694.91,4694.85,4701.175,4686.3312,4727.470149999999,4756.3949999999995,4740.0714,4745.3002,4722.72285,4713.16,4682.5777,4685.57,4689.03,4686.83,4700.6849999999995,4697.67,4705.4,4702.8150000000005,4752.63,4760.908600000001,4735.76945,4723.93,4729.149,4737.281000000001,4739.7061,4756.264999999999,4754.1849999999995,4752.50195,4749.91185,4760.805,4774.5599999999995,4750.13,4760.75,4762.64,4768.4,4760.3575,4772.5239,4798.9205,4824.914,4842.389999999999,4836.3327,4833.603999999999,4830.335,4830.8712,4829.15805,4834.2
])}
<div class="grid grid-cols-2">
    <div class="border-2 border-solid border-indigo-500 w-2/3 translate-x-1/4">
      <InvestmentList companies={investments} />
      </div>
      <div class="border-2 border-solid border-indigo-500 w-2/3 translate-x-1/4">
        <InvestmentList companies={ props.data.recommendations } />
      </div>
    </div>
    </div>
  );
}
