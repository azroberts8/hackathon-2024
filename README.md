# HenHacks 2024 Hackathon Project
*Aka: Quants Made Simple; Aka: laughableliquidity.co*

This project is a proof-of-concept platform for educating people on the stock
market and investing. This project was developed over the span of 24 hours
during the [University of Delaware HenHacks 2024 hackathon](https://www.henhackshackathon.com/) and should
not be considered a final product. This project utilizes the [Polygon](https://polygon.io) and [Financial Modeling Prep](https://site.financialmodelingprep.com)
APIs to source current stock data and OpenAI's ChatGPT API to summarize and
explain the data in a way that is digestable and educational for novice investors.
For more information on this project, see our [Devpost page](https://devpost.com/software/quants-made-simple)

An active deployment is currently available at https://laughableliquidity.co
however the ChatGPT API token will soon be disabled. Once this API key is
disabled the deployment cease to function properly. If you are experiencing a
problem with the deployment this is likely the case. Follow the directions below
for setting up a local instance for testing.

## Developed By

- [Andrew Roberts](https://github.com/azroberts8) (andrewzr@udel.edu)
- [Matt Gwin](https://github.com/mattgwin29) (mattgwin@udel.edu)
- [Yasmeen Elzamek](https://github.com/yelzamek) (yelzamek@udel.edu)
- [Colby Dolbow](https://github.com/Cdolbow) (cdolbow@udel.edu)

## Technologies Utilized

- [Deno](https://deno.com) - a modern & secure runtime for JavaScript & TypeScript
- [Deno Deploy](https://deno.com/deploy) - a platform for deploying serverless JavaScript applications built in Deno
- [Fresh](https://fresh.deno.dev) - a front-end framework for Deno focused on speed, reliability, and simplicity
- [Firebase](https://firebase.google.com) - a NoSQL database platform with low entry barriers

## Running Locally

Ensure that you have the Deno runtime environment installed on your system.
Follow the getting started guide here: https://fresh.deno.dev/docs/getting-started

This project relies on 2 APIs for stock data in addition to the ChatGPT API.
You will need to obtain an API key for each of these APIs. Polygon and Financial
Modeling Prep both offer free tiers that are sufficent for this project. Set
the following environment variables on your system.

```
OPENAI_API_KEY= <ChatGPT API key>
POLYGON_API_KEY= <Polygon API key>
FINANCIAL_MODELING_API_KEY= <Financial Modeling Prep API key>
```

Start the project by running
```sh
deno task start
```

## Troubleshooting

If you are experiencing issues loading the pages, the most likely problem
is improperly set environment variables. Double check that your API keys
are valid and that they are properly set on your system.

If you are facing issues getting this project run, note that we used Deno v1.41
and your issue may be resolved by using this version.