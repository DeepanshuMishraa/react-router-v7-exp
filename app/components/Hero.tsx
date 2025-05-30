import { NavLink } from "react-router";
import { Button } from "./ui/button";
import { useSession } from "~/lib/auth.client";


export default function Hero() {
  const { data: session } = useSession();
  return (
    <div className="flex items-center justify-center h-[80svh] flex-col gap-4">
      Welcome to your own logging app
      <Button asChild>
        <NavLink to={session?.user ? "/dashboard" : "/signin"}>Go to dashboard</NavLink>
      </Button>
    </div>
  )
}
