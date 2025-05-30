import { Hono } from "hono";
import { auth } from "./lib/auth";
import { cors } from "hono/cors";

const app = new Hono();

app.use(
  "/api/auth/*",
  cors({
    origin: ["http://localhost:5173", "http://localhost:3000"],
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["POST", "GET", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
    credentials: true,
  }),
);

app.on(["POST", "GET"], "/api/auth/*", (c) => {
  return auth.handler(c.req.raw);
});

app.get("/hello", (c) => {
  return c.text("Hello World");
});


export default app;
