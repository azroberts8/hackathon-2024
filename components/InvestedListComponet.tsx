export default function InvestedListComponet(ticker: string, shares: number, price: number) {
return (
<div class="border border-b-2 flex flex-row"> 
<div class="object-left px-1">
  <p class="text-base" >{ticker}</p>
  <p class="text-sm ">{shares}</p>
  </div><div class="border border-solid object-right">
  <p class="py-4 px-1 text-xs text-right align-middle grid-cols-2 border border-solid">{price}</p>
 </div>



</div>
);



}
