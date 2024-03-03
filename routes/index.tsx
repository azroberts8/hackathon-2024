import { useSignal } from "@preact/signals";
import Counter from "../islands/Counter.tsx";
import { Button } from "../components/Button.tsx";
import NavigationBar from "../components/NavigationBar.tsx";
import { InvestmentList, InvestmentListInterface } from "../components/InvestmentList.tsx";
import { ListItemInterface } from "../components/ListItem.tsx";

const investments: Array<ListItemInterface> = [
  { ticker: "AAPL", name: "Apple", price: 100.00, sharesCount: 2 },
  { ticker: "TSLA", name: "Tesla", price: 150.00 },
  { ticker: "NVDA", name: "NVIDIA", price: 800.00, sharesCount: 1 }
]

export default function Home() {
  const count = useSignal(3);
  return (
    <div>
      <NavigationBar />
      <InvestmentList companies={investments} />
    </div>
  );
}
