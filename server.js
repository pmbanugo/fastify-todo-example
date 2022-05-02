const fastify = require("fastify")({
  logger: true,
});
const todos = require("./todo.json");

fastify.get("/", function (request, reply) {
  const data = Object.entries(todos).map((x) => x[1]);
  reply.send(data);
});

fastify.get("/:id", function (request, reply) {
  const data = todos[request.params.id];
  reply.send(data);
});

fastify.listen(3000, "0.0.0.0", function (err, address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  fastify.log.info(`server listening on ${address}`);
});
