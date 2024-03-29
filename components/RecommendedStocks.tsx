import IconChevronRight from "https://deno.land/x/tabler_icons_tsx@0.0.6/tsx/chevron-right.tsx";

/*export default function RecommendedStocks() {
  return (
    <div class="container mx-auto bg-gray-50 min-h-screen p-8 antialiased">
    <div>
       <div class="bg-gray-100 mx-auto border-gray-500 border rounded-sm text-gray-700 mb-0.5 h-30">
          <div class="flex p-3 border-l-8 border-yellow-600">
             <div class="space-y-1 border-r-2 pr-3">
                <div class="text-sm leading-5 font-semibold"><span class="text-xs leading-4 font-normal text-gray-500"> Release #</span> LTC08762304</div>
                <div class="text-sm leading-5 font-semibold"><span class="text-xs leading-4 font-normal text-gray-500 pr"> BOL #</span> 10937</div>
                <div class="text-sm leading-5 font-semibold">JUN 14. 9:30 PM</div>
             </div>
             <div class="flex-1">
                <div class="ml-3 space-y-1 border-r-2 pr-3">
                   <div class="text-base leading-6 font-normal">KROGER MEMPHIS</div>
                   <div class="text-sm leading-4 font-normal"><span class="text-xs leading-4 font-normal text-gray-500"> Carrier</span> PAPER TRANSPORT INC.</div>
                   <div class="text-sm leading-4 font-normal"><span class="text-xs leading-4 font-normal text-gray-500"> Destination</span> WestRock Jacksonville - 9469 Eastport Rd, Jacksonville, FL 32218</div>
                </div>
             </div>
             <div class="border-r-2 pr-3">
                <div >
                   <div class="ml-3 my-3 border-gray-200 border-2 bg-gray-300 p-1">
                      <div class="uppercase text-xs leading-4 font-medium">Trailer</div>
                      <div class="text-center text-sm leading-4 font-semibold text-gray-800">89732</div>
                   </div>
                </div>
             </div>
             <div>
                <div class="ml-3 my-5 bg-yellow-600 p-1 w-20">
                   <div class="uppercase text-xs leading-4 font-semibold text-center text-yellow-100">Loaded</div>
                </div>
             </div>
             <div>
                <button class="text-gray-100 rounded-sm my-5 ml-2 focus:outline-none bg-gray-500">
                   <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                   </svg>
                </button>
             </div>
          </div>
       </div>
       <div class="bg-gray-100 mx-auto border-gray-500 border rounded-sm  text-gray-700 mb-0.5">
          <div class="flex p-3  border-l-8 border-green-600">
             <div class="space-y-1 border-r-2 pr-3">
                <div class="text-sm leading-5 font-semibold"><span class="text-xs leading-4 font-normal text-gray-500"> Release #</span> LTC08762304</div>
                <div class="text-sm leading-5 font-semibold"><span class="text-xs leading-4 font-normal text-gray-500 pr"> BOL #</span> 10937</div>
                <div class="text-sm leading-5 font-semibold">JUN 14. 9:30 PM</div>
             </div>
             <div class="flex-1">
                <div class="ml-3 space-y-1 border-r-2 pr-3">
                   <div class="text-base leading-6 font-normal">KROGER MEMPHIS</div>
                   <div class="text-sm leading-4 font-normal"><span class="text-xs leading-4 font-normal text-gray-500"> Carrier</span> PAPER TRANSPORT INC.</div>
                   <div class="text-sm leading-4 font-normal"><span class="text-xs leading-4 font-normal text-gray-500"> Destination</span> WestRock Jacksonville - 9469 Eastport Rd, Jacksonville, FL 32218</div>
                </div>
             </div>
             <div class="border-r-2 pr-3">
                <div >
                   <div class="ml-3 my-3 border-gray-200 border-2 bg-gray-300 p-1">
                      <div class="uppercase text-xs leading-4 font-medium">Trailer</div>
                      <div class="text-center text-sm leading-4 font-semibold text-gray-800">89732</div>
                   </div>
                </div>
             </div>
             <div>
                <div class="ml-3 my-5 bg-green-600 p-1 w-20">
                   <div class="uppercase text-xs leading-4 font-semibold text-center text-green-100">Picked UP</div>
                </div>
             </div>
             <div>
                <button class="text-gray-100 rounded-sm my-5 ml-2 focus:outline-none bg-gray-500">
                   <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                   </svg>
                </button>
             </div>
          </div>
       </div>

       <div class="bg-gray-100 mx-auto border-gray-500 border rounded-sm  text-gray-700 mb-0.5">
          <div class="flex p-3  border-l-8 border-red-600">
             <div class="space-y-1 border-r-2 pr-3">
                <div class="text-sm leading-5 font-semibold"><span class="text-xs leading-4 font-normal text-gray-500"> Release #</span> LTC08762304</div>
                <div class="text-sm leading-5 font-semibold"><span class="text-xs leading-4 font-normal text-gray-500 pr"> BOL #</span> 10937</div>
                <div class="text-sm leading-5 font-semibold">JUN 14. 9:30 PM</div>
             </div>
             <div class="flex-1">
                <div class="ml-3 space-y-1 border-r-2 pr-3">
                   <div class="text-base leading-6 font-normal">KROGER MEMPHIS</div>
                   <div class="text-sm leading-4 font-normal"><span class="text-xs leading-4 font-normal text-gray-500"> Carrier</span> PAPER TRANSPORT INC.</div>
                   <div class="text-sm leading-4 font-normal"><span class="text-xs leading-4 font-normal text-gray-500"> Destination</span> WestRock Jacksonville - 9469 Eastport Rd, Jacksonville, FL 32218</div>
                </div>
             </div>
             <div class="border-r-2 pr-3">
                <div >
                   <div class="ml-3 my-3 border-gray-200 border-2 bg-gray-300 p-1">
                      <div class="uppercase text-xs leading-4 font-medium">Trailer</div>
                      <div class="text-center text-sm leading-4 font-semibold text-gray-800">89732</div>
                   </div>
                </div>
             </div>
             <div>
                <div class="ml-3 my-5 bg-red-600 p-1 w-20">
                   <div class="uppercase text-xs leading-4 font-semibold text-center text-red-100">Canceled</div>
                </div>
             </div>
          </div>
       </div>
=    </div>
 </div>);
}*/

export default function RecommendedStockElement(ticker: string, currentPrice: number) {
   return (
      <div class="border-sky-500">
         {ticker}
         {currentPrice}
         </div>
   );
}

