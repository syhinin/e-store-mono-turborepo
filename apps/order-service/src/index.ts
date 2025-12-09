import Fastify from "fastify";

const PORT = 8001;
const fastify = Fastify();

// Health check endpoint
fastify.get("/health", async (request, reply) => {
  const data = {
    uptime: process.uptime(),
    message: "Ok",
    date: new Date(),
  };
  return reply.status(200).send(data);
});

const start = async () => {
  try {
    await fastify.listen({ port: PORT });
    console.log(`Order service is running on port ${PORT}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
