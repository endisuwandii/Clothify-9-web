import { HouseIcon, KeyRound, ShirtIcon, ShoppingCartIcon } from "lucide-react";
import { Link, Outlet } from "react-router";
import { Button } from "~/components/ui/button";

export default function LayoutMain() {
  const year = new Date().getFullYear();

  return (
    <div className="flex flex-col h-screen">
      <nav className="flex justify-center p-4">
        <ul className="flex gap-10 items-center">
          <li>
            <Button asChild>
              <Link to="/">
                <HouseIcon />
                Home
              </Link>
            </Button>
          </li>
          <li>
            <Button asChild>
              <Link to="/products">
                <ShirtIcon />
                Products
              </Link>
            </Button>
          </li>
          <li>
            <Link to="/">
              <h1 className="font-extrabold">Clothify</h1>
            </Link>
          </li>
          <li>
            <Button asChild>
              <Link to="/cart">
                <ShoppingCartIcon />
                Cart
              </Link>
            </Button>
          </li>
          <li>
            <Button asChild>
              <Link to="/login">
                <KeyRound />
                Login
              </Link>
            </Button>
          </li>
        </ul>
      </nav>

      <div className="flex-1">
        <Outlet />
      </div>

      <footer>
        <p>&copy; {year} Clothify</p>
      </footer>
    </div>
  );
}
