import saludo from "./saludo";
import { FastifyPluginAsync } from "fastify";

const controller: FastifyPluginAsync = async (instance) => {
  instance.register(saludo, { prefix: "/saludo" });
};

export default controller;
