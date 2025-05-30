

import { Button } from "~/components/ui/button";
import { IconBrandLinkedinFilled } from "@tabler/icons-react"
import { signIn } from "~/lib/auth.client";
import { useNavigate } from "react-router";
import type { Route } from "./+types/signin";


export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Sign In" },
    { name: "description", content: "Sign in to your account" },
  ]
}

export default function SignIn() {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center h-[80svh]">
      <Button variant="outline" className="flex items-center gap-2" onClick={async () => {
        await signIn.social({
          provider: "linkedin",
          fetchOptions: {
            onSuccess: () => {
              navigate("http://localhost:5173/dashboard")
            },
            onError: (error) => {
              console.error(error)
            }
          }
        })
      }}>
        <IconBrandLinkedinFilled /> Continue with Linkedin
      </Button>
    </div>
  )
}
