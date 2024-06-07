import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    const users = await prisma.user.findMany({});
    // Iterate in database to access every user
    for(let i = 0; i<users.length; i++){
        let user = users[i]
        console.log(user.email)
    }
    console.log(users);
    const user = await prisma.user.findUnique({
        // To find specific user with Id
        where: {
            id: 1
        },
        // To find specific user with email
        where2: {
            email: "aakash@gmail.com"
        },
        include: {
            posts: true
        }
    });
    console.log(user);
};

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })