import Hero from "~/components/Hero";
import type { Route } from "./+types/home";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "React-Router-Hono" },
    { name: "description", content: "Welcome to React-Router-Hono!" },
  ];
}

export default function Home() {
  return (
    <>
      <Hero />
    </>
  )
}
