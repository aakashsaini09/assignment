import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    await prisma.post.create({
        data:{
            title: "title of post",
            content: "main content of post",
            published: true,
            author: {
                connect: {
                    id: 1
                }
            }
        }
    })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
  })