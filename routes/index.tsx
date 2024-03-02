import { useSignal } from "@preact/signals";
import Counter from "../islands/Counter.tsx";
import { Button } from "../components/Button.tsx";
import { Search } from "../components/Search.tsx";
import NavigationBar from "../components/Nav.tsx";


export default function Home() {
  const count = useSignal(3);
  return (
   <div>
    <NavigationBar />
   </div>
    <div class="py-2 px-2 bg-[#86efac]" >
      <h1 class="text-4xl font-bold align-middle flex flex-row ">Quants Made Simple
      <Search class=""></Search>
      </h1> 
    </div>
  );
}
