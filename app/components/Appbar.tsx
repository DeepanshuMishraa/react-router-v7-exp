
import { NavLink, useNavigate } from "react-router";
import { Button } from "./ui/button";
import { signOut, useSession } from "~/lib/auth.client";


export function Appbar() {
  const { data: session } = useSession();
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-between p-4">
      <div>
        <NavLink to="/" className="font-bold text-3xl">Rono</NavLink>
      </div>
      <div className="flex items-center gap-4">
        {session ? (
          <Button onClick={async () => {
            await signOut({
              fetchOptions: {
                onSuccess: () => {
                  navigate("/signin")
                }
              }
            })
          }} variant="outline">
            Sign out
          </Button>
        ) : (
          <Button asChild variant="outline">
            <NavLink to="/signin">Sign In</NavLink>
          </Button>
        )}
        {session?.user && (

          <NavLink to="/dashboard">Dashboard</NavLink>

        )}
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
    </div>
  )
}
