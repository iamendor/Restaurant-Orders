import { ArgumentsHost, Catch, NotFoundException } from "@nestjs/common";
import { GqlExceptionFilter } from "@nestjs/graphql";
import { Prisma } from "@prisma/client";
import { SomethingWentWrongException } from "../error";

@Catch(Prisma.PrismaClientKnownRequestError)
export class PrismaClientException implements GqlExceptionFilter {
  catch(exception: Prisma.PrismaClientKnownRequestError, host: ArgumentsHost) {
    switch (exception.code) {
      case "P2002":
        throw new SomethingWentWrongException("unique field failed");
      case "P2001":
      case "P2015":
      case "P2018":
      case "P2025":
        throw new NotFoundException();
      default:
        break;
    }
    return exception;
  }
}
