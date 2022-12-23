import * as request from "supertest";

const req = (server, { query, variables = {} }) =>
  request(server).post("/graphql").send({
    query,
    variables,
  });

export default req;
