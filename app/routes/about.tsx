import type { Route } from "./+types/about";


export function meta({ }: Route.MetaArgs) {
  return [
    { title: "About" },
    { name: "description", content: "This is the about page" },
  ]
}


export default function About() {
  return (
    <div className="flex items-center justify-center h-[80svh]">
      This is the about page
    </div>
  )
}
