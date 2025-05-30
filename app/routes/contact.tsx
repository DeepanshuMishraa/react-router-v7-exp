import type { Route } from "./+types/contact";


export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Contact" },
    { name: "description", content: "This is the contact page" },
  ]
}

export default function Contact() {
  return (
    <div className="flex items-center justify-center h-[80svh]">
      This is the contact page
    </div>
  )
}
