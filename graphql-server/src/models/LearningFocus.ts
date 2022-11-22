import { builder } from '../builder'

builder.prismaObject('LearningFocus', {
  fields: (t) => ({
    id: t.exposeID('id'),
    name: t.exposeString('name'),
    description: t.exposeString('description'),
    createdAt: t.expose('createdAt', {
      type: 'Date',
    }),
  }),
})
