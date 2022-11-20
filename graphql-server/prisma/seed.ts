import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  await prisma.learningFocus.deleteMany({})
  await prisma.student.deleteMany({})

  await prisma.student.create({
    data: {
      name: 'Sofia Moreno',
      learningFocuses: {
        create: [
          {
            name: 'Tumbling',
            description: 'Improving cartwheel',
          },
          {
            name: 'Geography',
            description: 'Learning basics about maps',
          },
        ],
      },
    },
  })

  await prisma.student.create({
    data: {
      name: 'Jonah Moreno',
      learningFocuses: {
        create: [
          {
            name: 'Talking',
            description: 'Learning words',
          },
          {
            name: 'Sleeping',
            description: 'Napping well',
          },
        ],
      },
    },
  })

  await prisma.student.create({
    data: {
      name: 'Daisy Moreno',
      learningFocuses: {
        create: [
          {
            name: 'Potty-training',
            description: 'Not peeing on floor',
          },
          {
            name: 'Basic commands',
            description: 'Sit, Come, Stay',
          },
        ],
      },
    },
  })
}

main().then(() => {
  console.log('Data seeded...')
})
