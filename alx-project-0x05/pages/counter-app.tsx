import { useCount } from "@/context/CountContext";
import Button from "@/components/common/Button";

export default function CounterApp() {
  const { count, increment, decrement } = useCount();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <h1 className="text-3xl font-bold">Counter App</h1>
      <p className="text-2xl">Count: {count}</p>
      <div className="flex gap-4">
        <Button
          buttonLabel="Increment"
          onClick={increment}
          buttonBackgroundColor="green"
        />
        <Button
          buttonLabel="Decrement"
          onClick={decrement}
          buttonBackgroundColor="red"
        />
      </div>
    </div>
  );
}
