import { GraphQLDefinitionsFactory } from "@nestjs/graphql";
import { Config } from "./config";

const definitionsFactory = new GraphQLDefinitionsFactory();

definitionsFactory.generate(Config.getGqlConfig());
