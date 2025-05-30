import { Hono } from "hono";
import { auth } from "./lib/auth";
import { cors } from "hono/cors";
import { zValidator } from '@hono/zod-validator'
import { z } from "zod";

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

const router = app.post("/log", zValidator("json", z.object({
  title: z.string().min(1),
  content: z.string().min(1).max(1000)
})
), async (c) => {
  const { title, content } = c.req.valid("json")
  return c.json({
    title,
    content,
    message: "Your log is logged"
  })
})



export type AppType = typeof router;
export default app;
