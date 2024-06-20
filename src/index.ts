import fastify from "fastify";

const api = async () => {
  const api = fastify({ logger: true });

  api.get("/", async (request, reply) => {
    return { hello: "world" };
  });

  await api.listen({ host: "0.0.0.0", port: 3003 });
};

api();
