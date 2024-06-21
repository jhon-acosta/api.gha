import fastify from "fastify";
import controllers from "./controllers";

const api = async () => {
  const api = fastify({ logger: true });
  api.register(controllers);
  await api.listen({ host: "0.0.0.0", port: 3003 });
};

api();
