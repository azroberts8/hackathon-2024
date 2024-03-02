import { useSignal } from "@preact/signals";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  const count = useSignal(3);
  return (
    <div class="py-2 px-2 bg-[#86efac]" >
      <div class="max-w-screen-md flex flex-col">
        <h1 class="text-4xl font-bold inline-block align-middle">Quants Made Simple</h1>
        
      </div>
    </div>
  );
}
