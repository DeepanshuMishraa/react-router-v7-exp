import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
  layout("routes/layout.tsx", [
    index("routes/home.tsx"),
    route("about", "routes/about.tsx"),
    route("contact", "routes/contact.tsx"),
    route("signin", "routes/signin.tsx"),
    route("dashboard", "routes/dashboard.tsx"),
  ]),
] satisfies RouteConfig;
