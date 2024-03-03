import { JSX } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { Search } from "./Search.tsx";


const NavigationBar = () => {
  return(
    <div class="py-2 px-2 bg-[#86efac]">
      <div class="flex w-full justify-between items-center">
        <div class="">
          <a href="/"><h1 class="text-4xl font-bold font-mono inline-block align-middle">quants_made_simple</h1></a>
        </div>
        <div class="">
          <div class="inline-block mr-8">
            <Search />
          </div>
          <div class="inline-block">
            <a href="/profile">
            <h1 class="text-2xl font-bold font-mono inline-block align-middle">my_profile</h1>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default NavigationBar;
