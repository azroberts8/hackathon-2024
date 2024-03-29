import { JSX } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { ListItem, ListItemInterface } from "./ListItem.tsx";

export interface InvestmentListInterface {
    title: string;
    companies: Array<ListItemInterface>;
}

export default function InvestmentList({ title, companies }: InvestmentListInterface) {
    return (
        <div class="">
            <div class="text-2xl font-bold">{ title }</div>
            <div class="">
                { companies.map(company => (
                    <ListItem ticker={company.ticker} name={company.name} price={company.price} sharesCount={company.sharesCount} />
                )) }
            </div>
        </div>
    );
}

export { InvestmentList }