import IconChevronRight from "https://deno.land/x/tabler_icons_tsx@0.0.6/tsx/chevron-right.tsx";

export default function StockBio(ticker: string, name: string, desc: string) {
  return (
    <div
      class="w-full flex px-8 py-10 mi-h-[24em] justify-center items-center flex-col gap-8 bg-cover bg-center bg-no-repeat bg-gray-100 text-white"
      style="background-image:linear-gradient(rgba(0, 0, 40, 0.8),rgba(0, 0, 40, 0.8)), url('/gallery/hero-bg.webp');"
    >        
      <div class="space-y-4 text-center">
        <h1 class="text-4xl inline-block font-bold">{name +  " (" + ticker + ")"}</h1>
        <p class="text-xl max-w-lg text-blue-100">
            {desc}
        </p>
      </div>
    </div>
  );
}