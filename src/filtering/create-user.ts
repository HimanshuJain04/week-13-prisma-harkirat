
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    await prisma.user.create(
        {
            data: {
                email: "abc@gmail.com",
                name: "Himanshu jain",
                password: "123456"
            }
        }
    )
}

main()
    .then(async () => {
        console.log("done");
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })