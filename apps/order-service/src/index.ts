import Fastify from "fastify";

const PORT = 8001;
const fastify = Fastify();

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
