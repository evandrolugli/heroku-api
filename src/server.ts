import fastify from 'fastify';
//import { prisma } from './lib/prisma';

const app = fastify();
const PORT = Number(process.env.PORT || 3000);

app.get('/', async (request, reply) => {
  return { message: 'Hello, Heroku with Fastify!' };
});

app.get('/prompts', async (request, reply) => {
  
  return { message: 'Hello, Prompts!' };
  
  //const prompts = await prisma.prompt.findMany()

  //return prompts;

});

export function startServer(port = PORT) {
  app.listen({ port, host: '127.0.0.1' }, (err, address) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    console.log(`Server is running at ${address}`);
  });
}

startServer();