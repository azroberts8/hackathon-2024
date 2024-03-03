import { useSignal } from "@preact/signals";
import Counter from "../islands/Counter.tsx";
import { Button } from "../components/Button.tsx";
import NavigationBar from "../components/NavigationBar.tsx";


export default function Home() {
  const count = useSignal(3);
  return (
   <div>
    <NavigationBar />
   </div>
  );
}
