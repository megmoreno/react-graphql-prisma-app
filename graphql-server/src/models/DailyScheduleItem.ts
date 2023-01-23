import { builder } from '../builder'
import { prisma } from '../db'

builder.prismaObject('DailyScheduleItem', {
  fields: (t) => ({
    id: t.exposeID('id'),
    time: t.expose('time', {
      type: 'Date',
    }),
    planDescription: t.exposeString('planDescription'),
  }),
})
