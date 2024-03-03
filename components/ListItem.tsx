import { JSX } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { Button } from "../components/Button.tsx"

export interface ListItemInterface {
    ticker: string;
    name: string;
    price: number;
    sharesCount?: number;
}

export default function ListItem({ ticker, name, price, sharesCount }: ListItemInterface) {
    return (
        <div>
            <div class="px-5 py-5 flex justify-between items-center h-10 overflow-hidden">
                <a href = {"/stock/" + ticker}>
                <button class = "h-20 w-60 px-2 py-1 border-gray-500 border-2 bg-white hover:bg-gray-200 transition-colors">
                    <h1 class = "text-left">{ticker}</h1>
                    {name} {price} {sharesCount} 
                </button>
                </a>
            </div>
        </div>

        
    );
}

export { ListItem }