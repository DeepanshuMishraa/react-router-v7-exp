

import { useSession } from "~/lib/auth.client";
import type { Route } from "./+types/dashboard";
import { Input } from "~/components/ui/input";
import { Textarea } from "~/components/ui/textarea";
import { Button } from "~/components/ui/button";
import { client } from "~/lib/rpc-client";
import { Form } from "react-router";


export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Dashboard" },
    { name: "description", content: "This is the dashboard page" },
  ]
}

export async function action({
  request,
}: Route.ActionArgs) {
  let formData = await request.formData();
  let title = formData.get("title");
  let content = formData.get("content");

  await client.log.$post({
    json: {
      title: title as string,
      content: content as string,
    }
  })
}
export default function Dashboard({
  actionData,
}: Route.ComponentProps) {
  const { data: session } = useSession();
  return (
    <div className="flex flex-col items-center justify-center h-[80svh]">
      <h1 className="text-2xl font-bold">Welcome {session?.user?.name}</h1>
      <h2 className="text-lg">Your email is {session?.user?.email}</h2>
      <Form method="post">
        <Input type="text" placeholder="Title" />
        <Textarea placeholder="Content" rows={10} />
        <Button type="submit">
          Log
        </Button>
      </Form>
    </div>
  )
}
