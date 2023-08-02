import { builder } from '../builder'
import { prisma } from '../db'

builder.prismaObject('WeeklyPlan', {
  fields: (t) => ({
    id: t.exposeID('id'),
    startDate: t.expose('startDate', {
      type: 'Date',
    }),
    endDate: t.expose('endDate', {
      type: 'Date',
    }),
    books: t.relation('books'),
    resourcesNeeded: t.exposeStringList('resourcesNeeded'),
    activities: t.exposeStringList('activities'),
    dailySchedules: t.relation('dailySchedules'),
  }),
})

builder.queryField('weeklyPlan', (t) =>
  t.prismaField({
    type: 'WeeklyPlan',
    nullable: true,
    resolve: async (query, root, args, ctx, info) => {
      const today = new Date()

      return prisma.weeklyPlan.findFirst({
        ...query,
        where: {
          startDate: {
            lte: today.toISOString(),
          },
          endDate: {
            gte: today.toISOString(),
          },
        },
      })
    },
  })
)
