import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { db } from "./db";


export const auth = betterAuth({
  database: prismaAdapter(db, {
    provider: "postgresql",
  }),
  socialProviders: {
    linkedin: {
      clientId: process.env.LINKEDIN_CLIENT_ID!,
      clientSecret: process.env.LINKEDIN_CLIENT_SECRET!,
    }
  },
  advanced: {
    crossSubDomainCookies: {
      enabled: true
    }
  },
  trustedOrigins: [
    "http://localhost:5173",
    "http://localhost:3000",
  ]
});
