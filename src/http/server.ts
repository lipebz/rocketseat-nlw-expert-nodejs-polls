import fastify from 'fastify'

const app = fastify()

app.get('/', () => {
  return 'Hello'
})

app.listen({ port: 8080, host: '0.0.0.0' }).then(() => {
    console.log('Servidor iniciado na porta 8080')
})