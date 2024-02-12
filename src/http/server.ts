import fastify from 'fastify'
import { PrismaClient } from '@prisma/client'
import { z } from 'zod'

const app = fastify()

const prisma = new PrismaClient()

app.post('/polls', async (request, resposne) => {

  const createPollBody = z.object({
    title: z.string(),
  })

  const { title } = createPollBody.parse(request.body)

  const poll = await prisma.poll.create({
    data: {
      title,
    }
  })

  return resposne.status(201).send(poll)
})

app.listen({ port: 8080, host: '0.0.0.0' }).then(() => {
    console.log('Servidor iniciado na porta 8080')
})