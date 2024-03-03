import { JSX } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { Search } from "../components/Search.tsx";


const NavigationBar = () => {
return (<div class="py-2 px-2 bg-[#86efac]" >
      <div class="max-w-screen-md flex flex-row">
        <a href="/"><h1 class="text-4xl font-bold inline-block align-middle">Quants Made Simple</h1></a>
        <div class=""><Search></Search></div>
      </div>
    </div>);

}
export default NavigationBar;
