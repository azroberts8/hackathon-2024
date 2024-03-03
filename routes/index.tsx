import { useSignal } from "@preact/signals";
import Counter from "../islands/Counter.tsx";
import { Button } from "../components/Button.tsx";
import NavigationBar from "../components/NavigationBar.tsx";
import InvestedListComponet from "../components/InvestedListComponet.tsx";



export default function Home() {
  const count = useSignal(3);
  return (
   <div>
    <NavigationBar />
    {InvestedListComponet("APPL", 100000, 150)}
   </div>
   
  );
}
