import { builder } from '../builder'
import { prisma } from '../db'

builder.prismaObject('DailySchedule', {
  fields: (t) => ({
    id: t.exposeID('id'),
    date: t.expose('date', {
      type: 'Date',
    }),
    dailyScheduleItems: t.relation('dailyScheduleItems'),
  }),
})
