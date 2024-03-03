export default function InvestedListComponet(ticker: string, shares: number, price: number) {
return (
<div class="border border-b-2 flex flex-row"> 
<div class="object-left">
  <p class="text-base" >{ticker}</p>
  <p class="text-sm ">{shares}</p>
  </div><div class="border border-solid">
  <p class="text-xs text-right align-middle grid-cols-2 border border-solid">{price}</p>
 </div>



</div>
);



}
