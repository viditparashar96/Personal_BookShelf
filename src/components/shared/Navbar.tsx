import { logout } from "@/lib/store/authSlice";
import { CircleUser } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

const Navbar = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state: any) => state.auth.userData);
  console.log("userData", userData);
  const handleLogout = async () => {
    try {
      localStorage.removeItem("token");
      dispatch(logout());
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <header className="sticky z-50 top-0 flex h-16 items-center justify-end gap-4 border-b bg-background px-4 md:px-6">
      <Link
        to="/"
        className="inline-flex items-center justify-center whitespace-nowrap p-2 rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90"
      >
        Home
      </Link>
      <Link
        to="/myshelf"
        className=" bg-primary text-primary-foreground hover:bg-primary/90 p-2 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
      >
        My Shelf
      </Link>
      <div className=" ml-auto">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="secondary" size="icon" className="rounded-full">
              <CircleUser className="h-5 w-5" />
              <span className="sr-only">Toggle user menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>

            <DropdownMenuSeparator />
            <DropdownMenuItem
              className=" cursor-pointer"
              onClick={handleLogout}
            >
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default Navbar;
