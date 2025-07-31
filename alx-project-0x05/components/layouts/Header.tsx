import Link from "next/link";
import Button from "../common/Button";
import { usePathname } from "next/navigation";
import { useCount } from "@/context/CountContext";

const Header: React.FC = () => {
  const pathname = usePathname();
  const { count } = useCount();

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-10">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          Splash App
        </Link>

        <div className="flex items-center gap-4">
          {pathname === "/counter-app" ? (
            <p className="text-gray-700 font-semibold">
              Current count: {count}
            </p>
          ) : (
            <>
              <Button buttonLabel="Sign In" buttonBackgroundColor="red" />
              <Button buttonLabel="Sign Up" buttonBackgroundColor="blue" />
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
