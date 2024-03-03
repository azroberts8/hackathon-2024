import { JSX } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { Button } from "../components/Button.tsx"

export interface ListItemInterface {
    ticker: string;
    name: string;
    price?: number;
    sharesCount?: number;
}

export default function ListItem({ ticker, name, price, sharesCount }: ListItemInterface) {
    return (
        <a href={ `/stock/${ ticker }`} class="hover:bg-slate-200">
            <div class="flex w-full justify-between items-center mb-4 mt-4 pl-4 pr-4 border-b box-border">
                <div class="">
                    <div class="">{ name }</div>
                    <div class="">{ sharesCount ? `${sharesCount} shares` : "" }</div>
                </div>
                <div class="">
                    <div class="">{ price ? `$${ price }` : "" }</div>
                </div>
            </div>
        </a>

        // <div>
        //     <div class="max-w-sm w-full lg:max-w-full lg:flex">
        //         <div class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
        //         </div>
        //         <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        //             <div class="mb-8">
        //                 <div class="text-gray-900 font-bold text-xl mb-2">{ticker}</div>
        //                 <p class="text-green-700 text-base">${price}</p>
        //             </div>
        //         </div>

        //         <div class="flex flex-col items-start">
        //             <button class="bg-green-500 text-white px-4 py-2 rounded-md">
        //                 Buy
        //             </button>

        //             <button class="bg-red-500 text-white px-4 py-2 rounded-md mt-2">
        //                 Sell
        //             </button>
        //         </div>

        //     </div>


        // </div>


    );
}

export { ListItem }