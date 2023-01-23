import { createSchema, createYoga } from 'graphql-yoga'
import { schema } from './schema'

var http = require('http')

const port = Number(process.env.API_PORT) || 4000

const yoga = createYoga({
  schema: schema,
})

const server = http.createServer(yoga)

server.listen(port, () => {
  console.log(`GraphQL Server ready at http://localhost:${port}/graphql`)
})
