import { ArgumentsHost, Catch } from "@nestjs/common";
import { GqlExceptionFilter } from "@nestjs/graphql";
import { Prisma } from "prisma/client/main";
import { NotFoundException, UniqueFieldFailedException } from "../error";

@Catch(Prisma.PrismaClientKnownRequestError)
export class PrismaClientExceptionFilter implements GqlExceptionFilter {
  catch(exception: Prisma.PrismaClientKnownRequestError, host: ArgumentsHost) {
    switch (exception.code) {
      case "P2002":
        const field = (exception.meta.target as string).split("_")[1];
        throw new UniqueFieldFailedException(field);
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
