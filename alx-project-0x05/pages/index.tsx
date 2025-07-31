import { useRouter } from "next/router";
import Button from "@/components/common/Button";

export default function Home() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <h1 className="text-4xl font-bold">Welcome to Splash App</h1>
      <Button
        buttonLabel="Go to Counter App"
        buttonBackgroundColor="blue"
        onClick={() => router.push("/counter-app")}
      />
    </div>
  );
}
