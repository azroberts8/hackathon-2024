import { JSX } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { ListItem, ListItemInterface } from "./ListItem.tsx";

export interface InvestmentListInterface {
    companies: Array<ListItemInterface>;
}

export default function InvestmentList({ companies }: InvestmentListInterface) {
    return (
        <div class="">
            { companies.map(company => (
                <ListItem ticker={company.ticker} name={company.name} price={company.price} sharesCount={company.sharesCount} />
            )) }
        </div>
    );
}

export { InvestmentList }