import { useSignal } from "@preact/signals";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  const count = useSignal(3);
  return (
    <div class="bg-[#86efac]" >
      <div class="max-w-screen-md flex flex-col">
        <h1 class="text-4xl font-bold">Quants Made Simple</h1>
        <p class="my-4">
        </p>
      </div>
    </div>
  );
}
