import { JSX } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";

export interface ListItemInterface {
    ticker: string;
    name: string;
    price: number;
    sharesCount?: number;
}

export default function ListItem({ ticker, name, price, sharesCount }: ListItemInterface) {
    return (
        <div class="">List Item</div>
    );
}

export { ListItem }