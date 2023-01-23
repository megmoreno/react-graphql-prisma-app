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
    type: ['WeeklyPlan'],
    resolve: async (query, root, args, ctx, info) => {
      return prisma.weeklyPlan.findMany({ ...query })
    },
  })
)
