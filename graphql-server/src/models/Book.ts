import { builder } from '../builder'
import { prisma } from '../db'

builder.prismaObject('Book', {
  fields: (t) => ({
    id: t.exposeID('id'),
    title: t.exposeString('title'),
    author: t.exposeString('author'),
  }),
})
