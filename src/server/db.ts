// import { PrismaClient } from "@prisma/client";
// import { env } from "~/env.mjs";

// const createPrismaClient = () =>
//   new PrismaClient({
//     log:
//       env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],
//   });

// const globalForPrisma = globalThis as unknown as {
//   prisma: ReturnType<typeof createPrismaClient> | undefined;
// };

// const db = globalForPrisma.prisma ?? createPrismaClient();

// if (env.NODE_ENV !== "production") globalForPrisma.prisma = db;

// export { db }


import { PrismaClient } from '@prisma/client'
import { env } from "~/env.mjs";

const prismaClientSingleton = () => {
  return new PrismaClient({
    log:
      env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],
  });
}

declare global {
  var prisma: undefined | ReturnType<typeof prismaClientSingleton>
}

const db = globalThis.prisma ?? prismaClientSingleton()

export default db

if (process.env.NODE_ENV !== 'production') globalThis.prisma = prisma