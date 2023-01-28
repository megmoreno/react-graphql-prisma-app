import { PrismaClient } from '@prisma/client'
import {
  getSundayOfCurrentWeek,
  getSaturdayOfCurrentWeek,
} from '../src/util/DateUtil'
const prisma = new PrismaClient()

async function main() {
  await prisma.learningFocus.deleteMany({})
  await prisma.student.deleteMany({})
  await prisma.dailyScheduleItem.deleteMany({})
  await prisma.dailySchedule.deleteMany({})
  await prisma.book.deleteMany({})
  await prisma.weeklyPlan.deleteMany({})

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

  const currentDate = new Date()
  const startingSunday = getSundayOfCurrentWeek(currentDate)
  const endingSaturday = getSaturdayOfCurrentWeek(currentDate)

  await prisma.weeklyPlan.create({
    data: {
      startDate: startingSunday,
      endDate: endingSaturday,
      resourcesNeeded: ['sunscreen', 'snorkel mask', 'water shoes for Jonah'],
      activities: [
        'swimming with dolphins, Atlantis submarine, playing with cousins',
      ],
      books: {
        create: [
          {
            title: "Children's Atlas",
            author: 'Usborne',
          },
          {
            title: 'Animal Smackdown',
            author: 'Unknown',
          },
        ],
      },
      dailySchedules: {
        create: [
          {
            dailyScheduleItems: {
              create: [
                {
                  planDescription: 'swimming with dolphins',
                },
              ],
            },
          },
          {
            dailyScheduleItems: {
              create: [
                {
                  planDescription: 'stargaze on the ship',
                },
              ],
            },
          },
        ],
      },
    },
  })
}

main().then(() => {
  console.log('Data seeded...')
})
