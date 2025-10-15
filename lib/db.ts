import { PrismaClient } from "@prisma/client"

const globalForPisma = globalThis as unknown as {prisma : PrismaClient}

export const db = globalForPisma.prisma || new PrismaClient()

if(process.env.NODE_ENV !== "production") globalForPisma.prisma = db