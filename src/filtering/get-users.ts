

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    const users = await prisma.user.findMany({});
    console.log("All: ", users);
    const user = await prisma.user.findUnique({
        where: {
            id: 1
        },
        include: {
            posts: true
        }
    });
    console.log("User with id 1: ", user);
};

main()
    .then(async () => {
        console.log("fetched done");
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })