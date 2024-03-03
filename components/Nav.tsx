import { JSX } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { Search } from "../components/Search.tsx";


const NavigationBar = () => {
return (<div class="py-2 px-2 bg-[#86efac] " >
      <div class="max-w-screen-md flex flex-row">
        <a href="/"><h1 class="text-4xl font-bold font-mono inline-block align-middle">quants_made_simple</h1></a>
        <div class="px-80"><Search></Search></div>
        <a href="/profile"><h1 class="px-80 text-2xl font-bold font-mono inline-block align-middle">my_profile</h1></a>
      </div>
    </div>);

}
export default NavigationBar;
