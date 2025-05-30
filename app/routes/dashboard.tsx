

import { useSession } from "~/lib/auth.client";
import type { Route } from "./+types/dashboard";


export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Dashboard" },
    { name: "description", content: "This is the dashboard page" },
  ]
}

export default function Dashboard() {
  const { data: session } = useSession();
  return (
    <div className="flex flex-col items-center justify-center h-[80svh]">
      <h1 className="text-2xl font-bold">Welcome {session?.user?.name}</h1>
      <h2 className="text-lg">Your email is {session?.user?.email}</h2>
    </div>
  )
}
