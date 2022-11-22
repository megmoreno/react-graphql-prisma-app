import { builder } from '../builder'
import { prisma } from '../db'

builder.prismaObject('Student', {
  fields: (t) => ({
    id: t.exposeID('id'),
    name: t.exposeString('name'),
    learningFocuses: t.relation('learningFocuses'),
  }),
})

builder.queryField('students', (t) =>
  t.prismaField({
    type: ['Student'],
    resolve: async (query, root, args, ctx, info) => {
      return prisma.student.findMany({ ...query })
    },
  })
)
