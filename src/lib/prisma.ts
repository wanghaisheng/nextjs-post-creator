import { getCloudflareContext } from '@opennextjs/cloudflare';
import { PrismaClient } from '@prisma/client';
import { PrismaD1 } from '@prisma/adapter-d1';

declare global {
  interface CloudflareEnv {
    DB: D1Database;
  }
}

let prisma: PrismaClient;

const initializePrisma = async () => {
  if (!prisma) {
    const db = (await getCloudflareContext()).env.DB;
    const adapter = new PrismaD1(db);
    prisma = new PrismaClient({ adapter });
  }
};

initializePrisma();

export { initializePrisma, prisma };
