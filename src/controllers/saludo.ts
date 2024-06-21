import { FastifyPluginAsync } from "fastify";

const usuarios = [
  { id: 1, nombre: "Juan" },
  { id: 2, nombre: "Pedro" },
  { id: 3, nombre: "María" },
];

const saludo: FastifyPluginAsync = async (instance) => {
  instance.get("/", async (request, reply) => {
    reply.send({ hello: "world", data: usuarios });
  });
};

export default saludo;
