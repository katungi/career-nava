import { PrismaClient } from '@prisma/client'
// @ts-ignore
import { withPulse } from '@prisma/extension-pulse'
import { env } from "~/env.mjs";

const prismaClientSingleton = () => {
  return new PrismaClient({
    log:
      env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],
  }).$extends(withPulse({
    apiKey: process.env['PULSE_API_KEY'] as string
  }))
}

declare global {
  var prisma: undefined | ReturnType<typeof prismaClientSingleton>
}

const db = globalThis.prisma ?? prismaClientSingleton()

export {db}

globalThis.prisma = db