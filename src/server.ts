import fastify from 'fastify';

const app = fastify();
const PORT = Number(process.env.PORT || 3000);

app.get('/', async (request, reply) => {
  return { message: 'Hello, Heroku with Fastify!' };
});

app.get('/prompts', async (request, reply) => {
  
  return { message: 'Hello, Prompts!' };

});

export function startServer(port = PORT) {
  app.listen({ port, host: '0.0.0.0' }, (err, address) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    console.log(`Server is running at ${address}`);
  });
}

startServer();